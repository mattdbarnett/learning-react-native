import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeContent({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> This is the Home page </Text>
        </View>
    );
}