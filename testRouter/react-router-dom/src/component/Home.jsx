import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <nav>
    <li>
        <Link to={"/login"}>login</Link>
    </li>
    <li>
        <Link to={"/register"}>register</Link>
    </li>
    </nav>
  )
}
