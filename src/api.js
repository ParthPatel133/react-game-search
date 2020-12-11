//base URL
const base_url = 'https://api.rawg.io/api/';

//date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDate = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//current day-Month-year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const pageSize = 10;

//popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=${pageSize}`;
//upcoming games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=${pageSize}`;
//new games
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=${pageSize}`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;
