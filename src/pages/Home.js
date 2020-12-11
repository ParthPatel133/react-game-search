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

const StyledGameList = styled(motion.div)`
  padding: 0rem 2rem;
  h2 {
    padding: 2rem 0;
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;
`;

export default Home;
