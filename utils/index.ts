export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '0bac4db036msh176337af21b321fp1bf30ajsn4d5cb9f55721',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {headers: headers});
    const result = await response.json()
    return result

}


