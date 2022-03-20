import { call, put, takeLatest } from 'redux-saga/effects';
import * as API from '../../api';
import { ACTIONS } from '../../constants';
import { TAny } from '../../contracts';

function* loginAction(action: TAny) {
  try {
    const response: Promise<TAny> = yield call(API.loginAPI, action.payload);
    //@ts-ignore
    let { token, expires }: IGenericResponse = yield call([response, 'json']);
    const { userId } = action.payload;

    localStorage.setItem('userToken', token);
    localStorage.setItem('expires', expires + '');
    localStorage.setItem('userId', userId + '');

    yield put({
      type: ACTIONS.LOGIN_SUCCESS,
      payload: { token, expires, userId }
    });
  } catch (e: TAny) {
    yield put({ type: ACTIONS.LOGIN_FAILURE, message: e.message });
  }
}

export function* loginWatcher() {
  //@ts-ignore
  yield takeLatest(ACTIONS.GET_LOGIN, loginAction);
}
