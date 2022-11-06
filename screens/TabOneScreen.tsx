import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ListItem from '../components/ListItem';
import { StatusBar } from 'expo-status-bar';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'ViewGigs'>) {
  const data = [
    { text: 'test1' },
    { text: 'test2' },
    { text: 'test3' },
    { text: 'test4' },
  ];
  const date = new Date();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem title={item.text} dateTime={date.toISOString()} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
