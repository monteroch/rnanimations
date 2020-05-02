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
import { View, Animated, TouchableOpacity, Text, Easing } from 'react-native';

const App = () => {

  const heightValue = useState(new Animated.Value(1))[0];
  const [select, setSelect] = useState(false);

  const moveBall = () => {
    if (!select){
      Animated.timing(heightValue, {
        toValue: 2,
        duration: 700,
        useNativeDriver: true,
        easing: Easing.linear
      }).start();
      setSelect(true);
    }else{
      Animated.timing(heightValue, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
        easing: Easing.linear
      }).start();
      setSelect(false);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View style={{
          width: 100,
          height: 100,
          transform: [{scaleY: heightValue}],
          backgroundColor: 'red',
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
