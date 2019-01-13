import React from 'react';
import { StyleSheet, FlatList, View} from 'react-native';
import ProductListItem from '../components/ProductListItem';
export default class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    }
  };
  

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          images: [
            {
              url:
                'https://loremflickr.com/320/240/cat'
            }
          ],
          name: 'Snowboard',
          price: '500000'
        },
        {
          id: 2,
          images: [
            {
              url:
                'https://loremflickr.com/320/240/dog'
            }
          ],
          name: 'Snowboard 1',
          price: '500000'
        }
      ]
    }
  }

  render() {
    return(
        <FlatList
          data={this.state.products}
          numColumns={2}
          renderItem={({ item }) =>
            <View style={styles.wrapper}>
              <ProductListItem product={item} /> 
            </View>
          } 
          keyExtractor={(item) => `${item.id}`} 
          contentContainerStyle={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8
  }
});
