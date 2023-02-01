import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorageValue = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log('Save store error: ', e);
    }
    console.log('Save storage success');
  };
  
  export const getStorageValue = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('Get store error: ', e);  
    }
    console.log('Done.');
  };
  
  export const removeStorageValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log('Remove store error: ', e);
    }
    console.log('Data is removed');
  };