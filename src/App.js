import './App.css';
import LoginApp from './components/LoginWithApp/LoginApp';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CarouselImage from './components/CarouselImage/CarouselImage';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
        <Route path="/profile" element={<Profile />}/>
        </Route>
      </Routes>
      </BrowserRouter> */}
     {/* <Profile /> */}
     {/* <Home /> */}
      {/* <CarouselImage /> */}
      {/* <LoginApp /> */}
      <BrowserRouter>
      <Routes>
      <Route path='/bienvenido' element={<Landing />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/loginApp' element={<LoginApp />}/>
      <Route path='/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Landing /> */}
    </div>
  );
}

export default App;
