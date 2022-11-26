import React, {useEffect, useState} from 'react';
import Input from 'src/components/Input';

import {Container, Separator} from './styles';
import Button from 'src/components/Button';
import RadioGroup from 'react-native-radio-buttons-group';

import {getCategories, incomeCreate, outcome} from './services';
import {useAuth} from 'src/hooks/auth';

import {useNavigation} from '@react-navigation/native';

interface ICategories {
  id: string;
  name: string;
}

const Cadastrar = ({route}) => {
  const {user, token} = useAuth();
  const {operationText} = route.params;
  const navigation = useNavigation();

  const [categories, setCategories] = useState<ICategories[]>([]);

  const [category, setCategory] = useState('');

  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  function onPressRadioButton(radioButtonsArray) {
    const categoryFiltered = radioButtonsArray.filter((c) => c.selected);
    setCategory(categoryFiltered[0].id);
  }

  async function handleCategories() {
    const {data} = await getCategories(token);

    const mapped = data.map((c) => {
      return {
        id: c.id,
        label: c.name,
        value: c.id,
      };
    });
    setCategories(mapped);
  }

  async function createIncomeOutcome() {
    if (operationText === 'income') {
      await incomeCreate({
        categoriesId: category,
        date: new Date(),
        description: name,
        userId: user.id,
        value: Number(value),
      });
      return navigation.navigate('Dashboard');
    }
    await outcome({
      categoriesId: category,
      date: new Date(),
      description: name,
      userId: user.id,
      value: Number(value),
    });
    return navigation.navigate('Dashboard');
  }

  useEffect(() => {
    handleCategories();
  }, []);

  return (
    <Container>
      <Input
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Separator />
      <Input
        placeholder="Valor"
        value={value}
        onChangeText={(text) => setValue(text)}
      />

      <RadioGroup
        containerStyle={{
          marginTop: 12,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
        radioButtons={categories}
        onPress={onPressRadioButton}
      />

      <Button style={{top: 12}} onPress={() => createIncomeOutcome()}>
        Cadastrar
      </Button>
    </Container>
  );
};

export default Cadastrar;
