import { Link } from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {

  return (
    <header>
      <div className="navContainer">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar