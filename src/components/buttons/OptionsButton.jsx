import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, fonts } from 'settings/themes';

export function OptionsButton({ icon, label, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        android_ripple={{ borderless: false, color: colors.gray_200 }}
        style={styles.button}
      >
        <Icon name={icon} style={styles.icon} />
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,

    elevation: 4,
    shadowColor: colors.shadow,
    overflow: 'hidden',
    borderRadius: 12,
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 8,
    padding: 12,

    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray_200,
    backgroundColor: 'white',
  },
  icon: {
    padding: 8,
    marginRight: 16,
    color: colors.white,
    fontSize: 24,

    borderRadius: 10,
    backgroundColor: colors.terciary,
  },
  text: {
    fontSize: 22,
    fontFamily: fonts.medium,
    color: colors.gray_500,
  },
});