import { MapActionType, ActionType, CityActionType } from '../types/ActionType';

export const MapAction = (payload: string): MapActionType => ({
  type: ActionType.MapAction,
  payload,
});

export const CityAction = (payload: string): CityActionType => ({
  type: ActionType.CityAction,
  payload,
});
