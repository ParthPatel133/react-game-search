import styled from 'styled-components';
import {motion} from 'framer-motion';
import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
//redux
import {useSelector} from 'react-redux';
import {smallImage} from '../util';

//IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({pathId}) => {
  const history = useHistory();

  //EXIT GAME DETAIL
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  //GET PLATFORM SVG images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };

  //Get Ratings
  const getRatings = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt='star' key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt='star' key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  //get data with selector
  const {screenshot, game, isLoading} = useSelector((state) => state.detail);

  return (
    <Fragment>
      {!isLoading && (
        <StyledCardShadow className='shadow' onClick={exitDetailHandler}>
          <StyledDetail layoutId={pathId}>
            <StyledStats>
              <div className='rating'>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p> Rating: {Math.floor(game.rating)}</p>
                {getRatings()}
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatforms>
                  {game.platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    />
                  ))}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt='Game Wallpaper'
              />
            </StyledMedia>
            <StyledDescription>
              <p>{game.description_raw}</p>
            </StyledDescription>
            <div className='gallery'>
              {screenshot.results.map((item) => (
                <img
                  src={smallImage(item.image, 1280)}
                  alt='Game Screenshot'
                  key={item.id}
                />
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
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  @media (max-width: 600px) {
  }
`;

const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 0.5rem;
  padding: 2rem 3rem;
  background: white;
  position: absolute;
  left: 10%;
  z-index: 10;
  color: black;
  img {
    width: 100%;
  }
  @media (max-width: 1000px) {
    padding: 1rem;
  }
  @media (max-width: 680px) {
    padding: 0rem;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline;
  }
  @media (max-width: 680px) {
    flex-direction: column;
  }
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
  @media (max-width: 1000px) {
    img {
      margin-left: 0.8rem;
    }
  }
  @media (max-width: 680px) {
    img {
      margin-left: 0.5rem;
    }
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
