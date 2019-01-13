import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductListItem(props) {
    const { product, onAddToCartClick } = props;

    return(
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: product.images[0].url }} />
                <View style={styles.info}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{product.price}</Text>
                        <TouchableOpacity onPress={onAddToCartClick}>
                            <Text style={styles.cartText}>MUA +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>        
    )
};

const styles = StyleSheet.create({
    shadow: {
        //If using IOS, can re-code right here
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        borderColor: '#000',
        backgroundColor: '#FFF',
        elevation: 1,
        overflow: 'hidden'
    },
    img: {
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    info: {
        padding: 8
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    },
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    }
});