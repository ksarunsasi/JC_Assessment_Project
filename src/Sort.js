import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Sort = props => {
  const [btnlabel, setButtonLabel] = useState('Sort A-Z');

  const onPressSorting = () => {
    if (btnlabel === 'Sort A-Z') {
      props.onSortPress('ASCENDING');
      setButtonLabel('Sort Z-A');
    } else {
      props.onSortPress('DESCENDING');
      setButtonLabel('Sort A-Z');
    }
  };
  
  return (
    <View style={styles.sortingContainer}>
      <Button title={btnlabel} onPress={() => onPressSorting()} />
    </View>
  );
};

const styles = StyleSheet.create({
  sortingContainer: {
    backgroundColor: '#d0d6d6',
    alignItems: 'flex-end',
  },
});

export default Sort;
