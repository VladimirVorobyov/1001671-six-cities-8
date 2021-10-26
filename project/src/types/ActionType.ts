export enum ActionType {
  MapAction = 'MapAction',
  CityAction = 'CityAction',
}

export type MapActionType = {
  type: ActionType.MapAction;
  payload: string;
};

export type CityActionType = {
  type: ActionType.CityAction;
  payload: string;
};

export type Actions = MapActionType | CityActionType;
