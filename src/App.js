import React, { Component } from 'react';
import Pizza from './pizzaData.js'
import Location from './locationData.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <a href='#description'>Description</a>
          <a href='#menu'>Menu</a>
          <h1>PIZZA-EXPRESS</h1>
          <a href='#locations'>Locations</a>
          <a href='#contact'>Contact</a>
        </div>
        <div className="splash-image">
          <img src='splashpizza.jpg'/>
          <span>FIGHT FOR THE LAST SLICE</span>
        </div>
        <div id='description' className='description'>
          <img src='pizzaoven.jpg'/>
          <p>Deep v jean shorts tumeric lo-fi. Pabst salvia hammock, neutra before they sold out fingerstache paleo viral flannel mlkshk kombucha echo park crucifix gochujang unicorn. Swag chia umami chillwave scenester. Scenester pop-up you probably haven't heard of them master cleanse. Poutine next level yr trust fund, meditation cloud bread flexitarian narwhal knausgaard schlitz four dollar toast offal put a bird on it lo-fi fanny pack. Literally skateboard migas mumblecore, celiac waistcoat health goth. Humblebrag cred neutra portland chillwave master cleanse keffiyeh copper mug enamel pin hexagon offal. Vape pop-up paleo cliche street art. Next level heirloom gluten-free viral cred. Crucifix ramps edison bulb, blue bottle lo-fi banh mi live-edge. Raw denim fingerstache celiac pug, squid succulents live-edge chillwave kale chips trust fund banjo. Viral air plant synth, beard tousled irony post-ironic chia crucifix iceland roof party waistcoat truffaut tumblr lyft.</p>
        </div>
        <div className="menu">
          <h1>Menu</h1>
          <div className="menu-container">
            {Pizza.map(pizza => (
              <div key={pizza.name} className='menu-list'>
                <div id='menu' className='menu-item'>
                  <img src={pizza.image}/>
                </div>
                <div className='menu-description'>
                  <div className='menu-item-name'>{pizza.name}</div>
                  <div>Price: {pizza.price}</div>
                  <div>{pizza.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div key='locations' className='locations'>
            <h1>Locations:</h1>
            <div key='location-list' className='location-list'>
              {Location.map(location => (
                <div key={location.address} className='location'>
                  <p>{location.name}</p>
                  <strong>Address:</strong>
                  <p>{location.address}</p>
                  <strong>Phone Number:</strong>
                  <p>{location.phone}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
