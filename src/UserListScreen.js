import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import ListUsers from '../src/ListUsers';
import Sort from '../src/Sort';

const UserListScreen = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';
    try {
      const userResponse = await fetch(USER_API_URL);
      const userDataJson = await userResponse.json();
      setUserData(userDataJson);
    } catch (e) {
      setUserData([]);
    }
  };

  const sortUserList = sortType => {
    let userDataClone = Object.assign([], userData);
    if (sortType === 'ASCENDING') {
      userDataClone.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
      );
    } else {
      userDataClone.sort((a, b) =>
        b.name > a.name ? 1 : a.name > b.name ? -1 : 0,
      );
    }
    setUserData(userDataClone);
  };

  const onSortPress = sortType => {
    sortUserList(sortType);
  };

  return (
    <SafeAreaView style={styles.container}>
      {userData.length > 0 ? (
        <View>
          <Sort onSortPress={onSortPress} />
          <ListUsers UserData={userData} />
        </View>
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.errorFont}>{'Fails to load '}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorFont: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default UserListScreen;
