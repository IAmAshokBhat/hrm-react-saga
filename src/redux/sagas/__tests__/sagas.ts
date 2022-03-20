import { takeLatest } from 'redux-saga/effects';
import * as apis from '../../../api';
import { ACTIONS } from '../../../constants';
import { userListSaga } from '../index';

describe('sagas test cases', () => {
  it.skip('should take latest call for user list action fetch data from api', () => {
    const saga = userListSaga();
    saga.next();
    expect(saga.next().value).toEqual(
      takeLatest(ACTIONS.GET_USERS, apis.getUserListAPI)
    );
  });
});
