import logo from './logo.svg';
import './App.css';

function App() {
  const arr=[1,2,3,4,5,6]
  return (

    <div className="App">
      
     {
      arr.map(item=>(
        <span >{item}</span>
      )

      )
      
     }
     {
      arr.map((num)=><span>{num}</span>)
     }
        <a

          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
    </a>
    </div>
  );
}

export default App;
