import axios from 'axios';
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGameurl,
} from '../api';

//action creactor
export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularGamesData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upcomingGamesData = await axios.get(upcomingGamesUrl());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameurl(game_name));

  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchGames.data.results,
    },
  });
};

export const setLoading = () => (dispatch) => {
  dispatch({type: 'LOADING_GAMES'});
};
