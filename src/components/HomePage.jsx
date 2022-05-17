import React from 'react';
import BarberCard from './BarberCard';

function HomePage() {
  return (
    <div className="barbers-box">
      <div className="barbers-page">
        <h1>Our Barbers</h1>
        <BarberCard />
      </div>
    </div>
  );
}
export default HomePage;
