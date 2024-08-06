export const storageKeys = {
  users: "USERS",
  login: "LOGIN",
};

const useLocalStorage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setItem = (key: string, object: any) => {
    localStorage.setItem(key, JSON.stringify(object));
  };

  const getItem = (key: string) => {
    const items = localStorage.getItem(key);
    if (!items) {
      return null;
    }
    return JSON.parse(items);
  };

  const removeItem = (key: string) => {
    return localStorage.removeItem(key);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setItems = (key: string, object: any) => {
    const exist = getItem(key);
    if (exist) {
      localStorage.setItem(key, JSON.stringify([...exist, object]));
    } else localStorage.setItem(key, JSON.stringify([object]));
  };

  return { setItem, getItem, setItems, removeItem };
};

export default useLocalStorage;
