import './App.css';
import LoginApp from './components/LoginWithApp/LoginApp';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateCourse from './components/CreateCourse/CreateCourse';
import Forms from './pages/Forms'
import Navbar from './components/Navbar/Navbar'
import EditProfile from './components/Forms/EditProfile'
function App() {
  return (
    <div className="App">   
      <BrowserRouter>
      <Routes>
      <Route path='/bienvenido' element={<Landing />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/loginApp' element={<LoginApp />}/>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/settings' element={<EditProfile />}/>
      <Route path='/create' element={<CreateCourse />}/>
      <Route path='/forms' element={<Forms />}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
