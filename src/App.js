import { Link, Outlet } from "react-router-dom"

import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Na } from 'react-bootstrap'



function App() {
  return (
    <>
      <Navigation />
      <header>
        <div className="header-content">
          <Link to = "/">
            <img src="/logo_name.png" alt="logo" />
          </Link>
        </div>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      
    </>
  )
}

export default App;