import { Outlet } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { UserProvider } from './context/index.jsx'

function App() {
  return (
    <UserProvider>
      <div className="flex min-h-screen flex-col items-center bg-brand-200 pb-9 text-xl">
        <Header />
        <Outlet />
      </div>
    </UserProvider>
  )
}

export default App
