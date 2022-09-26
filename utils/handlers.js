export function inputValidator(query) {
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

export async function getOptions(query) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  const response = await fetch(url);
  const options = await response.json();
  return options
}

export async function getData(query) {
  if (query !== undefined) {
    const isValid = inputValidator(query);
    if (isValid) {
      const cityUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
      const response = await fetch(cityUrl);
      const data = await response.json();
      return data
    };
  }
}

export async function getCoordinates(coords) {
  if (!isNaN(coords.lat) && !isNaN(coords.lon)) {
    const cityUrl =
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
    const response = await fetch(cityUrl);
    const data = await response.json();
    return data
  }
}