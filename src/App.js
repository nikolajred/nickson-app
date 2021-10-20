import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import logo from './eagle.png'



const App = () => {
  return (
  <div className="app-wrapper">
     <header className="header">
       <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travels-logo-png-for-business-design-template-03d1ab18244e3126af5a7b41554e7c99_screen.jpg?ts=1566599731" alt="eagle"></img> 
     </header>
     <nav className="nav">
       <div>Profile</div>
       <div>Messages</div>
       <div>News</div>
       <div>Musik</div>
     </nav>
     <div className="content">Main content</div>
  </div>
  );
}

export default App;
