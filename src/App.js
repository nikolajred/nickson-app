// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
  <div>
     <Header/>
     <Skills/>
  </div>
   

  );
}

const Header = () => {
  return(<header className="App-header">
    <a href = "#s">Home</a>
    <a href = "#s">News Feed</a>
    <a href = "#s">Messages</a>
 </header>)
};

const Skills = () =>{
  return(
  <div className = "Skills">
    <h1>HTML, CSS, JavaScript</h1>
    <ol>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ol>
  </div>);
}



export default App;
