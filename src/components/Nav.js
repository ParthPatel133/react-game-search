import {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';

//REDUX
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';

const Nav = () => {
  const [textInput, setTextInput] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };

  const clearSearchHandler = () => {
    dispatch({
      type: 'CLEAR_SEARCHED',
    });
  };

  return (
    <StyledNav>
      <StyledLogo onClick={clearSearchHandler}>
        <img src={logo} alt='logo' />
        <h1>Gamer</h1>
      </StyledLogo>
      <form className='search'>
        <input onChange={inputHandler} value={textInput} type='text' />
        <button type='submit' onClick={submitSearch}>
          Search
        </button>
      </form>
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
  @media (max-width: 1000px) {
    padding: 1rem 0rem;
    input {
      width: 55%;
    }
  }
  @media (max-width: 680px) {
    form {
      display: flex;
      flex-direction: column;
    }
    input {
      font-size: 1rem;
      width: 75%;
      align-self: center;
    }
    button {
      margin-top: 0.5rem;
      align-self: center;
      font-size: 1rem;
      width: 25%;
      padding: 0.5rem 0.5rem;
    }
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
