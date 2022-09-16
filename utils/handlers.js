export function inputValidator(query) {
  const reg = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/gi;
  const isQueryValid = query.match(reg);
  if (isQueryValid) {
    return true
  } else {
    return false
  }
}


export async function getData(query) {
  if (typeof query === 'string') {
    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.API_KEY}`;
    const response = await fetch(cityUrl);
    const data = await response.json();
    return data
  };
}
