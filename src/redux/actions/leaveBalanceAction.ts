import { ACTIONS } from '../../constants';

export const fetchLeaveBalanceAction = (id: number) => ({
  type: ACTIONS.GET_LEAVE_BALANCE,
  payload: id
});
