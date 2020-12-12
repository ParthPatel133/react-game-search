import styled from 'styled-components';
import {motion} from 'framer-motion';

//redux
import {useSelector} from 'react-redux';

const GameDetail = () => {
  //get data with selector
  const {screenshot, game} = useSelector((state) => state.detail);

  return (
    <StyledCardShadow>
      <StyledDetail>
        <div className='stats'>
          <div className='rating'>
            <h3>{game.name}</h3>
            <p> Rating: {game.rating}</p>
          </div>
          <div className='info'>
            <h3>Platforms</h3>
            <div className='platforms'>
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className='media'>
          <img src='{game.background_image}' alt='Game Wallpaper' />
        </div>
        <div className='description'>
          <p>{game.description_raw}</p>
        </div>
        <div className='gallery'>
          {screenshot.results.map((item) => (
            <img src='{item.image}' alt='Game Screenshots' key={item.id} />
          ))}
        </div>
      </StyledDetail>
    </StyledCardShadow>
  );
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 0.5rem;
  padding: 15rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

export default GameDetail;
