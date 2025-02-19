import { useQuery } from "@tanstack/react-query";
import { openHolidayAPI } from "../../api";
import { useMemo } from "react";

type CountryName = {
  language: string;
  text: string;
}

type Country = {
  isoCode: string;
  name: CountryName[];
  officialLanguage: string[];
}

interface SelectCountriesProps {
  handleSelectCountry: (countryISO: string, countryName: string) => void;
}

export function SelectCountries({handleSelectCountry}: SelectCountriesProps) {

  const query = useQuery<Country[]>({ queryKey: ['countries'], queryFn: openHolidayAPI().getAllCountries })

  const getCountryName = useMemo(() => {
    return (country: Country) => {
      return country.name.find((name) => name.language === 'EN')?.text;
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelectCountry(e.target.value, e.target.options[e.target.selectedIndex].text)
  }

  return (
    <div>
      <select value="" onChange={onChange}>
        {query.data?.map((country) => <option value={country.isoCode} key={country.isoCode}>{getCountryName(country)}</option>)}
      </select>
    </div>
  );
}
