import { BrowserRouter, Route, Link } from 'react-router-dom';

export default function TestNavBar() {
  return (
    <nav>
      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Work">Work</Link>
        </li>

      </ul>
    </nav>
  )
}