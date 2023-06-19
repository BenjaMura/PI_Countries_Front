import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Form, NotFound, Activities, Edit } from "./views";
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();

  const showComponents = () => {
    if (location.pathname === "/home" ||
    location.pathname === "/create" ||
    location.pathname === "/activities" ||
    location.pathname.includes("/edit/") ||
    location.pathname.includes("/detail/")) {
      return true
    }
    return false
  };
  
  return (
    <div className="App">
      {showComponents() &&
      <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/create" element={<Form />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      {showComponents() &&
      <Footer />}
    </div>
  );
}

export default App;