import React from 'react';
import Sidebar from './Sidebar';
import Header from '../dashboard/Header';
import OrdersSummary from '../dashboard/OrdersSummary';
import ProductsSummary from '../dashboard/ProductsSummary';
import DistributorApproved from '../dashboard/DistributorApproved';
import DistributorRequests from '../dashboard/DistributorRequests';
import TopDistributors from '../dashboard/TopDistributors';
import TopProducts from '../dashboard/TopProducts';
import StocksRunningLow from '../dashboard/StocksRunningLow';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <Header />
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <OrdersSummary />
            <ProductsSummary />
            <DistributorApproved />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <DistributorRequests />
              <TopProducts className="mt-4" />
            </div>
            <div>
              <TopDistributors />
              <StocksRunningLow className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;