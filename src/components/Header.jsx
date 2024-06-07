import { Link } from 'react-router-dom'
import { NavHeader } from './NavHeader'
import logo from "../assets/logo.png"

export const Header = () => {
  return (
    <header className="bg-brand-600 w-full flex justify-center items-center py-5 px-5">
      <div className="container flex items-center justify-between">
        <Link to={'/'}>
          <img src={logo} alt="logo" className='w-52 rounded-xl' />
        </Link>
        <NavHeader />
      </div>
    </header>
  )
}
