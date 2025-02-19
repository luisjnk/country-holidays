export function openHolidayAPI() {

  function getAllCountries() {
    return fetch('https://openholidaysapi.org/Countries?languageIsoCode=EN')
      .then(response => response.json())
  }

  function getHolidaysByYearCountry(year: number, countryCode: string) {
    return fetch(`https://date.nager.at/Api/v2/PublicHolidays/${year}/${countryCode}`)
      .then(response => response.json())
  }

  return {
    getAllCountries,
    getHolidaysByYearCountry
  }
}