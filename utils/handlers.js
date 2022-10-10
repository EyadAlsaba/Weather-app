import { useState, useEffect } from "react";
// Reference: https://typeofnan.dev/using-session-storage-in-react-with-hooks/
function getLocalStorageOrDefault(key, defaultValue) {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }
}

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(
    getLocalStorageOrDefault(key, defaultValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function inputValidator(query) {
  if (query !== undefined) {
    const reg = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/gi;
    const isQueryValid = query.match(reg);
    if (isQueryValid) {
      return true
    } else {
      return false
    }
  }
}

//This will return an Array of Objects (Options)
async function getOptions(query) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  const response = await fetch(url);
  const options = await response.json();
  return options
}

//The only use for this fn, is when user hit Enter it goes to fetch most accurate data based on query city name
// only use it in FormInput component
async function getCurrentData(query) {
  const isValid = inputValidator(query);
  if (isValid) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    const response = await fetch(url);
    const docs = await response.json();
    return docs
  }
};

//ref: https://swr.vercel.app/docs/error-handling
const fetcherAsync = async url => {
  const res = await fetch(url)

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json()
}

export { getCurrentData, getOptions, fetcherAsync, useLocalStorage, getLocalStorageOrDefault }