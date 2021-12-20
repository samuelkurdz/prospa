import Button from '../../components/Button';
import AccountTypes from '../dash-contents/account-types';
import Summary from '../dash-contents/summary';
import Transactions from '../dash-contents/transactions';

const DashboardContent = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div>
          <h3 className="font-bold text-lg md:text-2xl">Welcome back, Kathy</h3>
          <p className='text-sm md:text-base'>
            Here’s what has been happening in the last <span className="text-primary">7 days</span>
          </p>
        </div>
        <Button>Add a sub account</Button>
      </div>

      <AccountTypes />

      <Summary />

      <Transactions />
    </>
  );
};

export default DashboardContent;

