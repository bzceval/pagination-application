import './App.scss';
import Users from "./components/Users/Users"
import data from "./utils/data"

function App() {
  return (
    <div className="App"> 
      <Users data={data}/>
    </div>
  );
}

export default App;