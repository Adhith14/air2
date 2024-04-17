// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Register } from "./components/Register";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";



// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Banner />
//       <Contact />
//       <Footer />
      
//     </div>
//   );
// }

// export default App;


//=======================================================
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Register } from "./components/Register";
import { Login } from "./components/Login"; 
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import BookingForm from './components/BookingForm';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
         
          <Route path="/" element={
            <>
              <Banner />
        {/* Define routes for Register and Login */}
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<BookingForm/>} />
        </Routes>
        
       
      </div>
    </Router>
    
 
  );
}

export default App;

