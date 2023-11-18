import Resume from "./Components/Resume/Resume";
import demoResume from "./Data/demoResume.json";
import DownloadPDFButton from "./Components/DownloadPDFButton/DownloadPDFButton";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <DownloadPDFButton
        content={<Resume {...demoResume} />}
        fileName={`Resume-${new Date().toISOString().split("T")[0]}`}
      />
    </div>
  );
};

export default App;
