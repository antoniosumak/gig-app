import { Platform, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View } from '../components/Themed';
import { useForm, Controller } from 'react-hook-form';
import { FormData } from '../types';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Button } from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons';

export default function TabTwoScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      location: '',
      price: '1500',
      date: new Date(),
    },
  });
  const onSubmit = (data: FormData) => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      position: 'bottom',
    });
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Događaj</Text>
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name='name'
        />
        {errors.name && (
          <Text style={styles.errorText}>Ovo polje potrebno je unijeti.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Lokacija</Text>

              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name='location'
        />
        {errors.location && (
          <Text style={styles.errorText}>Ovo polje potrebno je unijeti.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Cijena</Text>
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name='price'
        />
        {errors.price && (
          <Text style={styles.errorText}>Ovo polje potrebno je unijeti.</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Datum</Text>
            </View>
          )}
          name='date'
        />
        {errors.price && (
          <Text style={styles.errorText}>Ovo polje potrebno je unijeti.</Text>
        )}
        <Button
          radius='md'
          icon={<FontAwesome name='save' size={20} style={styles.icon} />}
          title='Spremi'
          onPress={handleSubmit(onSubmit)}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    height: 48,
    width: '100%',
    borderRadius: 6,
    borderColor: '#ccc',
    padding: 8,
  },
  icon: {
    marginRight: 10,
    color: 'white',
  },
  label: {
    marginBottom: 6,
  },
  innerContainer: {
    width: '80%',
    margin: 'auto',
  },
  button: {
    paddingBottom: 16,
    paddingTop: 16,
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
  },
  errorText: {
    color: 'red',
  },
});
