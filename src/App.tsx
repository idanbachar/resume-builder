import Resume from "./Components/Resume/Resume";
import demoResume from "./Data/demoResume.json";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Resume {...demoResume} />
      </header>
    </div>
  );
};

export default App;
