//Stato iniziale - creazione
export const initialState = {
  user: null,
  playList: [],
  playing: false,
  item: null,
  token: null,
  playlist: null,
  categories: [],
  savedTrack: null,
  discover_weekly: null,

  itemm: null,
  playingg: false
};

// Action : la possibiità di manipolare lo stato iniziale.
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    case "SET_SAVED_TRACKS":
      return {
        ...state,
        savedTrack: action.savedTrack,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
      case "SET_ITEM":
        return {
          ...state,
          itemm: action.itemm,
        };
        case "SET_PLAYING":
          return {
            ...state,
            playingg: action.playingg,
          };
    default:
      return state;
  }
};
export default reducer;
