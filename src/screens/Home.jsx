import { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Text,
  View,
  StyleSheet,
  Pressable,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header } from 'components/Header';
import { OptionsButton } from 'components/buttons/OptionsButton';
import { Modal } from 'components/Modal';
import { Input } from 'components/Input';
import { DefaultButton } from 'components/buttons/DefaultButton';

import { colors, fonts } from 'settings/themes';

const width = Dimensions.get('window').width - 48;

export function Home() {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(-(width + 48))).current;

  const [drawer, setDrawer] = useState(false);
  const [modal, setModal] = useState({ modalType: 'create', visible: false });

  const drawerOptions = [
    {
      label: 'Tutorial',
      icon: 'book-open-page-variant',
      onPress: () => setModal({ modalType: 'tutorial', visible: true }),
    },
    {
      label: 'Projetos',
      icon: 'folder',
      onPress: () => navigation.navigate('Projects'),
    },
    {
      label: 'Configurações',
      icon: 'wrench',
      onPress: () => navigation.navigate('Settings'),
    },
  ];

  const modals = [
    {
      label:
      'Gostaria de aprender como cadastrar um projeto? Então arraste para o lado',
      iconName: 'comment-question'
    },
    {
      label: 'O sensor irá emitir um sinal sonoro pedindo que pare, tenha atenção',
      iconName: 'music'
    },
    {
      label: 'Serão necessárias x fotos, sempre verifique a qualidade das imagens',
      iconName: 'camera'
    },
    {
      label: 'Posicione o telefone no melhor ângulo e registre a foto',
      iconName: 'camera'
    },
    {
      label: 'Após isso é so enviar para análise e aguardar',
      iconName: 'information'
    },
  ];

  const changeDote = (type, index) => scrollX.interpolate({
    inputRange: [width * (index - 1), width * index, width * (index + 1)],
    outputRange:
      type === 'bg'
        ? [colors.gray_300, colors.terciary, colors.gray_300]
        : [12, 24, 12],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Header type='home' onPress={() => setDrawer(true)}/>

      <View style={styles.wrapperRow}>
        <View style={styles.wrapper}>
          <Text style={styles.textGray}>Latitude</Text>
          <Text style={styles.textGreen}>50.85357</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.textGray}>Longitude</Text>
          <Text style={styles.textGreen}>100.95412</Text>
        </View>
      </View>

      <Modal
        type='small'
        visible={modal.visible}
        setVisible={() => setModal({ modalType: '', visible: false })}
        item={
          modal.modalType === 'create' ? (
            <View style={styles.createModal}>
              <Text style={styles.createText}>Criar Projeto</Text>

              <Input
                label='Projeto'
                type='default'
                placeholder='Digite o nome'
              />

              <View style={{ flexDirection: 'row' }}>
                <DefaultButton
                  label='Área do Projeto'
                  type='select'
                  iconName='image-marker'
                  onPress={() => {}}
                />
              </View>

              <View style={styles.wrapperButtons}>
                <DefaultButton
                  label='Confirmar'
                  type='primary'
                  onPress={() => setModal({ modalType: '', visible: false })}
                />

                <DefaultButton
                  label='Cancelar'
                  type='secondary'
                  onPress={() => setModal({ modalType: '', visible: false })}
                />
              </View>
            </View>
          ) : (
            <>
              <ImageBackground
                style={styles.headerTutorial}
                imageStyle={styles.headerTutorial}
                source={require('../assets/backgroundModal.png')}
              >
                <ScrollView
                  contentContainerStyle={styles.scrollViewTutorial}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={1}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } }}],
                    { useNativeDriver: false },
                  )}
                >
                  {modals.map((item, index) => (
                    <View key={index}>
                      <Icon name={item.iconName} style={styles.iconTutorial} />
                      <Text style={styles.textTutorial}>{item.label}</Text>
                    </View>
                  ))}
                </ScrollView>
              </ImageBackground>

              <View style={styles.wrapperRow}>
                {modals.map((item, index) => (
                  <Animated.View
                    key={index}
                    style={[
                      styles.dote,
                      {
                        width: changeDote('width', index), 
                        backgroundColor: changeDote('bg', index)
                      }
                    ]} 
                  />
                ))}
              </View>
            </>
          )
        }
      />

      <Pressable
        style={styles.button}
        android_ripple={{ borderless: false, radius: 33 }}
        onPress={() => setModal({ modalType: 'create', visible: true })}
      >
        <Icon name='plus' style={styles.icon} />
      </Pressable>

      {drawer && (
        <>
          <Pressable style={styles.overlay} onPress={() => setDrawer(false)} />

          <View style={styles.drawer}>
            <View style={styles.drawerHeader}>
              <Image
                resizeMode='contain'
                style={styles.logo}
                source={require('../assets/logo.png')}
              />
              <Image
                resizeMode='contain'
                style={styles.avatar}
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/61062435?v=4'
                }}
              />
            </View>

            <View style={styles.drawerOptions}>
              {drawerOptions.map((item, index) => (
                <OptionsButton
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  onPress={item.onPress}
                />
                ))
              }
            </View>

            <OptionsButton
              label='Sair'
              icon='logout'
              onPress={() =>  navigation.navigate('SignIn')}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: width - 48,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: colors.overlay,
  },
  drawerHeader: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 24,
    marginBottom: 16,
  },
  logo: {
    height: 64,
    width: 128,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 56,
  },
  drawerOptions: {
    width: '100%',
    paddingBottom: 32,
    marginBottom: 48,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_200,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: colors.gray_50,
  },
  wrapperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'auto',
    padding: 24,
    paddingTop: 0,
  },
  wrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 'auto',
  },
  textGray: {
    fontSize: 16,
    color: colors.gray_500,
    fontFamily: fonts.regular,
  },
  textGreen: {
    fontSize: 28,
    color: colors.terciary,
    fontFamily: fonts.semiBold,
  },
  createModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,

    borderRadius: 16,
  },
  createText: {
    width: '100%',
    textAlign: 'center',
    paddingBottom: 24,
    marginBottom: 24,

    fontSize: 24,
    color: colors.terciary,
    fontFamily: fonts.semiBold,
    borderBottomColor: colors.gray_300,
    borderBottomWidth: 1,
  },
  wrapperButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 16,
  },
  headerTutorial: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  scrollViewTutorial: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  iconTutorial: {
    alignSelf: 'center',
    marginBottom: 8,
    fontSize: 56,
    color: colors.white,
  },
  textTutorial: {
    textAlign: 'center',
    width,
    paddingHorizontal: 16,
    marginTop: 4,

    fontSize: 22,
    color: colors.white,
    fontFamily: fonts.medium,
  },
  dote: {
    height: 12,
    marginHorizontal: 4,
    borderRadius: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    position: 'absolute',
    bottom: 24,
    right: 24,

    borderRadius: 64,
    backgroundColor: colors.terciary,
  },
  icon: {
    fontSize: 56,
    color: colors.white,
  },
});