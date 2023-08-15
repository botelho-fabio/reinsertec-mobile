import { Image, Text, View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, fonts } from 'settings/themes';

export function Header({ type, label, onPress }) {
  const navigation = useNavigation();

  return (
    <>
      {type !== 'home' ? (
        <View style={styles.containerDefault}>
          <Icon
            name='arrow-left'
            style={
              type === 'primary' ? styles.iconPrimary : styles.iconSecondary
            }
            onPress={() => navigation.goBack()}
          />
          <Text
            style={
              type === 'primary' ? styles.textPrimary : styles.textSecondary
            }
          >
            {label}
          </Text>
        </View>
      ) : (
        <View style={styles.containerHome}>
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={require('../assets/logo.png')}
          />
          <Icon
            name='menu'
            style={styles.iconHome}
            onPress={onPress}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerDefault: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    height: 120,
  },
  iconPrimary: {
    position: 'absolute',
    left: 0,
    padding: 8,
    fontSize: 36,

    borderRadius: 64,
    color: colors.terciary,
    backgroundColor: colors.terciaryRGBA,
  },
  textPrimary: {
    fontSize: 28,
    fontFamily: fonts.medium,
    color: colors.terciary,
  },
  textSecondary: {
    fontSize: 28,
    fontFamily: fonts.medium,
    color: colors.white,
  },
  iconSecondary: {
    position: 'absolute',
    left: 0,
    padding: 8,
    fontSize: 36,

    borderRadius: 64,
    color: colors.white,
    backgroundColor: colors.whiteRGBA,
  },
  containerHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    height: 120,
    paddingTop: 24,
    paddingHorizontal: 24,
    marginBottom: 16,

    elevation: 8,
    shadowColor: colors.shadow,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_50,
    backgroundColor: colors.white,
  },
  logo: {
    height: 64,
    width: 128,
  },
  iconHome: {
    color: colors.quaternary,
    fontSize: 56,
  },
})