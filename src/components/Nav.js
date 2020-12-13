import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';

const Nav = () => {
  return (
    <StyledNav>
      <StyledLogo>
        <img src={logo} alt='logo' />
        <h1>Gamer</h1>
      </StyledLogo>
      <div className='search'>
        <input type='text' />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 1.5rem 0rem;
  text-align: center;
  input {
    width: 40%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
