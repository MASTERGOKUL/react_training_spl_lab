import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
    <ul>
    <li> <Link to={'/'}>Home</Link></li>
    <li> <Link to={'/web'}>Web</Link></li>
    <li> <Link to={'/whatsapp'}>Whatsapp</Link></li>
    </ul>
</>
   
  )
};

export default Layout;