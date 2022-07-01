import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, View, Text, Pressable, StatusBar, FlatList } from 'react-native';
import { detailsColour } from './styling/Colours.js'
import { DetailsContainer } from './components/Containers.js'
import { DetailsListData, DetailsListItem, DetailsRenderItem } from './components/FlatLists.js'

let exampleContainers=[];
for(let i = 0; i < 10; i++) {
    exampleContainers.push(i);
}

export default function DetailsContent({navigation}) {
    const [count, setCount] = useState(0);

    return(
        <ScrollView style={{}}>
            <View>
                <DetailsContainer>
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
                </DetailsContainer>
                <DetailsContainer>
                    <Text>FlatList Example!</Text>
                    <SafeAreaView style={{flex: 1}}>
                        <FlatList
                        horizontal={true}
                        data={DetailsListData}
                        renderItem={DetailsRenderItem}
                        keyExtractor={item => item.id}
                        style={{
                        }}
                        />
                    </SafeAreaView>
                </DetailsContainer>
                {exampleContainers.map(current=>{
                    return (
                    <DetailsContainer>
                        <Text> Test Example {current} </Text>
                    </DetailsContainer>
                    );
                })} 
            </View>
        </ScrollView>
    );
}