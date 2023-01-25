import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from "../../utilities/users-service"
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewPostPage from '../NewPostPage/NewPostPage';
import NavBar from '../../components/NavBar/NavBar';
import PostHistoryPage from '../PostHistoryPage/PostHistoryPage';

export default function App() {

  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? (
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/posts/new" element={<NewPostPage user={user} />}/>
          <Route path="/posts" element={<PostHistoryPage user={user} />}/>
        </Routes>
      </>
      ) : (
        <AuthPage setUser={setUser}/>
      )}
    </main>
  );
}