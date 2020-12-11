import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {motion} from 'framer-motion';
//action creator
import {loadGames} from '../actions/gamesAction';

//components
import Game from '../components/Game';

const Home = () => {
  //FETCH GAMES DATA
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //GET BACK FETCHED DATA
  const {popular, newGames, upcoming} = useSelector((state) => state.games);

  return (
    <StyledGameList>
      <h2>Upcoming games</h2>
      <StyledGames>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            id={game.id}
            released={game.released}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </StyledGames>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)``;

const StyledGames = styled(motion.div)``;

export default Home;
