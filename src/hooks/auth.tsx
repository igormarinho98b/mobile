import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: {
    name: string;
    id: string;
  };
}
interface AuthContextData {
  user: {
    name: string;
    id: string;
  };
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}) {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet(['token', 'user']);

      // asyncStorage multget returns an key/value pair
      // thats why it's fixed on position 1
      // because I just want the value
      console.log(user);
      if (token[1] && user[1]) {
        setData({token: token[1], user: JSON.parse(user[1])});
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({email, password}) => {
    try {
      const {data: dataResponse} = await api.post('/v1/auth/login', {
        email,
        password,
      });

      console.log(dataResponse, 'data resposne');

      const user = JSON.stringify({
        name: dataResponse.token.payload.preferred_username,
        id: dataResponse.userId,
      });
      const token = dataResponse.token.jwtToken;

      await AsyncStorage.multiSet([
        ['user', user],
        ['token', token],
      ]);

      setData({token, user: JSON.parse(user)});

      return {user, token};
    } catch (err) {
      return err;
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['token', 'user']);

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{user: data.user, signIn, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
