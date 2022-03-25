# React_Native_Working_With_WebView
React Native Working With View Example

#### Note : I have not used SafeAreaView from react native core component because it some times don't work properly.

---
### What is WebView

> WebView renders web content in a native view.


---
### Prerequisite

1. Download Node JS from : https://nodejs.org/
2. Install Node JS
3. Check if installed successfully using commands: \
                                                   1. node --version\
                                                   2. npm --version

---
### How To Run

1. Open Command Line
2. Move to project directory
4. Run command "npm install" to install node modules
5. Run command "npm start" to start expo cli
6. Let it get started. Then select option to run on appropriate device
7. Make sure that an emulator is running\ or else if you are using your mobile make sure that USB debugging is turned on
8. You will see the output on the targeted device


---
# Contribute 

> Give a thanks with coffee [Here](https://www.buymeacoffee.com/ayushnavadiya).\
> https://www.buymeacoffee.com/ayushnavadiya

---
## Output

<img src="https://github.com/Ayush-Navadiya/React_Native_Working_With_WebView/blob/master/Output/output.jpg" width=250>



# Getting started from scratch


---
### Prerequisite

1. Download Node JS from : https://nodejs.org/
2. Install Node JS
3. Check if installed successfully using commands: \
                                                   1. node --version\
                                                   2. npm --version

Install Expo-cli to start with react native expo app and if already installed skip this installation:

```bash
npm install --global expo-cli
```

Initialize app with the following command:

```bash
expo init your-project-name
```

Note: When You Run the 'expo init' command it will ask you to choose template go with: \
 - blank : a minimal app as clean as an empty canvas


---
## Running Program 
1. Open Command Line
2. Move to project directory
4. Run command "npm install" to install node modules
5. Run command "npm start" to expo cli
6. Let it get started then select option to run on appropriate device
7. Make sure that an emulator is running\ or else if you are using your mobile make sure that USB debugging is turned on
8. You will see the output on the targeted device
9. Run command
```bash
npm install react-native-webview --save
```
10. To see the output on screen. Change the app.js code with the code given bellow

```

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

```


