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


export async function getData(query) {
  const isValid = inputValidator(query);
  if (isValid) {
    const cityUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
    const response = await fetch(cityUrl);
    const data = await response.json();
    if (data) {
      return data
    } else {
      return { msg: `no data in ${__filename}` }
    }
  }
}
