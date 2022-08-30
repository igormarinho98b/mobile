import '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

type DefaultParams = Record<string, any>;

declare module '@react-navigation/native' {
  export function useRoute<T extends DefaultParams>(): RouteProp<
    Record<string, T>,
    string
  >;
}
