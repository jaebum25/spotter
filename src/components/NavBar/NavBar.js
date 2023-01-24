import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logout()
    setUser(null)
  }
  return (
    <nav>
      <Link to="/posts">Post History</Link>
      &nbsp; | &nbsp;
      <Link to="/posts/new">New Post</Link>
      &nbsp;&nbsp;<span>Howdy, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
  );
}
