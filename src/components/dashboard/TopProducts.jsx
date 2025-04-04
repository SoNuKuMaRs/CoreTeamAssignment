import React from 'react';

const TopProducts = ({ className = '' }) => {
  const products = [
    { id: 1, rank: "01", name: "Paracetamol", percentage: 40, color: "bg-blue-500" },
    { id: 2, rank: "02", name: "Dolo", percentage: 28, color: "bg-green-500" },
    { id: 3, rank: "03", name: "Asprin", percentage: 15, color: "bg-purple-500" },
    { id: 4, rank: "04", name: "Colicaba", percentage: 25, color: "bg-orange-500" }
  ];

  return (
    <div className={`bg-white rounded-md shadow-sm p-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium">Top Products</h2>
        <div className="text-xs text-gray-500">Past 30 Days</div>
      </div>
      
      <div className="flex mb-4 text-xs text-gray-500">
        <div className="w-1/3">Based on order Qty</div>
        <div className="w-1/3 text-center">Popularity</div>
        <div className="w-1/3 text-right">Sales</div>
      </div>
      
      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="flex items-center">
            <div className="w-1/3 flex items-center">
              <span className="mr-3 text-gray-500">{product.rank}</span>
              <span>{product.name}</span>
            </div>
            <div className="w-1/3 px-2">
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className={`h-full ${product.color}`} style={{ width: `${product.percentage}%` }}></div>
              </div>
            </div>
            <div className="w-1/3 text-right">{product.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;