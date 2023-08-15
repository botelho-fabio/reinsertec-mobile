import { StatusBar } from 'react-native';

import { Routes } from './src/settings/routes';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle='dark-content'
        backgroundColor={'transparent'}
      />

      <Routes />
    </>
  );
};
