import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// import { ReactComponent as Bank } from "../../assets/bank.svg";

const data = [
  {
    name: "JAN",
    uv: 4000,
  },
  {
    name: "FEB",
    uv: 8000,
  },
  {
    name: "MAR",
    uv: 11000,
  },
  {
    name: "APR",
    uv: 12500,
  },
  {
    name: "MAY",
    uv: 12800,
  },
  {
    name: "JUN",
    uv: 7500,
  },
  {
    name: "JUL",
    uv: 6500,
  },
  {
    name: "AUG",
    uv: 2000,
  },
];

function Chart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#e54479" fill="#ffeff4" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function Summary() {
  return (
    <div className="mt-7 flex flex-col xl:flex-row gap-6">
      <div className="basis-7/12 bg-white px-6 py-7 rounded-md shadow-md space-y-10">
        <h4 className="font-semibold text-xl">June summary</h4>
        <div className="flex gap-3 md:gap-10">
          <div>
            <p className="text-subText text-sm">Money In</p>
            <p className="font-semibold text-sm">N 5,650,000</p>
          </div>
          <div>
            <p className="text-subText text-sm">Money In</p>
            <p className="font-semibold text-sm">N 5,650,000</p>
          </div>
          <div>
            <p className="text-subText text-sm">Money In</p>
            <p className="font-semibold text-sm">N 5,650,000</p>
          </div>
        </div>
        <Chart />
      </div>
      <div className="basis-5/12 bg-white px-6 py-7 rounded-md shadow-md space-y-14">
        <h4 className="font-semibold text-xl">Cash outflow</h4>

        <div className="space-y-12">
          <div className="flex justify-between item-center">
            <div className="flex gap-4 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#E900AE" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 8.33333L11.6667 5L18.3333 8.33333V9.66667H5V8.33333ZM6.33333 11H8.33333V15.6667H6.33333V11ZM10.6667 15.6667V11H12.6667V15.6667H10.6667ZM18.3333 19V17H5V19H18.3333ZM15 11H17V15.6667H15V11Z"
                  fill="white"
                />
              </svg>

              <p className="text-subText">Bank Fees</p>
            </div>
            <div>
              <p className="text-sm font-semibold"> - N 250,000</p>
              <svg
                width="190"
                height="6"
                viewBox="0 0 190 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="190" height="6" rx="3" fill="#EEEFF7" />
                <rect width="174" height="6" rx="3" fill="#FFCF56" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between item-center">
            <div className="flex gap-4 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#17ECD4" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 6.63333L18.3778 7.25556C17.4444 6.4 16.2778 5.93333 15.1111 5.93333C13.9444 5.93333 12.7778 6.4 11.8444 7.25556L11.2222 6.63333C12.3111 5.54444 13.7111 5 15.1111 5C16.5111 5 17.9111 5.54444 19 6.63333ZM15.1111 6.78889C16.0444 6.78889 16.9778 7.17778 17.6778 7.87778L17.0556 8.5C16.5111 7.95556 15.8111 7.72222 15.1111 7.72222C14.4111 7.72222 13.7111 7.95556 13.1667 8.5L12.5444 7.87778C13.2444 7.17778 14.1778 6.78889 15.1111 6.78889ZM17.4444 12.7778H15.8889V9.66667H14.3333V12.7778H6.55556C5.7 12.7778 5 13.4778 5 14.3333V17.4444C5 18.3 5.7 19 6.55556 19H17.4444C18.3 19 19 18.3 19 17.4444V14.3333C19 13.4778 18.3 12.7778 17.4444 12.7778ZM7.33333 16.6667H8.88889V15.1111H7.33333V16.6667ZM11.6111 16.6667H10.0556V15.1111H11.6111V16.6667ZM12.7778 16.6667H14.3333V15.1111H12.7778V16.6667Z"
                  fill="white"
                />
              </svg>

              <p className="text-subText">Internet</p>
            </div>
            <div>
              <p className="text-sm font-semibold"> - N 250,000</p>
              <svg
                width="190"
                height="6"
                viewBox="0 0 190 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="190" height="6" rx="3" fill="#EEEFF7" />
                <rect width="128" height="6" rx="3" fill="#FFCF56" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between item-center">
            <div className="flex gap-4 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#C155FF" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.429 4.46875C14.429 4.20966 14.6387 4 14.8978 4C15.1569 4 15.3665 4.20966 15.3665 4.46875V5.40625C15.3665 5.66535 15.1569 5.875 14.8978 5.875C14.6387 5.875 14.429 5.66535 14.429 5.40625V4.46875ZM18.6542 10.6431L12.4139 4.40191C12.0459 4.03478 11.4506 4.03913 11.0873 4.40144C10.722 4.76766 10.722 5.36228 11.0873 5.72803L17.3285 11.9688C17.6941 12.3344 18.2885 12.3344 18.6542 11.9688C19.0208 11.6021 19.0208 11.0096 18.6542 10.6431ZM10.6244 6.59079L10.5774 6.82623C10.2465 8.48117 9.44248 10.0534 8.35495 11.3277L11.7502 14.7229C13.0243 13.6356 14.5749 12.8099 16.2299 12.4787L16.4657 12.4317L10.6244 6.59079ZM7.73248 12.0309L5.41207 14.3509C4.86379 14.8991 4.8615 15.7893 5.41207 16.3398L6.73776 17.6655C7.28604 18.2138 8.17617 18.2161 8.72673 17.6655L11.0469 15.3453L7.73248 12.0309ZM8.06392 15.677C7.88082 15.8601 7.58417 15.8601 7.40107 15.677C7.21798 15.4939 7.21798 15.1973 7.40107 15.0142L8.06392 14.3513C8.24701 14.1682 8.54367 14.1682 8.72676 14.3513C8.90986 14.5344 8.90986 14.8311 8.72676 15.0142L8.06392 15.677ZM13.0041 17.915L13.6417 17.2773C14.1923 16.7268 14.1905 15.8367 13.6418 15.2888L13.1681 14.8149C12.9064 14.9907 12.6564 15.1818 12.4133 15.3856L12.9789 15.9521C13.1616 16.1338 13.1629 16.4296 12.9789 16.6145L12.3307 17.2627L11.3782 16.3398L10.0524 17.6655L12.1792 19.7264C12.5421 20.0903 13.1381 20.0923 13.5044 19.7259C13.8702 19.3602 13.8702 18.7655 13.5044 18.3997L13.0041 17.915ZM18.6478 7.75001H17.7103C17.4512 7.75001 17.2415 7.95966 17.2415 8.21876C17.2415 8.47785 17.4512 8.68751 17.7103 8.68751H18.6478C18.9069 8.68751 19.1165 8.47785 19.1165 8.21876C19.1165 7.95966 18.9069 7.75001 18.6478 7.75001ZM17.3788 5.07481C17.5619 4.89172 17.8586 4.89172 18.0417 5.07481C18.2248 5.25791 18.2248 5.55457 18.0417 5.73766L17.1042 6.67516C16.9211 6.85829 16.6244 6.85826 16.4413 6.67516C16.2582 6.49207 16.2582 6.19541 16.4413 6.01232L17.3788 5.07481Z"
                  fill="white"
                />
              </svg>

              <p className="text-subText">Marketing</p>
            </div>
            <div>
              <p className="text-sm font-semibold"> - N 250,000</p>
              <svg
                width="190"
                height="6"
                viewBox="0 0 190 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="190" height="6" rx="3" fill="#EEEFF7" />
                <rect width="72" height="6" rx="3" fill="#FFCF56" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between item-center">
            <div className="flex gap-4 items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#00EC47" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 12C19 8.136 15.864 5 12 5C8.136 5 5 8.136 5 12C5 15.864 8.136 19 12 19C15.864 19 19 15.864 19 12ZM14.1 8.15L16.55 10.6L14.1 13.05V11.3H11.3V9.9H14.1V8.15ZM7.45 13.4L9.9 15.85V14.1H12.7V12.7H9.9V10.95L7.45 13.4Z"
                  fill="white"
                />
              </svg>

              <p className="text-subText">Transfer</p>
            </div>
            <div>
              <p className="text-sm font-semibold"> - N 250,000</p>
              <svg
                width="190"
                height="6"
                viewBox="0 0 190 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="190" height="6" rx="3" fill="#EEEFF7" />
                <rect width="39" height="6" rx="3" fill="#FFCF56" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
