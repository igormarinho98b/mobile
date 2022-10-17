import React, {useState} from 'react';
import {TouchableOpacity, SafeAreaView} from 'react-native';

import {faPowerOff, faEye} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

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

  const handleCanSeeBalance = () => {
    setCanSeeBalance(!canSeeBalance);
  };

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

        <IncomeOutComeScrollView canSeeBalance={canSeeBalance} />
      </Container>
    </SafeAreaView>
  );
};

export default Dashboard;
