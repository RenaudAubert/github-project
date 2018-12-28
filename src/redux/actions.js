export const REQUEST_REPO = 'REQUEST_REPO';
export const RECEIVE_REPO = 'RECEIVE_REPO';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

const requestRepo = (user) => ({
  type: REQUEST_REPO,
  user
});

const receiveRepo = (user, repositories) => {
  return {
    type: RECEIVE_REPO,
    user,
    repositories
  }
};

const requestFailure = (error) => ({
  type: REQUEST_FAILURE,
  error
});

export const fetchRepo = (user) => {
  return async dispatch => {
    dispatch(requestRepo(user));
    try {
      const res = await fetch(`https://api.github.com/users/${user}/repos`);
      const repositories = await res.json();
      dispatch(receiveRepo(user, repositories));
    } catch(error) {
      dispatch(requestFailure(error));
    }
  }
};
