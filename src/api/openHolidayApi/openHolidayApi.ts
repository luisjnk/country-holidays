
export function fetchAllCountries() {
  return fetch('https://openholidaysapi.org/Countries?languageIsoCode=EN')
    .then(response => response.json())
}

export function fetchHolidaysByYearCountry(countryCode: string) {
  return fetch(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${countryCode}&validFrom=2025-01-01&validTo=2025-12-31`)
    .then(response => response.json())
}
