import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1 dropdown">
  <label tabIndex={0} className="btn btn-ghost normal-case text-xl">TodoBebidas <Icon icon="material-symbols:arrow-drop-down-rounded" width="2.15rem"/> </label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link to="/">Bebidas con alcohol</Link></li>
    <li><Link to="/planets">Bebidas sin alcohol</Link></li>
  </ul>
  </div>

  < CartWidget />
  
</div>
  )
}
export default NavBar