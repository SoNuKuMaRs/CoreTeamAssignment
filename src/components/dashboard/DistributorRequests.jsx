import React from 'react';

const DistributorRequests = () => {
  const requests = [
    { id: 1, name: "Nprma Pharmacy", license: "123456", status: "Pending", contact: "+91 7277661619", days: 1 },
    { id: 2, name: "Nprma Pharmacy", license: "123456", status: "Pending", contact: "+91 7277661619", days: 1 },
    { id: 3, name: "Nprma Pharmacy", license: "123456", status: "Rejected", contact: "+91 7277661619", days: 1 },
    { id: 4, name: "Nprma Pharmacy", license: "123456", status: "Approved", contact: "+91 7277661619", days: 18 }
  ];

  const getStatusClass = (status) => {
    switch(status) {
      case "Pending": return "bg-blue-500 text-white";
      case "Approved": return "bg-green-500 text-white";
      case "Rejected": return "bg-orange-500 text-white";
      default: return "bg-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium">Distributor Requests</h2>
        <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">2 Pending</span>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          <button className="border-b-2 border-gray-300 px-4 py-1 text-sm">All</button>
          <button className="border-b-2 border-gray-300 px-4 py-1 text-sm">Pending</button>
          <button className="border-b-2 border-green-500 px-4 py-1 text-sm text-green-500">Approved</button>
          <button className="border-b-2 border-gray-300 px-4 py-1 text-sm">Rejected</button>
        </div>
      </div>
      
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500">
            <th className="pb-2">Distributor Name</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Contact No.</th>
            <th className="pb-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className="border-t">
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-md bg-blue-100 overflow-hidden mr-3">
                    <div className="h-full w-full bg-gradient-to-br from-blue-300 to-blue-500"></div>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{request.name}</div>
                    <div className="text-xs text-gray-500">License No. {request.license}</div>
                    <div className="text-xs text-gray-400">purani chungi, Jaipur • {request.days} day ago</div>
                  </div>
                </div>
              </td>
              <td>
                <span className={`text-xs px-2 py-1 rounded ${getStatusClass(request.status)}`}>
                  {request.status}
                </span>
              </td>
              <td className="text-sm">{request.contact}</td>
              <td>
                <button className="text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistributorRequests;
