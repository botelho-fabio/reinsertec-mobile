import { useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { Information } from 'components/Information';
import { RadioButton } from 'components/buttons/RadioButton';
import { DefaultButton } from 'components/buttons/DefaultButton';

export function SignUp() {
  const [selectedValue, setSelectedValue] = useState('');
  const functions = [
    'Produtor', 'Assistência Técnica', 'Outros', 'Ensino/Pesquisa'
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        style={styles.container}
        source={require('../assets/authBackground.png')}
      >
        <Header type='default' label='Cadastro' />
        
        <View style={styles.form}>
          <Information
            label='Verifique atentamente os dados inseridos'
            type='information'
          />

          <Input
            label='Nome Completo'
            type='default'
            placeholder='Digite seu nome'
          />
          <Input
            label='CEP'
            type='default'
            placeholder='xxx-xxxxx'
          />
          <Input
            label='Celular'
            type='phoneNumber'
            placeholder='(xx) xxxxxx-xxxx'
          />
          <Input
            label='E-mail'
            type='default'
            placeholder='Digite seu e-mail'
          />

          <RadioButton
            label='Funções'
            options={functions}
            value={selectedValue}
            setValue={setSelectedValue}
          />

          <Information
            label='Aceito os Termos de uso e a Política de Privacidade'
            type='interaction'
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <DefaultButton
            type='primary'
            label='Entrar'
            onPress={() => {}}
          />
        </View>
    </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 32
  },
  form: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: Dimensions.get('window').height/8,
    marginBottom: 16,
  },
}); 