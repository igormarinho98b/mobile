import React from 'react';

import {Container} from './styles';

interface Props {
  children: React.ReactNode;
}

const ListScrollView: React.FC<Props> = ({children}) => {
  return <Container vertical>{children}</Container>;
};

export default ListScrollView;
