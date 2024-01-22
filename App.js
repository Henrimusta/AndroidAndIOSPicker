import { Platform, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import IosPicker from './components/IosPicker';
import AndroidPicker from './components/AndroidPicker';

export default function App() {
  const [month, setSelectedMonth] = useState(String(new Date().getMonth() + 1))
  return (
    <View style={styles.container}>
      {Platform.OS === 'andoid' &&
        <AndroidPicker month={month} setSelectedMonth={setSelectedMonth} />
      }
      {Platform.OS === 'ios' &&
        <IosPicker month={month} setSelectedMonth={setSelectedMonth} />
      }
    </View>
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
