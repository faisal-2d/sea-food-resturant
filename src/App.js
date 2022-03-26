import './App.css';
import Answers from './components/Answers/Answers';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1>Welcome to <span style={{"color":"rgb(211, 19, 83)"}}>Seafood</span> Shop</h1>
      <Shop></Shop>
      <Answers></Answers>
    </div>
  );
}

export default App;
