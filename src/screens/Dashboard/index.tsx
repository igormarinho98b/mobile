import React from 'react';
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';

import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {useAuth} from 'src/hooks/auth';

import {Container, HelloUser, TextBold, Header} from './styles';

import IncomeOutComeScrollView from 'src/components/IncomeOutComeScrollView';

const safeAreStyles = {
  flex: 1,
  backgroundColor: '#5636d3',
};

const Dashboard: React.FC = () => {
  const {user, signOut} = useAuth();
  return (
    <SafeAreaView style={{...safeAreStyles}}>
      <Container>
        <Header>
          <HelloUser>
            Olá,{'\n'}
            <TextBold>{user}</TextBold>
          </HelloUser>

          <TouchableOpacity onPress={() => signOut()}>
            <FontAwesomeIcon icon={faPowerOff} color="red" size={20} />
          </TouchableOpacity>
        </Header>

        <IncomeOutComeScrollView />
      </Container>
    </SafeAreaView>
  );
};

export default Dashboard;
