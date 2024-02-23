import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ReportComplain from './Pages/ReportComplain';
import ViewComplain from './Pages/ViewComplain';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './Pages/PageNotFound'


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/view-complain' element={<ViewComplain/>}></Route>
          <Route path='/report-complain' element={<ReportComplain/>}></Route>
          <Route path='/*' element={<PageNotFound/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
