import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Search from '../Tabs/Search';
import Home from '../Tabs/Home';
import Add from '../Tabs/Add';
import WishList from '../Tabs/WishList';
import User from '../Tabs/User';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Add
          onPost={() => {
            setSelectedTab(0);
          }}
        />
      ) : selectedTab == 3 ? (
        <WishList />
      ) : (
        <User />
      )}
      <View style={styles.bottomTabs}>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(0)}>
          <Image
            source={require('../Images/home.png')}
            style={[
              styles.tabIcons,
              {tintColor: selectedTab == 0 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(1)}>
          <Image
            source={require('../Images/search.png')}
            style={[
              styles.tabIcons,
              {tintColor: selectedTab == 1 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(2)}>
          <Image
            source={require('../Images/add.png')}
            style={[
              styles.tabIcons,
              {tintColor: selectedTab == 2 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(3)}>
          <Image
            source={require('../Images/love.png')}
            style={[
              styles.tabIcons,
              {tintColor: selectedTab == 3 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(4)}>
          <Image
            source={require('../Images/user.png')}
            style={[
              styles.tabIcons,
              {tintColor: selectedTab == 4 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  bottomTabs: {
    width: '100%',
    height: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcons: {
    width: 30,
    height: 30,
  },
});
