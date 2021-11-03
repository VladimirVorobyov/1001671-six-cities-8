import { State } from '../../types/State';
import { AuthorizationStatus } from '../../const';
import { NameSpace } from '../root-reducer';


export const getLoaded = (state: State): boolean => state[NameSpace.user].isDataLoaded;
export const getAuthorization = (state: State): AuthorizationStatus =>(state[NameSpace.user].authorizationStatus);
export const getEmail = (state: State): string => (state[NameSpace.user].email);

