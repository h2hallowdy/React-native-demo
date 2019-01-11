import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';
import SkiiImage from '../assets/skii.png';

export default function(props) {
    return <View style={styles.container}>
        <Text style={styles.title}>CategoryListItem</Text>
        <Image style={styles.categoryImage} source={SkiiImage} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        //IOS
        // shadowColor: '#000',
        // shadowOpacity: 1,
        // shadowRadius: 10,
        // shadowOffset: { width: 0, height: 0 },
        elevation: 2,
        marginBottom: 16     
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    categoryImage: {
        width: 64,
        height: 64
    }
    
    
});