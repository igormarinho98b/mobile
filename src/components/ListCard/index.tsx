import React from 'react';

import {
  Container,
  LabelText,
  Value,
  CategoryText,
  LastLineWrapper,
  Date,
} from './styles';

interface IListCardProps {
  id: string;
  description: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
  categoriesId: string;
}

const ListCard: React.FC<IListCardProps> = ({
  id,
  description,
  value,
  type,
  category,
}) => {
  const numberFormatter = (): string => {
    return value.toLocaleString(undefined, {minimumFractionDigits: 2});
  };

  return (
    <Container key={id}>
      <LabelText>{description}</LabelText>
      <Value style={{color: `${type === 'income' ? '#12A454' : '#E83F5B'}`}}>
        R$ {numberFormatter()}
      </Value>

      <LastLineWrapper>
        <CategoryText>{category}</CategoryText>
        <Date>13/05/2022</Date>
      </LastLineWrapper>
    </Container>
  );
};

export default ListCard;
