import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { detailsColour } from '../styling/Colours.js'

// Data to be displayed
export const DetailsListData = [
    {
      id: '0',
      title: 'First Item',
    },
    {
      id: '1',
      title: 'Second Item',
    },
    {
      id: '2',
      title: 'Third Item',
    },
  ];

// How each details list component is displayed
export const DetailsListItem = ({ title }) => (
    <View style={DetailsListStyle.DetailsListItem}>
        <Text style={DetailsListStyle.DetailsListText}> {title}</Text>
    </View>
);

// Rendered by details page for each list item
export const DetailsRenderItem  = ({ item }) => (
    <DetailsListItem title={item.title}/>
);

// Styling for details list components
const DetailsListStyle = StyleSheet.create({

    DetailsListItem: {
        flex: 1,
        backgroundColor: detailsColour,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#E5E5E5',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    DetailsListText: {
        fontWeight: 'bold', 
        color: 'white', 
        textAlign: 'center' 
    },

})
