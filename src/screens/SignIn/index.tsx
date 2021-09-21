import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';

export function SignIn() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <TextInput style={styles.input} onChangeText={setText}/>

      <Text>
        Você digitou: {text}
      </Text>
    </View>
  );
}
