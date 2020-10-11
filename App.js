import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'Eden', id: '1' },
    { name: 'Kevin', id: '2' },
    { name: 'Thbibault', id: '3' },
    { name: 'Romelu', id: '4' },
    { name: 'Karim', id: '5' },
    { name: 'Lionel', id: '6' },
    { name: 'Cristiano', id: '7' },
  ]);

  return (
    <View style={styles.container}>

    <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={( { item } ) => (
        <Text style={styles.item}>
                {item.name}
              </Text>
      )}
    />

      {/* <ScrollView>
        { people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>
                {item.name}
              </Text>
            </View>
          ))}
      </ScrollView> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 44,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }

});
