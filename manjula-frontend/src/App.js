import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Dashboard } from "./components/Dashboard/Dashboard";
import Map from "./components/Map/Map";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css"

function App() {


  return (
    <div >
         <Navbar/>
     <Routes >
      <Route path="/register" element={<Register/>}> </Route>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/" element={<Dashboard/>}> </Route>
      <Route path="/map" element={<Map/>}> </Route>
     </Routes>
    </div>
  );
}

export default App;
