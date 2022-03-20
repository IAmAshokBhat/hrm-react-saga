import { ACTIONS } from '../../constants';
import { INewLeave } from '../../contracts';

export const applyLeaveAction = (newLeave: INewLeave) => ({
  type: ACTIONS.APPLY_LEAVE,
  payload: newLeave
});
