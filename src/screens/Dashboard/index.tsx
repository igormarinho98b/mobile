import React, {useEffect, useState, useCallback} from 'react';
import {TouchableOpacity, SafeAreaView} from 'react-native';

import {faPowerOff, faEye} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {getUserIncomeBalance, getUserOutcomeBalance} from './service';

import {useAuth} from 'src/hooks/auth';

import {
  Container,
  HelloUser,
  TextBold,
  Header,
  TopHeaderIconsWrapper,
} from './styles';

import IncomeOutComeScrollView from 'src/components/IncomeOutComeScrollView';

const safeAreStyles = {
  flex: 1,
  backgroundColor: '#5636d3',
};

const Dashboard: React.FC = () => {
  const {user, signOut} = useAuth();
  const [canSeeBalance, setCanSeeBalance] = useState(false);
  const [incomeBalance, setIncomeBalance] = useState(0);
  const [outcomeBalance, setOutcomeBalance] = useState(0);

  const handleCanSeeBalance = () => {
    setCanSeeBalance(!canSeeBalance);
  };

  const fetchIncomeBalance = useCallback(async () => {
    const {data} = await getUserIncomeBalance(user.id);
    setIncomeBalance(data);
  }, [user.id]);

  const fetchOutcomeBalance = useCallback(async () => {
    const {data} = await getUserOutcomeBalance(user.id);
    setOutcomeBalance(data);
  }, [user.id]);

  useEffect(() => {
    Promise.all([fetchIncomeBalance, fetchOutcomeBalance]);
    fetchIncomeBalance();
  }, [fetchIncomeBalance, fetchOutcomeBalance]);

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
    </SafeAreaView>
  );
};

export default Dashboard;
