import { call, put, takeLatest } from 'redux-saga/effects';
import { IGenericAction, TAny } from '../../contracts';

// TODO: Use the correct type for api param
export const generateSaga = (
  actionName: string,
  api: TAny,
  reqCmpltPayload: boolean = false
) => {
  function* callApi(actn: IGenericAction) {
    try {
      const response: Promise<TAny> = yield call(api, actn.payload);
      //@ts-ignore
      const resultData: IGenericResponse = yield call([response, 'json']);

      yield put({
        type: `${actionName}_SUCCESS`,
        payload: reqCmpltPayload ? resultData : resultData.data
      });
    } catch (e: TAny) {
      yield put({ type: `${actionName}_FAILURE`, message: e.message });
    }
  }

  function* watcher() {
    yield takeLatest(actionName, callApi);
  }

  return watcher;
};
