import styled from 'styled-components';
import {motion} from 'framer-motion';

//redux
import {useSelector} from 'react-redux';
import {gameDetailsUrl} from '../api';

const GameDetail = () => {
  //get data with selector
  const {screenshot, game} = useSelector((state) => state.detail);

  return (
    <div className='card-shadow'>
      <div className='detail'>
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
          <img src='{game.background_image}' alt='iamge' />
        </div>
        <div className='gallery'>
          {screenshot.results.map((item) => (
            <img src='{item.image}' alt='Game Screenshots' key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
