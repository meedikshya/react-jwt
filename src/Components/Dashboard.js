import React from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
        <h1>
            This is Dashboard Page
        </h1>
        <Link to="/">Sign Out</Link>
       
    </div>
  )
}
