
import { ReactComponent as AccountBox } from "../../assets/account-box.svg";

function AccountTypes() {
  return <div className="mt-9 flex gap-9">
    <div className="basis-1/2 bg-white px-6 py-4 rounded-md shadow-md space-y-14">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-sm uppercase">Current Account</p>
          <p className="text-sm text-subText font-medium">PROVIDUS BANK - 9906533917</p>
        </div>
        <div className='h-11 w-11 rounded-full flex justify-center items-center bg-[#f1eeff]'>
          <AccountBox className="fill-[#7E51FF]" />
        </div>
      </div>
      <p className="font-medium text-4xl">
        ₦814,800<sub>.45</sub>
      </p>
    </div>
    <div className="basis-1/2 bg-white px-6 py-4 rounded-md shadow-md space-y-14">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-sm uppercase">Savings Account</p>
          <p className="text-sm text-subText font-medium">SUB ACCOUNT - 12346789</p>
        </div>
        <div className="h-11 w-11 rounded-full flex justify-center items-center bg-[#e6fbff]">
          <AccountBox className="fill-[#00D2FF]" />
        </div>
      </div>
      <p className="font-medium text-4xl">
        ₦39,342<sub>.45</sub>
      </p>
    </div>
  </div>;
}


export default AccountTypes;
