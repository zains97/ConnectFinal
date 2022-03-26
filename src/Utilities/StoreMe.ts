import AsyncStorage from '@react-native-async-storage/async-storage';

interface IMe {
  user: object;
  token: string;
}

export const storeMe = async (value: IMe | null) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('Me', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getMe = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('Me');

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
