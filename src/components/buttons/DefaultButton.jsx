import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, fonts } from 'settings/themes';

export function DefaultButton({ type, label, onPress, iconName }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          borderless: false,
          color: type === 'select' && colors.gray_200,
        }}
        style={
          type === 'primary' ? styles.primaryButton
            : type === 'secondary' ? styles.secondaryButton
            : styles.selectButton
        }
      >
        {type === 'select' &&(
          <Icon name={iconName} style={styles.icon} />
        )}
        <Text
          style={
            type === 'primary' ? styles.primaryText
              : type === 'secondary' ? styles.secondaryText
              : styles.selectText
          }
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,

    overflow: 'hidden',
    borderRadius: 12,
    elevation: 4,
    shadowColor: colors.shadow,
  },
  primaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',

    borderRadius: 12,
    backgroundColor: colors.terciary,
  },
  secondaryButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,

    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.terciary,
    backgroundColor: colors.white,
  },
  selectButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 16,

    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray_300,
    backgroundColor: colors.white,
  },
  primaryText: {
    fontSize: 20,
    fontFamily: fonts.medium,
    color: colors.white,
  },
  secondaryText: {
    fontSize: 20,
    fontFamily: fonts.medium,
    color: colors.terciary,
  },
  icon: {
    color: '#1877F2',
    fontSize: 32,
    marginRight: 16,
  },
  selectText: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: colors.gray_500,
  },
});