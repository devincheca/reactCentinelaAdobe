import React, { useState } from 'react';
import './eventInfoNav.css';
import tabs from '../data/tabs.js';
function EventInfoNav()
{
  const [currentTabIndex, setTab] = useState(0);
  function renderNavs()
  {
    let result = [];
    tabs.map((current, index) =>
    {
      result.push(
        <li onClick={ () => { setTab(index); } } className='w3-hover-white'>
          <span className="w3-round-jumbo w3-center spanPadding">
            { current.header }
          </span>
        </li>
      );
      return true;
    });
    result.push(
      <li className='w3-hover-white'>
        <a className="w3-round-jumbo w3-center" href="https://www.cityofinglewood.org/depts/rec/centinela_adobe/default.asp">City of Inglewood</a>
      </li>
    );
    return result;
  }
  return (
    <div>
      <div className="w3-padding white">
        <h1 className="w3-animate-opacity">
          { tabs[currentTabIndex].header }
        </h1>
        <p className="w3-animate-opacity">
          { tabs[currentTabIndex].details }
        </p>
      </div>
      <div>
        <ul className="w3-navbar w3-large w3-center w3-light-blue w3-round-jumbo">
          { renderNavs() }
        </ul>
      </div>
    </div>
  );
}
export default EventInfoNav;
