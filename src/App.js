import "./App.css";
import LoginApp from "./components/LoginWithApp/LoginApp";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Forms from "./pages/Forms";
import Navbar from "./components/Navbar/Navbar";
import EditProfile from "./components/Forms/EditProfile";
import CoursePreview from "./components/CoursePreviews/CoursePreviews";
import CourseTest from "./components/CourseTest/CourseTest";
import CourseExam from "./components/CourseExam/CourseExam";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/bienvenido" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginApp" element={<LoginApp />} />
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<EditProfile />} />
            <Route path="/createCourse" element={<CreateCourse />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/coursePreviews" element={<CoursePreview />} />
            <Route path="/courseTest" element={<CourseTest />} />
            <Route path="/courseExam" element={<CourseExam />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
