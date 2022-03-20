import { all } from 'redux-saga/effects';
import * as API from '../../api';
import { ACTIONS } from '../../constants';
import { generateSaga } from '../actions/utils';
import { loginWatcher } from './loginSaga';

export const userListSaga = generateSaga(ACTIONS.GET_USERS, API.getUserListAPI);

const userInfoSaga = generateSaga(
  ACTIONS.GET_USER_DETAILS,
  API.getUserDetailsAPI
);

const designationListSaga = generateSaga(
  ACTIONS.GET_DESIGNATION_LIST,
  API.getDesignationListAPI
);

const eventDetailsSaga = generateSaga(
  ACTIONS.GET_EVENT_DETAILS,
  API.getEventDetailsAPI
);

const leaveBalanceSaga = generateSaga(
  ACTIONS.GET_LEAVE_BALANCE,
  API.getLeaveBalanceAPI
);
const getAllLeavesSaga = generateSaga(
  ACTIONS.GET_ALL_LEAVES,
  API.getAllLeavesAPI
);

const getAttendanceDetailsSaga = generateSaga(
  ACTIONS.GET_ATTENDANCE_DETAILS,
  API.getAttendanceDetailsAPI
);

const registerSaga = generateSaga(ACTIONS.REGISTER, API.registerAPI, true);

const applyLeaveSaga = generateSaga(
  ACTIONS.APPLY_LEAVE,
  API.applyLeaveAPI,
  true
);

const addAttendanceSaga = generateSaga(
  ACTIONS.ADD_ATTENDANCE,
  API.addAttendanceAPI,
  true
);

export default function* rootSaga() {
  yield all([
    loginWatcher(),
    userListSaga(),
    userInfoSaga(),
    designationListSaga(),
    eventDetailsSaga(),
    leaveBalanceSaga(),
    getAllLeavesSaga(),
    getAttendanceDetailsSaga(),
    registerSaga(),
    applyLeaveSaga(),
    addAttendanceSaga()
  ]);
}
