import React from 'react';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import EventInfoNav from './components/eventInfoNav.js';
function App ()
{
  return (
    <div>
      <Header></Header>
      <EventInfoNav></EventInfoNav>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}
export default App;
