import './App.scss';
import UserCards from "./components/UserCards/UserCards"
import data from "./utils/data"

function App() {
  return (
    <div className="App"> 
      <UserCards data={data}/>
    </div>
  );
}

export default App;