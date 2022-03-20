import { ACTIONS } from '../../constants';

export const fetchEventDetailsAction = (
  id: number,
  from: string,
  to: string
) => ({
  type: ACTIONS.GET_EVENT_DETAILS,
  payload: { id, from, to }
});
