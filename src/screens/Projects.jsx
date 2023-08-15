import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

import { colors, fonts } from 'settings/themes';
import { Header } from 'components/Header';

const width = Dimensions.get('window').width - 48;

export function Projects() {
  return (
    <FlatList
      data={[1,2,3,4,5,6,7]}
      ListHeaderComponent={<Header label='Projetos' type='primary' />}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      style={styles.container}
      columnWrapperStyle={styles.column}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://img.freepik.com/fotos-gratis/campo-campestre-dia-de-sol-no-campo_181624-24010.jpg'}}
            style={styles.image}
          />
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: colors.gray_50,
  },
  column: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (width-16)/2,
    paddingBottom: 8,
    marginBottom: 16,

    elevation: 4,
    shadowColor: colors.shadow,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.gray_200,
    backgroundColor: colors.white,
  },
  image: {
    width: (width-16)/2,
    height: (width-8)/2.5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    fontSize: 32,
    fontFamily: fonts.medium,
    color: colors.gray_500,
  },
});