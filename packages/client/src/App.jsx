import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar';

export function App() {

  return (
    <div className="App" id="app">
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-dark text-light text-center p-3 ">
        Made with 💖 by CodeWorks
      </footer>

    </div>
  )
}
