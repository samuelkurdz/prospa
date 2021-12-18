import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";

const Header = () => {
  return (
    <header className="h-20 w-full py-5 px-20 bg-white flex justify-between items-center">
    <h3 className="text-2xl text-subText">Dashboard</h3>
    <div className="flex items-center space-x-4">
      <Bell />
      <Profile />
    </div>
  </header>
  )
}

export default Header;