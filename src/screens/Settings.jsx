import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
  
import { Header } from 'components/Header';
  
import { colors, fonts } from 'settings/themes';

export function Settings() {
  return (
    <View style={styles.container}>
      <Header label='Configurações' type='primary' />
      <Text style={styles.text}>Configurações</Text>
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 24,
  
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 32,
    fontFamily: fonts.medium,
    color: colors.gray_500,
  },
});