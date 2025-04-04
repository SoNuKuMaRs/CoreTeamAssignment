import React from 'react';

const TopDistributors = () => {
  const distributors = [
    { id: 1, name: "Aparajit Pharma", logo: "G", color: "bg-blue-100 text-blue-600", percentage: 15 },
    { id: 2, name: "Jyoty Pharma", logo: "G", color: "bg-green-100 text-green-600", percentage: 35 },
    { id: 3, name: "Jyoty Pharma", logo: "G", color: "bg-green-100 text-green-600", percentage: 35 },
    { id: 4, name: "Rema Dealers", logo: "M", color: "bg-black text-white", percentage: 50 },
    { id: 5, name: "Rema Dealers", logo: "M", color: "bg-black text-white", percentage: 50 },
    { id: 6, name: "Rema Dealers", logo: "M", color: "bg-black text-white", percentage: 50 },
    { id: 7, name: "Rema Dealers", logo: "M", color: "bg-black text-white", percentage: 50 },
    { id: 8, name: "Rema Dealers", logo: "M", color: "bg-black text-white", percentage: 50 }
  ];

  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium">Top 10 Distributors</h2>
        <div className="text-xs text-gray-500">Based on sales last month</div>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-gray-200 w-2/3"></div>
        </div>
      </div>
      
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {distributors.map((distributor) => (
          <div key={distributor.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full ${distributor.color} flex items-center justify-center text-xs mr-2`}>
                {distributor.logo}
              </div>
              <span className="text-sm">{distributor.name}</span>
            </div>
            <span className="text-sm">{distributor.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDistributors;
