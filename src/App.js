import React from 'react';
import eagle from './eagle.png';
import ocean from './ocean.jpg';
import './App.css';
// import logo from './eagle.png'



const App = () => {
  return (
  <div className="app-wrapper">
     <header className="header">
     <img src={eagle} className="App-eagle" alt="eagle" />
     </header>

     <nav className="nav">
       <div><a href="#s">Profile</a></div>
       <div><a href="#s">Messages</a></div>
       <div><a href="#s">News</a></div>
       <div><a href="#s">Musik</a></div>
       <br/>
       <div><a href="#s">Settings</a></div>
     </nav>

     <div className="content">
       <div className="imgCont"><img src={ocean} className="App-ocean" alt="ocean" /></div>
       <div>Avatar + discription</div>
       <div>My posts
         <div>newPost1</div>
         <div>newPost2</div>
       </div>

     
     </div>
  </div>
  );
}

export default App;
