import React from 'react';
import {StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ListUsers = props => {
  const navigation = useNavigation();

  const onItemClick = item => {
    navigation.navigate('UserDetailsScreen', {userDetails: item});
  };

  const renderDivider = () => {
    return <View style={styles.divider} />;
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onItemClick(item)}
        style={styles.itemContainer}>
        <View style={styles.itemRow}>
          <Text>{'Name: '}</Text>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.itemRow}>
          <Text>{'Email: '}</Text>
          <Text>{item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={props.UserData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={renderDivider}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#000000',
  },
  itemRow: {
    flexDirection: 'row',
    margin: 3,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
  },
});

export default ListUsers;
