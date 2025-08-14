import './sideBar.css';
import Logo from '../../imgs/logo2.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import { Link, useLocation } from 'react-router-dom';

function SideBar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" className="logo" />

      <Link 
        to="/colaboradores" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          width: '100%', 
          textDecoration: 'none', 
          color: 'inherit',
          padding: '10px 0'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AccountBoxSharpIcon sx={{ color: '#5f5f5fff' }} />
          <p style={{ paddingLeft: '15px' }}>Colaboradores</p>
        </div>

        <KeyboardArrowRightIcon sx={{ color: '#5f5f5fff' }} />
      </Link>
    </div>
  );
}

export default SideBar;
