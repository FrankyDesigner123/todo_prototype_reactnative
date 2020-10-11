import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'Eden', key: '1' },
    { name: 'Kevin', key: '2' },
    { name: 'Thbibault', key: '3' },
    { name: 'Romelu', key: '4' },
    { name: 'Karim', key: '5' },
    { name: 'Lionel', key: '6' },
    { name: 'Cristiano', key: '7' },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        { people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>
                {item.name}
              </Text>
            </View>
          ))}
      </ScrollView>
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
  }

});
