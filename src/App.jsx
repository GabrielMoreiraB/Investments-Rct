import './App.css'
import Header from './Header'
import Investiments from './Investments'
import {allInvestments} from '../investments-2023'

function App() {
  return (
    <>
      <Header/>
      {allInvestments.investments.map(inv =>
      <Investiments 
      key={inv.id} 
      title = {inv.description}  
      id={inv.id}
      />
      )}
    </>
  )
}

export default App
