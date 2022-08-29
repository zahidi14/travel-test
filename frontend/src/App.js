import React from 'react';
import './assets/styles/Header.scss';
import './app.scss';
import CarBookingFlow from './components/CarBookingFlow';
import Dashboard from './components/Dashboard';
import Head from './components/Head';


function App() {
  return (
    <div className="app">
      <Head />
      <CarBookingFlow />
      <Dashboard />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
