/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Animated, TouchableOpacity, Text } from 'react-native';

const App = () => {

  const leftValue = useState(new Animated.Value(0))[0];
  const moveBall = () => {
    Animated.timing(leftValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View style={{
          width: 100,
          height: 100,
          borderRadius: 100/2,
          backgroundColor: 'red',
          marginLeft: leftValue
        }}/>
        <TouchableOpacity onPress={moveBall}>
          <Text>Click Me!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     color: 'rgb(0, 0, 0)',
//   },
// });

export default App;
