import React from 'react';
import {createIconSet} from 'react-native-vector-icons';

import {useTheme} from 'styled-components/native';

import awesomeicons from './resources/awesomeicons.json';

const RNIcon = createIconSet(awesomeicons, 'awesomeicons', 'awesomeicons.ttf');

export interface OwnProps {
  name: string;
  size?: number;
  color?: string;
}

function Icon({name, color, size}: OwnProps) {
  const theme = useTheme();

  return (
    <RNIcon
      color={color || theme.colors.icon.primary}
      name={name}
      size={size || 30}
    />
  );
}

export default Icon;
