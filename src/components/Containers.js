import React from 'react';
import { View } from 'react-native';

export const DetailsContainer = ({ children }) => {
    return (
        <View 
            style={{ 
                flexDirection: "column",
                flex: 1,
                height: '20%',
                paddingTop: 10,
                paddingBottom: 10,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
                backgroundColor: '#E5E5E5',
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#E5E5E5',
                alignItems: 'center', 
                }}
        >
            {children}
        </View>
    )
}