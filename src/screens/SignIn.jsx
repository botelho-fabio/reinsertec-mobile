import { useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Information } from 'components/Information';
import { Input } from 'components/Input';
import { DefaultButton } from 'components/buttons/DefaultButton';

import { colors, fonts } from 'settings/themes';

export function SignIn() {
  const navigation = useNavigation();

  const [forgotPassword, setForgotPassword] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/authBackground.png')}
    >
      {forgotPassword ? (
        <Information
          label='Utilize o e-mail usado no cadastro e verifique se o link foi recebido no e-mail'
          type='information'
        />
      ) : (
        <Text style={styles.greenText}>
          Bem vindo! Faça login para prosseguir
        </Text>
      )}
          
      <Input
        label='E-mail'
        type='default'
        placeholder='Digite seu e-mail'
      />

      {!forgotPassword && (
        <>
          <Input
            label='Senha'
            type='password'
            placeholder='Digite sua senha'
          />

          <View style={styles.wrapper}>
            <View style={styles.rememberView}>
              <Switch
                style={styles.switch}
                trackColor={{
                  false: colors.gray_300,
                  true: colors.quaternaryRGBA
                }}
                thumbColor={isEnabled ? colors.quaternary : colors.gray_500}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={styles.grayText}>Lembrar Conta</Text>
            </View>

            <Text
              onPress={() => setForgotPassword(true)}
              style={styles.grayText}
            >
              Esqueceu sua Senha?
            </Text>
          </View>
        </>
      )}

      <View style={{ flexDirection: 'row' }}>
        <DefaultButton
          label={forgotPassword ? 'Enviar' : 'Entrar'}
          type='primary'
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      {!forgotPassword && (
        <>
          <View style={styles.wrapper}>
            <View style={styles.line} />
            <Text style={styles.grayText}>ou entre com</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.wrapper}>
            <DefaultButton
              label='Google'
              type='select'
              iconName='google'
              onPress={() => navigation.navigate('Home')}
            />

            <DefaultButton
              label='Facebook'
              type='select'
              iconName='facebook'
              onPress={() => navigation.navigate('Home')}
            />
          </View>

          <Text style={styles.grayText}>Ainda não possui cadastro?</Text>
          <Text
            style={styles.greenText}
            onPress={() => navigation.navigate('SignUp')}
          >
            Cadastre-se
          </Text>
        </>
      )}
    </ImageBackground> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height/4,
    paddingHorizontal: 32
  },
  greenText: {
    marginBottom: 32,
    textAlign: 'center',

    color: colors.terciary,
    fontFamily: fonts.semiBold,
    fontSize: 22,
    fontWeight: '600',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: 16,
    marginBottom: 32,
  },
  rememberView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    marginVertical: -12,
    marginLeft: -4,
    marginRight: 4,
  },
  grayText: {
    color: colors.gray_500,
    textAlign: 'center',
    fontFamily: fonts.medium,
    fontSize: 16,
  },
  line: {
    flex: .44,
    height: 1,
    backgroundColor: colors.gray_200,
  },
});