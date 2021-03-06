export const RECEIVE_ALL_SHOWS = "RECEIVE_ALL_SHOWS";
export const RECEIVE_SHOW = "RECEIVE_SHOW";
export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_EPISODE = "RECEIVE_EPISODE";
export const RECEIVE_ALL_EPISODES = "RECEIVE_ALL_EPISODES";
export const RECEIVE_USER_SHOW = 'RECEIVE_USER_SHOW';
export const REMOVE_USER_SHOW = "REMOVE_USER_SHOW";
export const RECEIVE_ALL_GENRES = "RECEIVE_ALL_GENRES"
export const RECEIVE_GENRE = "RECEIVE_GENRE";
import * as ContentUtil from '../util/content_api_util';


const receiveAllShows = (shows) => ({
    type: RECEIVE_ALL_SHOWS,
    shows: shows
});

const receiveAllMovies = (movies) => ({
    type: RECEIVE_ALL_MOVIES,
    movies: movies
});

const receiveAllEpisodes = (episodes) => {

    return({
    type: RECEIVE_ALL_EPISODES,
    episodes: episodes
    })
};

const receiveEpisode = (episode) => ({
    type: RECEIVE_EPISODE,
    episode: episode
});
 

const receiveShow = (show) => ({
    type: RECEIVE_SHOW,
    show: show
});

const receiveMovie = (movie) => ({
    type: RECEIVE_MOVIE,
    movie: movie
});

const receiveUserShow = (my_show) => ({
    type: RECEIVE_USER_SHOW,
    my_show: my_show
})

const removeUserShow = (my_show) => ({
    type: REMOVE_USER_SHOW,
    my_show: my_show
})

const receiveAllGenres = (genres) => ({
    type: RECEIVE_ALL_GENRES,
    genres: genres
})

const receiveGenre = (genre) => ({
    type: RECEIVE_GENRE,
    genre: genre
})


export const getGenre = (id) => (dispatch) => {
    ContentUtil.fetchGenre(id).then((res) => {

        dispatch(receiveGenre(res.genre));
        dispatch(receiveAllShows(res.shows))
    })
}

export const getAllGenres = () => (dispatch) =>{
    ContentUtil.fetchAllGenres().then((genres) => dispatch(receiveAllGenres(genres)))
}

export const getEpisode = (id) => (dispatch) => (
    ContentUtil.fetchEpisode(id).then((episode)=>dispatch(receiveEpisode(episode)))
);

export const getAllEpisodes = () => (dispatch) => {

    return(
    ContentUtil.fetchAllEpisodes().then((episodes) => dispatch(receiveAllEpisodes(episodes)))
)};

export const getAllShows = () => (dispatch) => (
    ContentUtil.fetchAllShows().then((shows)=>dispatch(receiveAllShows(shows)))
);

export const getShow = (id) => (dispatch) => (
    ContentUtil.fetchShow(id).then((res) => {
        dispatch(receiveShow(res.show));
        dispatch(receiveAllEpisodes(res.episodes));
    }));

export const getAllMovies = () => (dispatch) => (
    ContentUtil.fetchAllMovies().then((movies) => dispatch(receiveAllMovies(movies)))
);

export const getMovie = (id) => (dispatch) => (
    ContentUtil.fetchMovie(id).then((movie) => dispatch(receiveMovie(movie)))
);

export const createUserShow = (show_id) => dispatch =>{
    return(
    ContentUtil.addMyStuff(show_id).then((my_show) => dispatch(receiveUserShow(my_show)))
    )
}

export const deleteUserShow = (show_id) => dispatch => (
    ContentUtil.removeMyStuff(show_id).then((my_show) => dispatch(removeUserShow(my_show)))
)