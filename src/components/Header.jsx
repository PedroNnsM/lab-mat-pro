import Logo from '../assets/Logo.svg'

export function Header(){
  return(
    <div className="flex justify-center items-center">
    <img className='w-[25rem]' src={Logo} alt="" />
    </div>
  )
}