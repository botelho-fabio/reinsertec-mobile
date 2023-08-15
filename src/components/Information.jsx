import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, fonts } from 'settings/themes';

export function Information({ type, label}) {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      {type === 'interaction' ? (
        <Icon
          onPress={() => setIsEnabled(!isEnabled)}
          name='check'
          style={isEnabled ? styles.checkIcon : styles.uncheckIcon}
        />
      ) : (
        <Icon
          name={type === 'information' ? 'information' : 'circle'}
          style={styles.icon}
        />
      )}

      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    marginBottom: 24,

    borderTopWidth: 1,
    borderTopColor: colors.gray_300,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_300,
  },
  text: {
    flex: 1,
    color: colors.gray_500,
    textAlign: 'left',
    fontFamily: fonts.medium,
    fontSize: 16,
  },
  icon: {
    color: colors.quaternary,
    fontSize: 24,
    marginRight: 16,
  },
  checkIcon: {
    color: colors.white,
    fontSize: 16,
    marginRight: 16,
    padding: 4,
    borderRadius: 8,
    backgroundColor: colors.terciary
  },
  uncheckIcon: {
    color: 'transparent',
    fontSize: 12,
    marginRight: 16,
    padding: 4,
    borderRadius: 8,
    borderColor: colors.terciary,
    borderWidth: 2,
  },
});