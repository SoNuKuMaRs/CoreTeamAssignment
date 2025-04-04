import React, { useState, useEffect } from 'react';

const ProductsSummary = () => {
  const [productData, setProductData] = useState({
    totalProducts: 0,
    retailersApproved: 0,
    orderReceived: 0,
    orderReceivedToday: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeMetric, setActiveMetric] = useState('totalProducts');

  // Define the metrics to display
  const metrics = [
    { key: 'totalProducts', label: 'Total Products', subLabel: 'In Portfolio' },
    // { key: 'retailersApproved', label: 'Retailers Approved', subLabel: 'Active Partners' },
    // { key: 'orderReceived', label: 'Orders Received', subLabel: 'All Time' },
    // { key: 'orderReceivedToday', label: 'Orders Today', subLabel: 'Current Day' }
  ];

  // Find current metric index
  const currentIndex = metrics.findIndex(m => m.key === activeMetric);
  
  // Handle navigation
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % metrics.length;
    setActiveMetric(metrics[nextIndex].key);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://157.15.202.188:3001/distProductInfo', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJ1c2VyTmFtZSI6Inlhc2hiaG9qYWsxQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiRW1wbG95ZWUiLCJkYXRhIjp7ImVtcGxveWVlSWQiOjEyNSwiZW1wbG95ZWVDb2RlIjoiRU1QMTI1IiwiZmlyc3ROYW1lIjoiWWFzaCIsImxhc3ROYW1lIjoiQmhvamFrIiwiYWRkcmVzcyI6Inh5eiIsInBob25lIjoiNzI3OTg4ODQ0MyIsImVtYWlsIjpudWxsLCJlbXBsb3llZU9mIjoxMjcsImVtcGxveWVlU3RhdHVzIjoiQWN0aXZlIiwiZW50aXR5SWQiOjEyNSwiY3JlYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIn0sImlhdCI6MTc0MTc3NzQ5OCwiZXhwIjoxNzQ0MzY5NDk4fQ.E69a7jDQkzpQJlPpNkx2uhWfLvuR2lBCji-X8TZ147s',
            'Content-Type': 'application/json'
          }
        });
        
        const data = await response.json();
        
        if (data.status === 200 && data.apiData) {
          setProductData(data.apiData);
        } else {
          setError('Failed to load product data');
        }
      } catch (err) {
        setError('Error fetching product data');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  // Find current metric
  const currentMetric = metrics.find(m => m.key === activeMetric) || metrics[0];

  return (
    <div className="relative bg-blue-100 p-4 rounded-3xl shadow-md h-28 flex flex-col justify-between">
      {/* Title */}
      <div>
        <div className="text-sm text-gray-700 font-semibold">Total Products</div>
        <div className="text-xs text-gray-500">In Portfolio</div>
      </div>
      
      {/* Product Count */}
      <div className="text-3xl font-bold text-gray-900">{productData.totalProducts}</div>
      
      {/* Floating Button */}
      <button className="absolute bottom-2 right-2 bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-full shadow-md">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
  
};

export default ProductsSummary;