import Button from "../Button";

function Transactions() {
  return <div className="bg-white p-7 rounded-md shadow-md mt-8">
    <header className="flex justify-between items-center"> 
      <p className="font-semibold">Recent transactions</p>
      <Button secondary small>See all</Button>
    </header>

  </div>;
}

export default Transactions;
