import { ACTIONS } from '../../constants';
import { INewAttendance } from '../../contracts';

export const addAttendanceAction = (newAttendance: INewAttendance) => ({
  type: ACTIONS.ADD_ATTENDANCE,
  payload: newAttendance
});
