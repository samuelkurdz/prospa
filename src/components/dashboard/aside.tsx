import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";


import { ReactComponent as Account } from "../../assets/menu/account.svg";
import { ReactComponent as Transfer } from "../../assets/menu/transfer.svg";
import { ReactComponent as Invoice } from "../../assets/menu/invoice.svg";
import { ReactComponent as Other } from "../../assets/menu/other.svg";


const Aside = () => {
  return (
    <aside className="bg-white h-full z-0 shadow-xl flex flex-col">
      <div className="h-20 border-b-2 border-[#EEEFF7] px-8 py-5 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="w-10 h-10 rounded-full p-4 bg-secondary text-white font-medium text-xs flex justify-center items-center">
            ES
          </span>
          <div>
            <p className="font-semibold">Clayvant Inc</p>
            <p className="text-xs text-subText font-medium">Manage account</p>
          </div>
        </div>
        <Arrow className="cursor-pointer"/>
      </div>
      <div className="p-8 flex flex-col justify-between h-full">
        <div className="space-y-8">
          <div className="flex items-center gap-4 text-subText hover:text-primary cursor-pointer">
            <Account />
            <p className="text-sm font-medium">Accounts</p>
          </div>
          <div className="flex items-center gap-4 text-subText hover:text-primary cursor-pointer">
            <Transfer />
            <p className="text-sm font-medium">Transfer</p>
          </div>
          <div className="flex items-center gap-4 text-subText hover:text-primary cursor-pointer">
            <Invoice />
            <p className="text-sm font-medium">Invoice</p>
          </div>
          <div className="flex items-center gap-4 text-subText hover:text-primary cursor-pointer">
            <Other />
            <p className="text-sm font-medium">Management</p>
          </div>
          <div className="flex items-center gap-4 text-subText hover:text-primary cursor-pointer">
            <Other />
            <p className="text-sm font-medium">Security</p>
          </div>
          <div className="flex items-center gap-4 text-subText hover:text-primary cursor-pointer">
            <Other />
            <p className="text-sm font-medium">Support</p>
          </div>
        </div>
        <Logo className="fill-subText" />
      </div>
    </aside>
  );
};

export default Aside;
