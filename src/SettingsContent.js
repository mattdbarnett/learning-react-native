import * as React from 'react';
import {View, Text} from 'react-native';

export default function SettingsContent({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> This is the Settings page </Text>
    </View>
  );
}
