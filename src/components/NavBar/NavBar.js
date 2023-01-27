import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'
import spotterbird from './spotterbird.png'

export default function NavBar({ post, user, setUser }) {
  function handleLogout() {
    userService.logout()
    setUser(null)
  }
  return (
    <nav>
      <img src={spotterbird} />
      <Link to="/posts/new">Home</Link>
      &nbsp; &nbsp; &nbsp;
      <Link to="/posts">{user.name}'s Page</Link>
      &nbsp; &nbsp; &nbsp;
      <Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
  );
}
