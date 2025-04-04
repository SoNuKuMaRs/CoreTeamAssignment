import React, { useState, useEffect } from 'react';

const OrdersSummary = () => {
  const [data, setData] = useState({
    totalProducts: 0,
    retailersApproved: 0,
    orderReceived: 0,
    orderReceivedToday: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Bearer token for authentication
  const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJ1c2VyTmFtZSI6Inlhc2hiaG9qYWsxQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiRW1wbG95ZWUiLCJkYXRhIjp7ImVtcGxveWVlSWQiOjEyNSwiZW1wbG95ZWVDb2RlIjoiRU1QMTI1IiwiZmlyc3ROYW1lIjoiWWFzaCIsImxhc3ROYW1lIjoiQmhvamFrIiwiYWRkcmVzcyI6Inh5eiIsInBob25lIjoiNzI3OTg4ODQ0MyIsImVtYWlsIjpudWxsLCJlbXBsb3llZU9mIjoxMjcsImVtcGxveWVlU3RhdHVzIjoiQWN0aXZlIiwiZW50aXR5SWQiOjEyNSwiY3JlYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIn0sImlhdCI6MTc0MTc3NzQ5OCwiZXhwIjoxNzQ0MzY5NDk4fQ.E69a7jDQkzpQJlPpNkx2uhWfLvuR2lBCji-X8TZ147s";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Headers for authentication
        const headers = {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json'
        };
        
        // Add request timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch('http://157.15.202.188:3001/distProductInfo', {
          method: 'GET',
          headers: headers,
          mode: 'cors',
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (response.status === 401) {
          throw new Error('Authentication failed: Invalid or expired token');
        } else if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.status === 200 && result.apiData) {
          setData(result.apiData);
        } else {
          throw new Error(`API Error: ${result.message || 'Invalid data format received'}`);
        }
      } catch (err) {
        // Handling specific error types
        if (err.name === 'AbortError') {
          setError('Request timed out. Please check your network connection.');
        } else if (err.message === 'Failed to fetch') {
          setError('Network error. Unable to connect to the server.');
        } else {
          setError(err.message);
        }
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh interval (every 5 minutes)
    const intervalId = setInterval(fetchData, 300000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Error display for network issues
  if (error && (error.includes('Network error') || error.includes('timed out'))) {
    return (
      <div className="bg-white p-4 rounded-md shadow-sm h-32 flex flex-col items-center justify-center">
        <div className="text-red-500 text-sm font-medium mb-1">Connection Error</div>
        <div className="text-gray-500 text-xs text-center">Unable to reach the server</div>
      </div>
    );
  }

  // Authentication error display
  if (error && error.includes('Authentication failed')) {
    return (
      <div className="bg-white p-4 rounded-md shadow-sm h-32 flex flex-col items-center justify-center">
        <div className="text-red-500 text-sm font-medium mb-1">Authentication Error</div>
        <div className="text-gray-500 text-xs">Please check your token or login again</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-md shadow-sm h-32 flex items-center justify-center">
        <div className="text-gray-500">Loading data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-4 rounded-md shadow-sm h-32 flex items-center justify-center">
        <div className="text-red-500 text-sm">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-amber-100 p-4 rounded-2xl shadow-md h-28 relative">
      <div className="text-sm text-gray-700 font-semibold">
        Orders Received
        <div className="text-xs text-gray-500">Last 30 Days</div>
      </div>
      <div className="mt-2 text-3xl font-bold text-gray-900">{data.orderReceived}</div>
      <button className="absolute bottom-2 right-2 bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-full shadow-md">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
  
};

export default OrdersSummary;