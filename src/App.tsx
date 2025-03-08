import './App.css'
// import Footer from './components/Footer'
// import PortfolioContainer from './components/portfoliocontainer'
import { Outlet } from 'react-router-dom'
import Nav from './components/NavTabs'

function App() {
  
  return (
   <>
   <Nav />
   <main className="mx-3">
   <Outlet />
    </main>
   </>
  )
}

export default App
