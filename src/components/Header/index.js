import React from 'react'
import './Header.css';
export default function Header() {
    return (
       <section className='header'>
          <div className='form-container'>
              <h1 className="headline">Get your Ideal home at an affordable price</h1>
              <form method="GET" id="search_form">
                    <input name="search-location" className="input-style" id="search-location" type="search" placeholder="Search by Location" autoComplete="off" required/>
                    <div id='hint_box'></div>
                    <select className="range-select" name="rent_range" id="range-select">
                        <option value="Rent Range" disabled>Rent Range</option>
                        <option value="500-1000">500-1000 Birr</option>
                        <option value="1000-3000">1000-3000 Birr</option>
                        <option value="3000-5000">3000-5000 Birr</option>
                        <option value="Above 5000">Above 5000 birr</option>
                    </select>
                    <button className='submit-btn' type="search" name="search_btn" id="submit_btn">Search</button>
              </form>
          </div>
      </section>
    );
}
