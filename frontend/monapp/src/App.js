import React from "react"
import{BrowserRouter , Routes , Route, Navigate} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import DashAdmin from'./components/dashbord/dashAdmin';
import DashPatient from "./components/dashbord/dashPatient";
import DashDocteur from "./components/dashbord/dashDocteur";
import Psidebar from "./components/sidebar/Psidebar";
function App() {
  return (
   <BrowserRouter>

      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />}/> 
        <Route path='/register' element={<Register />}/>

        <Route path='/sidebar' element={<Sidebar />}/>
        <Route path='/navbar' element={<Navbar />}/>
        <Route path="/dashAdmin" element={<DashAdmin />} />
        <Route path="/dashDocteur" element={<DashDocteur />} />


        <Route path="/dashPatient" element={<DashPatient />} />

        
        <Route path="/psidebar" element={<Psidebar />} />

        




      </Routes>
   </BrowserRouter>
  );
}

export default App;
