import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = async (key, value) => {
  try {
    const item = {
      value,
      timeStamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const item = await AsyncStorage.getItem(key);
    if(!item) return null;

    const now = moment(Date.now());
    const storedTime = moment(item.timeStamp);
    const isExpired = now.diff(storedTime, 5) > 5;
    if(isExpired) {
        AsyncStorage.removeItem(key)
        return null;
    }

    return JSON.parse(item);
  } catch (error) {
    console.log(error);
  }
};

export default {
  storage,
  get,
};
