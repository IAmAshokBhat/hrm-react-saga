import { ACTIONS } from '../../constants';

export const fetchUserDetailsAction = (id: number) => ({
  type: ACTIONS.GET_USER_DETAILS,
  payload: id
});
