import './App.css';
import UploadForm from './Components/UploadForm.js'
import Navigation from './Components/Navigation.js'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App" >
        <Router>
      <Navigation />
      <UploadForm />
      <Routes>
            <Route exact path='/' element={UploadForm} />
            <Route path="/Upload" element={UploadForm} />
      </Routes>
        </Router>
      
    
    </div>
  );
}

export default App;
