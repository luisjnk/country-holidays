import { useQuery } from "@tanstack/react-query";
import { openHolidayAPI } from "../../api";

type HolidayName = {
  language: string;
  text: string;
}

type Holiday = {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
  name: HolidayName[];
  regionalScope: string;
  temporalScope: string;
  nationwide: boolean;
}

interface HolidaysListProps {
  countryName: string;
  countryISO: string;
}

export function HolidaysList({ countryName, countryISO }: HolidaysListProps) {
  const query = useQuery<Holiday[]>({
    queryKey: ['holidaysByCountry', countryISO],
    queryFn: () => openHolidayAPI().getHolidaysByYearCountry(countryISO)
  })

  const getHolidayText = (holiday: Holiday) => {
    return holiday.name.find((name) => name.language === 'EN')?.text + ' - ' + holiday.startDate;
  }

  return (
    <div>
      <h2>{countryName}</h2>
      <ul>
        {query.data?.map((holiday) => <li key={holiday.id}>{getHolidayText(holiday)}</li>)}
        {query.isFetching && <li>Loading...</li>}
        {query.isError && <li>Error</li>}
        {query.data?.length === 0 && <li>No holidays</li>}
      </ul>
    </div>
  );
}
