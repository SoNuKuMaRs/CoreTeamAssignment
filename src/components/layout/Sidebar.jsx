import React from 'react';
import { GiArtificialIntelligence } from "react-icons/gi";

const Sidebar = () => {
  const menuCategories = [
    {
      title: "GENERAL",
      items: [
        { name: "Overview", icon: "chart-bar" },
        { name: "Order Management", icon: "shopping-cart" },
        { name: "Distributor/CNF List", icon: "users" },
        { name: "Expiry Returns / Credit Note", icon: "receipt" }
      ]
    },
    {
      title: "PRODUCTS",
      items: [
        { name: "Product Management", icon: "box" },
        { name: "Stock Management", icon: "database" }
      ]
    },
    {
      title: "ORGANIZATION MANAGEMENT",
      items: [
        { name: "Employee Management", icon: "user-group" },
        { name: "Divisions Management", icon: "office-building" }
      ]
    },
    {
      title: "FINANCE & REPORTING",
      items: [
        { name: "Accounting", icon: "calculator" },
        { name: "Analytics & Reports", icon: "chart-pie" }
      ]
    },
    {
      title: "USER",
      items: [
        { name: "Profile Settings", icon: "cog" },
        { name: "Help!", icon: "question-mark-circle" }
      ]
    }
  ];

  return (
    <div className="w-64 bg-white border-r h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold text-slate-500">Jee<span className="text-blue-500 font-bold">1</span></h1>
        </div>
      </div>
      
      <div className="p-3">
        <div className="bg-blue-100 rounded-md p-2 flex items-center text-blue-700">
          <span className="mr-2"><GiArtificialIntelligence /></span>
          <span className="text-sm">AI Coming Soon</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {menuCategories.map((category, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-xs text-gray-500 font-semibold mb-2">{category.title}</h2>
            <ul>
              {category.items.map((item, itemIdx) => (
                <li key={itemIdx} className="mb-1">
                  <a 
                    href="#" 
                    className={`flex items-center p-2 text-sm rounded-md hover:bg-gray-100 ${item.name === "Overview" ? "text-blue-600" : "text-gray-600"}`}
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20" height="20" x="2" y="2" rx="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium">Profile</div>
            <button className="text-xs bg-gray-200 px-2 py-1 rounded">Update</button>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-2">Connect your store to enjoy more features!</div>
        <div className="mt-3">
          <button className="flex items-center justify-center w-full bg-gray-100 p-2 rounded text-xs">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Get REI App! Coming Soon!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;