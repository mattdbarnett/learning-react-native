import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { detailsColour } from './Colours.js'

const SubContainer = ({ children }) => {
    return (
        <View 
            style={{ 
                height: '20%',
                margin: 20,
                backgroundColor: '#E5E5E5',
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#E5E5E5',
                alignItems: 'center', 
                justifyContent: 'center', 
                }}
        >
            {children}
        </View>
    )
}

export default function DetailsContent({navigation}) {
    const [count, setCount] = useState(0);

    return(
        <SubContainer>
            <Text>You clicked {count} times</Text>
            <Pressable
                onPress={() =>{
                    setCount(count + 1)
                }}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 10,
                    padding: 10,
                    borderRadius: 4,
                    elevation: 3,
                    backgroundColor: detailsColour,
                }}
                >
                    <Text
                        style={{
                            color: 'white',
                        }}>
                        Press me!
                    </Text>
            </Pressable>
        </SubContainer>
    );
}