import styled from 'styled-components';
import {motion} from 'framer-motion';
import React, {Fragment} from 'react';
//redux
import {useSelector} from 'react-redux';

const GameDetail = () => {
  //get data with selector
  const {screenshot, game, isLoading} = useSelector((state) => state.detail);

  return (
    <Fragment>
      {!isLoading && (
        <StyledCardShadow>
          <StyledDetail>
            <StyledStats>
              <div className='rating'>
                <h3>{game.name}</h3>
                <p> Rating: {game.rating}</p>
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <img src='{game.background_image}' alt='Game Wallpaper' />
            </StyledMedia>
            <StyledDescription>
              <p>{game.description_raw}</p>
            </StyledDescription>
            <div className='gallery'>
              {screenshot.results.map((item) => (
                <img src='{item.image}' alt='Game Screenshot' key={item.id} />
              ))}
            </div>
          </StyledDetail>
        </StyledCardShadow>
      )}
    </Fragment>
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
  padding: 2rem 3rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInfo = styled(motion.div)`
  text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 2rem;
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 3rem;
  img {
    width: 100%;
  }
`;

const StyledDescription = styled(motion.div)`
  margin: 3rem 0;
`;

export default GameDetail;
