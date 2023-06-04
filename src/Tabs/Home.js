import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Home = () => {
  const items = useSelector(state => state.post);
  console.log(items);
  return (
    <ScrollView nestedScrollEnabled>
      <View style={styles.container}>
        <Text style={styles.logo}>Olx clone</Text>
        <View style={styles.searchbox}>
          <TextInput
            placeholder="search item here.."
            style={styles.searchInput}
          />
          <Image source={require('../Images/search.png')} style={styles.icon} />
        </View>
        <Text style={styles.heading}>What are yuo looking for ..</Text>
        <View style={{margintop: 20}}>
          <FlatList
            numColumns={3}
            data={[
              {title: 'car', icon: require('../Images/car.png')},
              {title: 'bike', icon: require('../Images/bike.png')},
              {title: 'mobile', icon: require('../Images/mobile.png')},
              {title: 'home', icon: require('../Images/modern-house.png')},
              {title: 'laptop', icon: require('../Images/laptop.png')},
              {title: 'furnitures', icon: require('../Images/furnitures.png')},
            ]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.listItem}>
                  <Image source={item.icon} style={{width: 50, height: 50}} />
                  <Text style={styles.listTilte}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Posted Items</Text>
        <FlatList
          data={items.data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.Item}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                  <Text style={styles.price}>{'INR. ' + item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0004FF',
    marginTop: 20,
    marginLeft: 20,
  },
  searchbox: {
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {width: '85%', marginLeft: 20},
  icon: {width: 24, height: 24},
  heading: {
    fontSize: 20,
    marginLeft: 20,
    color: '#000',
    fontWeight: '600',
    marginTop: 40,
  },
  listItem: {
    width: Dimensions.get('window').width / 3,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEDEDEF8',
    margin: 2,
  },
  listTilte: {marginTop: 10, fontSize: 16, fontWeight: '500'},
  Item: {
    width: '90%',
    height: 100,
    backgroundColor: '#fff',
    marginTop: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  itemImage: {width: 80, height: 80, marginLeft: 10},
  name: {fontSize: 18, fontWeight: '500', marginLeft: 10},
  desc: {fontSize: 16, marginLeft: 10},
  price: {fontSize: 18, fontWeight: '500', marginLeft: 10, color: 'green'},
});
