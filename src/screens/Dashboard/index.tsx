import React, {useEffect, useState, useCallback} from 'react';
import {TouchableOpacity, SafeAreaView} from 'react-native';

import {faPowerOff, faEye} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
  getUserIncomeBalance,
  getUserOutcomeBalance,
  getBalanceDetails,
} from './service';

import {useAuth} from 'src/hooks/auth';

import {
  Container,
  HelloUser,
  TextBold,
  Header,
  TopHeaderIconsWrapper,
  ListViewWrapper,
  ListText,
} from './styles';

import IncomeOutComeScrollView from 'src/components/IncomeOutComeScrollView';
import ListScrollView from 'src/components/ListScrollView';
import ListCard from 'src/components/ListCard';
import {useNavigation} from '@react-navigation/native';
import {getCategories} from '../Cadastrar/services';

const safeAreStyles = {
  flex: 1,
  backgroundColor: '#5636d3',
};

interface IListCardProps {
  id: string;
  description: string;
  value: number;
  type: 'income' | 'outcome';
  categoriesId: string;
}

interface ICategories {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const {user, signOut, token} = useAuth();
  const [canSeeBalance, setCanSeeBalance] = useState(false);
  const [incomeBalance, setIncomeBalance] = useState(0);
  const [outcomeBalance, setOutcomeBalance] = useState(0);
  const [balanceDetails, setBalanceDetails] = useState<IListCardProps[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);

  const navigation = useNavigation();

  const handleCanSeeBalance = () => {
    setCanSeeBalance(!canSeeBalance);
  };

  const fetchIncomeBalance = useCallback(async () => {
    const {data} = await getUserIncomeBalance(user.id, token);
    setIncomeBalance(data);
  }, [user.id, token]);

  const fetchOutcomeBalance = useCallback(async () => {
    const {data} = await getUserOutcomeBalance(user.id, token);

    setOutcomeBalance(data);
  }, [user.id, token]);

  const fetchBalanceDetails = useCallback(async () => {
    const {data} = await getBalanceDetails(user.id, token);

    setBalanceDetails(data);
  }, [user.id, token]);

  const categoryMap = (id: string) => {
    return categories.find((category) => category.id === id)?.name;
  };

  useEffect(() => {
    async function fetchCategories() {
      const {data} = await getCategories(token);
      setCategories(data);
    }
    fetchCategories();
  }, [token]);

  useEffect(() => {
    return navigation.addListener('focus', () => {
      setBalanceDetails([]);
      fetchBalanceDetails();
    });
  }, [navigation, fetchBalanceDetails]);

  useEffect(() => {
    Promise.all([
      fetchIncomeBalance(),
      fetchOutcomeBalance(),
      fetchBalanceDetails(),
    ]);
  }, [fetchIncomeBalance, fetchOutcomeBalance, fetchBalanceDetails]);

  return (
    <SafeAreaView style={{...safeAreStyles}}>
      <Container>
        <Header>
          <HelloUser>
            Olá,{'\n'}
            <TextBold>{user.name}</TextBold>
          </HelloUser>

          <TopHeaderIconsWrapper>
            <TouchableOpacity onPress={() => handleCanSeeBalance()}>
              <FontAwesomeIcon icon={faEye} color="red" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => signOut()}>
              <FontAwesomeIcon icon={faPowerOff} color="red" size={20} />
            </TouchableOpacity>
          </TopHeaderIconsWrapper>
        </Header>

        <IncomeOutComeScrollView
          canSeeBalance={canSeeBalance}
          incomeBalance={incomeBalance}
          outComeBalance={outcomeBalance}
        />
      </Container>

      <ListViewWrapper>
        <ListText>Listagem</ListText>
        <ListScrollView>
          {balanceDetails.map((transaction) => (
            <ListCard
              key={transaction.id}
              id={transaction.id}
              description={transaction.description}
              value={transaction.value}
              type={transaction.type}
              category={categoryMap(transaction.categoriesId)}
            />
          ))}
        </ListScrollView>
      </ListViewWrapper>
    </SafeAreaView>
  );
};

export default Dashboard;
