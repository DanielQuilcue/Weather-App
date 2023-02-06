import AppClima from './components/AppClima'
import  { ClimaProvider } from './context/ClimaProvider'
import Footer from './components/Footer'

function App() {
    return (
      <ClimaProvider>
        <header>
          <h1>Buscador de clima</h1>
        </header>
        <AppClima />
        <Footer />
      </ClimaProvider>
    )
}

export default App