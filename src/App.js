import Login from "./components/Login";
import "./App.css";
import { useEffect } from "react";
import { getTokenFromResponse } from "./spotify";
import Player from "./components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
console.log(spotify)

function App() {
  const [
    { user, token, playlist, savedTrack, discover_weekly, single_track },
    dispatch,
  ] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
    }
    //USER PROFILE
    spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user: user,
      });
    });

    //Playlist
    spotify.getUserPlaylists().then((playlist) => {
      dispatch({
        type: "SET_PLAYLIST",
        playlist: playlist,
      });
    });

    //Random schermata
    spotify.getMySavedTracks().then((savedTrack) => {
      console.log(savedTrack);
      dispatch({
        type: "SET_SAVED_TRACKS",
        savedTrack: savedTrack,
      });
    });

    spotify.getPlaylist("37i9dQZEVXcHdjqeIx91cE").then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  }, [dispatch, token]);

  return <div className="h-screen">{token ? <Player /> : <Login />}</div>;
}

export default App;
