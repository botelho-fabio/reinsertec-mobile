import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, fonts } from 'settings/themes';

export function Input({ type, label, placeholder }) {
  const [focus, setFocus] = useState(false);
  const [hidden, setHidden] = useState(true);

  return (  
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.wrapper}>
        <TextInput
          style={!focus ? styles.inputBlur : styles.inputFocus}
          placeholder={placeholder}
          placeholderTextColor={colors.gray_400}
          cursorColor={colors.terciary}
          secureTextEntry={hidden}
          onFocus={() => setFocus(true)}
        />

        {type === 'password' && (
          <Icon
            style={styles.icon}
            name={hidden ? 'eye' : 'eye-off'}
            onPress={() => setHidden(!hidden)}
          />
        )}
      </View>
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.gray_600,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  inputBlur: {
    width: '100%',
    paddingBottom: 4,

    fontSize: 18,
    fontFamily: fonts.medium,
    color: colors.terciary,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_600,
  },
  inputFocus: {
    width: '100%',
    paddingBottom: 4,

    fontSize: 18,
    fontFamily: fonts.medium,
    color: colors.terciary,
    borderBottomWidth: 2,
    borderBottomColor: colors.terciary,
  },
  icon: {
    position: 'absolute',
    bottom: 4,
    right: 0,
    color: colors.gray_500,
    fontSize: 28,
  },
});