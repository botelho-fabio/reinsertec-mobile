import {
  Dimensions,
  Modal as RNModal,
  View,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from 'settings/themes';

const width =  Dimensions.get('window').width - 48;

export function Modal({ visible, setVisible, item, type, onRequestClose }) {
  return (
    <RNModal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType='fade'
      hardwareAccelerated
      onRequestClose={onRequestClose}
    >
      <View style={styles.centeredView}>
        <View style={type === 'small' ? styles.modalSmall : styles.modalFull}>
          {item}

          {type === 'small' && (
            <Icon onPress={setVisible} name='close' style={styles.iconClose} />
          )}
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    backgroundColor: colors.overlay,
  },
  modalSmall: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: width,
    width,

    borderRadius: 16,
    elevation: 8,
    shadowColor: '#000',
    backgroundColor: colors.white,
  },
  modalFull: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
  },
  iconClose: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 16,
    right: 16,
    marginBottom: 8,

    color: colors.white,
    fontSize: 36,
  },
})