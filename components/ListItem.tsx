import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from 'react-native-screens';

export default function ListItem({
  title,
  dateTime,
}: {
  title: string;
  dateTime: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.listItem}>{title}</Text>
      <Text style={styles.listSubItem}>{dateTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    fontSize: 20,
    color: 'white',
  },
  container: {
    borderRadius: 10,
    width: Dimensions.get('screen').width - 40,
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 'auto',
    backgroundColor: '#333444',
  },
  listSubItem: {
    fontSize: 10,
    color: '#ccc',
  },
});
