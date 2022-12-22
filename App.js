import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ItemProvider } from './src/context/ItemContext';
import { ListaProvider } from './src/context/ListaContext';
import AppRotas from './src/routes/AppRotas';

export default function App() {
  return (
    <ListaProvider>
      <ItemProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <AppRotas />
        </SafeAreaView>
      </ItemProvider>
    </ListaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292b2c'
  },
});
