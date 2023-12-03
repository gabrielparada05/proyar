import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About/About';
import Approved from './Pages/Approved/Approved';
import Contact from './Pages/Contact/Contact/Contact';
import Team from './Pages/Team/Denitst/Dentist';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/Services/Service/Service';
import Gallery from './Pages/Home/Gallery/Gallery.jsx';

// function App() {
//   return (
//     <div className="App">
//       {/* <AuthProvider> */}
//       <Router basename="/proyar">
//         <Header />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/proyar' element={<Home />} />
//           <Route path='/home' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/service' element={<Service />} />
//           <Route path='/gallery' element={<Gallery />} />
//           <Route path='/team' element={<Team />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/approved' element={<Approved />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='*' element={<NotFound />} />
//         </Routes>
//         <Footer />
//       </Router>
//     {/* </AuthProvider> */}
//     </div>
//   );
// }

// export default App;


function App() {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div className="App">
      {/* <AuthProvider> */}
        <Router  basename="/proyar">
          <Header />
          <Routes>
            <Route path={`${publicUrl}/`} element={<Home />} />
            <Route path={`${publicUrl}/proyar`} element={<Home />} />
            <Route path={`${publicUrl}/about`} element={<About />} />
            <Route path={`${publicUrl}/service`} element={<Service />} />
            <Route path={`${publicUrl}/team`} element={<Team />} />
            <Route path={`${publicUrl}/contact`} element={<Contact />} />
            <Route path={`${publicUrl}/approved`} element={<Approved />} />
            <Route path={`${publicUrl}/login`} element={<Login />} />
            <Route path={`${publicUrl}/*`} element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;