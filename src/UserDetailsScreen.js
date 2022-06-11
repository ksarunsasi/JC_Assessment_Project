import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserDetailsScreen = ({route}) => {
  let item = route.params.userDetails;
  return (
    <View style={styles.detailContainer}>
      <View style={styles.detailRow}>
        <Text style={styles.font}>{'Name: '}</Text>
        <Text>{item.username}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.font}>{'Address: '}</Text>
        <Text>
          {item.address.street +
            ', ' +
            item.address.suite +
            ', ' +
            item.address.city +
            '-' +
            item.address.zipcode}
        </Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.font}>{'Phone: '}</Text>
        <Text>{item.phone}</Text>
      </View>
      <View>
        <Text style={styles.font}>{'Company'}</Text>
        <Text>{item.company.name}</Text>
        <Text>{item.company.catchPhrase}</Text>
        <Text>{item.company.bs}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailRow: {
    flexDirection: 'row',
    margin: 3,
  },
  detailContainer: {
    flex: 1,
    margin: 10,
  },
  font: {
    fontWeight: 'bold',
  },
});

export default UserDetailsScreen;
