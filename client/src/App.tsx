import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import Login from './screen/Login';
import Register from './screen/Register';
import Article from './screen/Article';
import CreatePost from './screen/CreatePost';
import UpdatePost from './screen/UpdatePost';
import Profile from './screen/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/writepost" element={<CreatePost />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/posts/post/:id" element={<Article />} />
        <Route path="/edit/:id" element={<UpdatePost />} />
      </Routes>
    </div>
  );
}

export default App;
