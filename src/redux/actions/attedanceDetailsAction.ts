import { ACTIONS } from '../../constants';

export const fetchAttendanceDetailsAction = (
  id: number,
  from: string,
  to: string
) => ({
  type: ACTIONS.GET_ATTENDANCE_DETAILS,
  payload: { id, from, to }
});

export const fetchAllLeavesAction = (id: number) => ({
  type: ACTIONS.GET_ALL_LEAVES,
  payload: id
});
