import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {useLocation} from 'react-router-dom';
import Spinner from '../components/Spinner';
//components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

//action creator
import {loadGames, setLoading} from '../actions/gamesAction';

//LAZY LOADING
import {
  LazyLoadComponent,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {
  //GET CURRENT LOCATION
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  //FETCH GAMES DATA
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
    dispatch(setLoading());
  }, [dispatch]);

  //GET BACK FETCHED DATA
  const {popular, newGames, upcoming, searched, loading} = useSelector(
    (state) => state.games
  );

  if (loading) return <Spinner />;

  return (
    <StyledGameList>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div>
            <h2>Searched games</h2>
            <StyledGames>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  id={game.id}
                  released={game.released}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </StyledGames>
          </div>
        ) : (
          ''
        )}
        <h2>Upcoming games</h2>
        <StyledGames>
          {upcoming.map((game) => (
            <LazyLoadComponent>
              <Game
                name={game.name}
                id={game.id}
                released={game.released}
                image={game.background_image}
                key={game.id}
              />
            </LazyLoadComponent>
          ))}
        </StyledGames>
        <h2>Popular games</h2>
        <StyledGames>
          {popular.map((game) => (
            <LazyLoadComponent>
              <Game
                name={game.name}
                id={game.id}
                released={game.released}
                image={game.background_image}
                key={game.id}
              />
            </LazyLoadComponent>
          ))}
        </StyledGames>
        <h2>New games</h2>
        <StyledGames>
          {newGames.map((game) => (
            <LazyLoadComponent>
              <Game
                name={game.name}
                id={game.id}
                released={game.released}
                image={game.background_image}
                key={game.id}
              />
            </LazyLoadComponent>
          ))}
        </StyledGames>
      </AnimateSharedLayout>
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

export default trackWindowScroll(Home);
