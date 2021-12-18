import React, { CSSProperties } from "react";

import Aside from '../components/dashboard/aside';
import Header from '../components/dashboard/header';
import DashboardContent from '../components/dashboard/content';


const dashContainer: CSSProperties = {
  height: 'calc(100vh - 80px)',
  overflowY: 'scroll'
}
const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <Aside />
      <div className="col-span-4 bg-[#F4F8FB] h-full">
        <Header />
        <section className="py-9 px-20" style={dashContainer}>
          <DashboardContent />
        </section>
      </div>
    </div>
  )
}

export default Dashboard;
