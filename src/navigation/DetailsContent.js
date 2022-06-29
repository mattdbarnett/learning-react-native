import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, View, Text, Pressable, StatusBar } from 'react-native';
import { detailsColour } from './Colours.js'

let exampleContainers=[];
for(let i = 0; i < 10; i++) {
    exampleContainers.push(i);
}

const SubContainer = ({ children }) => {
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

export default function DetailsContent({navigation}) {
    const [count, setCount] = useState(0);

    return(
        <ScrollView style={{}}>
            <View>
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
                {exampleContainers.map(current=>{
                    return (
                    <SubContainer>
                        <Text> Test Example {current} </Text>
                    </SubContainer>
                    );
                })} 
            </View>
        </ScrollView>
    );
}