import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert, SafeAreaView, Button, Platform, } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from "./app/screens/WelcomeScreen";


export default function App() {
  return <WelcomeScreen />;
  //return <ViewImageScreen />;
}



