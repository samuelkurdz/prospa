import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";

const Header = () => {
  return (
    <header className="h-20 w-full p-6 md:py-9 md:px-20 bg-white flex justify-between items-center">
    <h3 className="text-2xl text-subText">Dashboard</h3>
    <div className="flex items-center space-x-4">
      <Bell className="cursor-pointer" />
      <Profile className="cursor-pointer" />
    </div>
  </header>
  )
}

export default Header;