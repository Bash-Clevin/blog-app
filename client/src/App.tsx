import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import Login from './screen/Login';
import Register from './screen/Register';
import Article from './screen/Article';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/post/:id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
