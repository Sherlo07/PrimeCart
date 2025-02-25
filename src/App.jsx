import React from 'react';

import Navbar from './Components/Navbar.jsx';
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import Home from './Components/Home.jsx';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
//import PropsExample from './Components/PropsExample.jsx';
//import UsestateExam from './Components/UsestateExam.jsx';
//import ThemeToggle from './Components/ThemeToggle.jsx';
//import ToggleText from './Components/ToggleText.jsx';


 
const App = () => {
  return (
    <>
    <div >
      <Router>
      
      <Navbar/>
      <Routes>
    
     
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </Router>
      
      {/* <PropsExample name="Irfan" age={21} isStudent={true}/> */}
     {/*<UsestateExam/>
     <ThemeToggle/>
     <ToggleText/>*/}
   
 
     
      
    </div>
    </>
  );
};

export default App; // ✅ Exporting as default


