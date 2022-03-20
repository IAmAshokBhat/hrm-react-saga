import { ACTIONS } from '../../constants';
import { ILoginData } from '../../contracts';

export const loginAction = (userInfo: ILoginData) => ({
  type: ACTIONS.GET_LOGIN,
  payload: userInfo
});
