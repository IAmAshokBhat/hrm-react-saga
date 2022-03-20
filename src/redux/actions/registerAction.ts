import { ACTIONS } from '../../constants';
import { IRegisterAPI } from '../../contracts';

export const registerAction = (newUser: IRegisterAPI) => ({
  type: ACTIONS.REGISTER,
  payload: newUser
});
