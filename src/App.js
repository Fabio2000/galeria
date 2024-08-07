import './App.css';
import Headers from '../src/components/header/header'
import Cards from '../src/components/cards/cards'
function App() {
  return (
    <section id='containerGeral'>
      <Headers className='containerHeader'/>
      <section>
        <Cards />
      </section>
    </section>
  )
}

export default App;
