import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Submit from "./components/submit_form/submit";
import Userform from './components/user_from/userform';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/submit" element={<Submit/>}/>
        <Route path="/userform" element={<Userform />} />
        <Route path=''></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
