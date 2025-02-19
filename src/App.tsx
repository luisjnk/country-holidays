import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { SelectCountries } from './components'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
       <SelectCountries />
    </QueryClientProvider>
  )
}

export default App
