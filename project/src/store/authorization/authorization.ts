import { ActionType, Actions } from '../../types/ActionType';
import { UserProcess } from '../../types/State';
import { AuthorizationStatus } from '../../const';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  email: '',
};

const authorization = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    case ActionType.EmailUser:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export { authorization };
