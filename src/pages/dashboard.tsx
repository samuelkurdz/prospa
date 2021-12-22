import React, { CSSProperties } from "react";
import { motion } from 'framer-motion';
import { pageAnimation } from '../constants/animations';

import Aside from '../components/dashboard/aside';
import Header from '../components/dashboard/header';
import DashboardContent from '../components/dashboard/content';


const dashContainer: CSSProperties = {
  height: 'calc(100vh - 80px)',
  overflowY: 'scroll'
}
const Dashboard = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-5 h-screen"
      exit="exit"
    >
        <Aside />
        <div className="col-span-4 bg-[#F4F8FB] h-full">
          <Header />
          <section className=" p-6 md:py-9 md:px-20" style={dashContainer}>
            <DashboardContent />
          </section>
        </div>
    </motion.div>
  )
}

export default Dashboard;
