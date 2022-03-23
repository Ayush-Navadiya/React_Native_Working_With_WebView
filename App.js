import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <WebView
        source={{
          uri: 'https://www.buymeacoffee.com/ayushnavadiya'
        }}
        style={{ marginTop: 20 }}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
