import Button from "../Button";
import { ReactComponent as Bank } from '../../assets/bank.svg';
import { ReactComponent as Transact } from '../../assets/transacte.svg';

const transdata = [
  {
    title: "Transfer Fee",
    price: "-₦145.90",
    iconType: "trans",
  },
  {
    title: "Adam Chapman",
    price: "-₦2,000.00",
    iconType: "not",
  },
  {
    title: "Shirley Barnes",
    price: "-₦2,000.00",
    iconType: "not",
  },
  {
    title: "Shirley Barnes",
    price: "-₦2,000.00",
    iconType: "not",
  },
];

function Transactions() {
  return (
    <div className="bg-white p-7 rounded-md shadow-md mt-8">
      <header className="flex justify-between items-center mb-7">
        <p className="font-semibold">Recent transactions</p>
        <Button secondary small>
          See all
        </Button>
      </header>

      <div>
        {transdata.map(({ title, price, iconType }, index) => (
          <>
            <section className="flex justify-between items-baseline">
              <div className="flex items-center gap-4">
                <div className="bg-[#F4F8FB] w-10 h-10 flex items-center justify-center rounded-full">
                  {iconType === 'trans' ? <Bank /> : <Transact />}
                </div>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="font-medium text-subText text-sm">12:49 AM</p>
                </div>
              </div>
              <div className="font-medium">{price}</div>
            </section>

            {index < transdata.length - 1 ? <div className="w-full h-px bg-[#E6EFF8] my-6"></div> : null}
          </>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
