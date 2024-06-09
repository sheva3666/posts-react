import { useEffect, useState } from "react";

export const storageKeys = {
  users: "USERS",
  login: "LOGIN",
};

const useLocalStorage = () => {
  const setItem = (key: string, object: any) => {
    localStorage.setItem(key, JSON.stringify(object));
  };

  const getItem = (key: string) => {
    const items = localStorage.getItem(key);
    if (!items) {
      return [];
    }
    return JSON.parse(items);
  };

  const setItems = (key: string, object: any) => {
    const exist = getItem(key);
    localStorage.setItem(key, JSON.stringify([...exist, object]));
  };

  return { setItem, getItem, setItems };
};

export default useLocalStorage;
