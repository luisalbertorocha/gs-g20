import { useContext } from 'react'
import { UserContext } from '../context'

export const NavHeader = () => {
  const { profile, logOut } = useContext(UserContext)
  console.log(profile)

  return (
    <nav className="flex gap-1 md:gap-4">
      <div className="hidden sm:flex">
        <a
          href="https://voiceoftheoceans.com/"
          target="_blank"
          className="m-auto rounded-full px-5 py-3 text-center duration-75 hover:bg-cyan-500"
        >
          Voz dos oceanos
        </a>
        <a
          href="https://www.g20.org/pt-br/g20-social/grupos-de-engajamento/oceans-20"
          target="_blank"
          className="m-auto rounded-full px-5 py-3 text-center duration-75 hover:bg-cyan-500"
        >
          Ocean 20
        </a>
      </div>

      {profile ? (
        <div className="flex items-center gap-5">
          <button className='m-auto rounded-full px-5 py-3 text-center duration-75 hover:bg-cyan-500' onClick={logOut}>Sair</button>
          <img className="h-12 rounded-full" src={profile.picture} alt="" />
        </div>
      ) : (
        <div className="flex gap-2">
          <a
            href="register"
            className="m-auto rounded-full px-5 py-3 text-center duration-75 hover:bg-cyan-500"
          >
            Cadastrar
          </a>
          <a
            href="/login"
            className="m-auto rounded-full bg-cyan-800 px-5 py-3 text-center text-gray-200 duration-75 hover:bg-cyan-700"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  )
}
