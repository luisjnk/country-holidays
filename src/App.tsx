import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HolidaysList, SelectCountries } from './components'
import { useState } from 'react'
import { useCallback } from 'react';

const queryClient = new QueryClient()

function App() {

  const [countryISO, setCountryISO] = useState<string | null>(null)
  const [countryName, setCountryName] = useState<string | null>(null)

  const handleSelectCountry = useCallback((countryISO: string, countryName: string) => {
    setCountryISO(countryISO)
    setCountryName(countryName)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
       <SelectCountries handleSelectCountry={handleSelectCountry}/>
        {countryISO && countryName && <HolidaysList countryISO={countryISO} countryName={countryName}/>}
    </QueryClientProvider>
  )
}

export default App
