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

export function SelectCountries() {
  const query = useQuery<Country[]>({ queryKey: ['countries'], queryFn: openHolidayAPI().getAllCountries })

  const getCountryName = useMemo(() => {
    return (country: Country) => {
      return country.name.find((name) => name.language === 'EN')?.text;
    };
  }, []);

  return (
    <div>
      <select>
        {query.data?.map((county) => <option value={getCountryName(county)  } key={county.isoCode}>{getCountryName(county)}</option>)}
      </select>
    </div>
  );
}
