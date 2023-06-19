import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Form, NotFound, Activities, Edit } from "./views";
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';

function App() {
  const URL = "https://pi-countries-back-dmol.onrender.com";
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
        <Route path={`${URL}/`} element={<Landing />} />
        <Route path={`${URL}/home`} element={<Home />} />
        <Route path={`${URL}/detail/:id`} element={<Detail />} />
        <Route path={`${URL}/activities`} element={<Activities />} />
        <Route path={`${URL}/create`} element={<Form />} />
        <Route path={`${URL}/edit/:id`} element={<Edit />} />
        <Route path={`${URL}*`} element={<NotFound />}/>
      </Routes>
      {showComponents() &&
      <Footer />}
    </div>
  );
}

export default App;