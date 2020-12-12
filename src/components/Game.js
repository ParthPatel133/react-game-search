import styled from 'styled-components';
import {motion} from 'framer-motion';

//redux
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import {Link} from 'react-router-dom';

const Game = ({name, released, image, id}) => {
  //LOAD DETAILS
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 20vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
