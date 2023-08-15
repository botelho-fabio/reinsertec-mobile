import { Text, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, fonts } from 'settings/themes';

export function RadioButton({ label, options, value, setValue }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>

      {options.map((item, index) => (
        <View key={index} style={styles.option}>
          <Icon
            onPress={() => setValue(item)}
            name='check'
            style={value !== item ? styles.iconUnmarked : styles.iconMarked}
          />

          <Text
            style={value !== item ? styles.textUnmarked : styles.textMarked}
          >
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.gray_600,
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50%',
    marginTop: 8,
  },
  iconUnmarked: {
    marginRight: 8,
    padding: 4,

    color: 'transparent',
    fontSize: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.gray_500,
  },
  iconMarked: {
    marginRight: 8,
    padding: 4,
    color: colors.white,
    fontSize: 16,

    borderRadius: 8,
    backgroundColor: colors.terciary
  },
  textUnmarked: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.gray_400,
  },
  textMarked: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.terciary,
  },
});