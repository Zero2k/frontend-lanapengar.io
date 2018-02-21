const ADD_PROFILE = 'ADD_PROFILE';

export const addProfile = profile => ({
  type: ADD_PROFILE,
  profile
});

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return action.profile;

    default:
      return state;
  }
};
