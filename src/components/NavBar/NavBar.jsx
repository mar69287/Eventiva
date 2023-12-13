import './Navbar.css'
import StaggeredDropDown from '../StaggeredDropDown'

export default function NavBar() {

    return (
        <nav className='w-full h-[70px] shadow-[0_0_5px_0_rgba(0,0,0,0.3)] flex justify-center items-center fixed top-0 z-20 bg-tprimary'>
            <div className='max-w-6xl w-full px-3 flex justify-between items-center relative'>
                <h1 className='text-[#FFF] text-2xl sm:text-3xl mt-3 logo'>EVENTIVA</h1>
                <StaggeredDropDown />
            </div>
        </nav>
    )
}