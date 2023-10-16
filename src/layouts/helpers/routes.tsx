import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from 'react-icons/md';

const routes = [
  {
    name: 'Dashboard',
    layout: '/dashboard',
    path: '',
    icon: <MdHome className="h-6 w-6" />,
  },
];
export default routes;
