import './App.css';
import LoginApp from './components/LoginWithApp/LoginApp';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateCourse from './components/CreateCourse/CreateCourse';
import Settings from './components/Settings/Settings';
import Forms from './pages/Forms'
function App() {
  return (
    <div className="App">   
      <BrowserRouter>
      <Routes>
      <Route path='/bienvenido' element={<Landing />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/loginApp' element={<LoginApp />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/settings' element={<Settings />}/>
      <Route path='/create' element={<CreateCourse />}/>
      <Route path='/forms' element={<Forms />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
