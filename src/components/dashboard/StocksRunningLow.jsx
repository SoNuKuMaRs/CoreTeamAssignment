import React, { useState, useEffect } from 'react';

const StocksRunningLow = ({ className = '' }) => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setLoading(true);
        
        // API request with Bearer token
        const response = await fetch('http://157.15.202.188:3001/stock-runningLow-test', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJ1c2VyTmFtZSI6Inlhc2hiaG9qYWsxQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiRW1wbG95ZWUiLCJkYXRhIjp7ImVtcGxveWVlSWQiOjEyNSwiZW1wbG95ZWVDb2RlIjoiRU1QMTI1IiwiZmlyc3ROYW1lIjoiWWFzaCIsImxhc3ROYW1lIjoiQmhvamFrIiwiYWRkcmVzcyI6Inh5eiIsInBob25lIjoiNzI3OTg4ODQ0MyIsImVtYWlsIjpudWxsLCJlbXBsb3llZU9mIjoxMjcsImVtcGxveWVlU3RhdHVzIjoiQWN0aXZlIiwiZW50aXR5SWQiOjEyNSwiY3JlYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIn0sImlhdCI6MTc0MTc3NzQ5OCwiZXhwIjoxNzQ0MzY5NDk4fQ.E69a7jDQkzpQJlPpNkx2uhWfLvuR2lBCji-X8TZ147s',
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status === 200) {
          // Transform API data to match component format
          const formattedStocks = data.apiData.map(item => ({
            id: item.PId,
            name: item.PName,
            quantity: item.Stock,
            status: item.Stock <= 5 ? "Low" : "Normal"
          }));
          
          setStocks(formattedStocks);
        } else {
          throw new Error('Failed to fetch stock data');
        }
      } catch (err) {
        console.error('Error fetching stocks:', err);
        setError('Failed to load stock data');
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className={`bg-white rounded-md shadow-sm p-4 ${className}`}>
      <div className="mb-4">
        <h2 className="font-medium">Stocks Running Low</h2>
      </div>
      
      {loading ? (
        <div className="py-4 text-center text-gray-500">Loading...</div>
      ) : error ? (
        <div className="py-4 text-center text-red-500">{error}</div>
      ) : (
        <div className="space-y-3">
          {stocks.length > 0 ? (
            stocks.map((stock) => (
              <div key={`${stock.id}-${stock.name}`} className="border-b pb-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{stock.name}</span>
                  <span className="text-xs text-red-500">{stock.status}</span>
                </div>
                <div className="text-xs text-gray-500">Remaining Quantity: {stock.quantity} Packet</div>
              </div>
            ))
          ) : (
            <div className="py-2 text-center text-gray-500">No low stock items found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default StocksRunningLow;