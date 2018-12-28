import { REQUEST_REPO, RECEIVE_REPO, REQUEST_FAILURE } from "./actions";

const initialState = {
  user: "",
  loading: false,
  repositories: [],
  error: null
};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_REPO:
      return Object.assign({}, state, {
        loading: true,
        user: action.user
      });
    case RECEIVE_REPO:
      return {
        user: action.user,
        loading: false,
        error: null,
        repositories: action.repositories.map(repo => {
          return {
            id: repo.id,
            name: repo.name,
            fullname: repo.fullname,
            watchers: repo.watchers,
            language: repo.language,
            description: repo.description,
            avatar: repo.owner.avatar_url
          };
        })
      };
    case REQUEST_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
};

export default repoReducer;
