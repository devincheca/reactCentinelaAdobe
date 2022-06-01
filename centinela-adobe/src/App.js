import React from 'react';
import './App.css';
import EventInfoNav from './components/eventInfoNav.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
// import SlideShow from './components/slideShow.js';
function App ()
{
  return (
    <div>
      <Header></Header>
      <EventInfoNav></EventInfoNav>
      {/*<SlideShow></SlideShow>*/}
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}
export default App;
