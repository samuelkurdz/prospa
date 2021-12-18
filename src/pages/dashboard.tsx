import React from "react";

import Aside from '../components/dashboard/aside';
import Header from '../components/dashboard/header';
import DashboardContent from '../components/dashboard/content';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <Aside />
      <div className="col-span-4 bg-[#F4F8FB] h-full">
        <Header />
        <section className="py-9 px-20">
          <DashboardContent />
        </section>
      </div>
    </div>
  )
}

export default Dashboard;
