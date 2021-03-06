///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                        IMPORTS

import { CombinedRollValuesType } from "../../model/DiceRollTypes"


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                               MODEL AND STATE TYPE DEFINITIONS

export interface BodyRoll {
  id: string;
  tableGroupId: string;
  subtableGroupId: string;
  value: CombinedRollValuesType;
}

export interface BodyRollsState {
  readonly byId: {
    [key: string]: BodyRoll;
  };
  readonly allIds: string[];
}

export type ErrorBodyRollInput = {
  tableGroupId: string;
  subtableGroupId: string;
}

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                        ACTIONS

export const ADD_BODYROLL = "ADD_BODYROLL";
export const SET_BODYROLL = "SET_BODYROLL";
export const DELETE_BODYROLL = "DELETE_BODYROLL";
export const DELETEBYTABLEGROUP_BODYROLL = "DELETEBYTABLEGROUP_BODYROLL";
export const DELETEBYSUBTABLEGROUP_BODYROLL = "DELETEBYSUBTABLEGROUP_BODYROLL";
export const ERROR_BODYROLL = "ERROR_BODYROLL";

interface AddBodyRollAction {
  type: typeof ADD_BODYROLL;
  payload: {
    id: string;
    subtableGroupId: string;
    tableGroupId: string;
    value: CombinedRollValuesType;
  }
}

interface SetBodyRollAction {
  type: typeof SET_BODYROLL;
  payload: {
    id: string;
    value: CombinedRollValuesType;
  }
}

interface DeleteBodyRollAction {
  type: typeof DELETE_BODYROLL;
  payload: {
    id: string;
  }
}

interface DeleteByTableGroupBodyRollAction {
  type: typeof DELETEBYTABLEGROUP_BODYROLL;
  payload: {
    tableGroupId: string;
  }
}

interface DeleteBySubtableGroupBodyRollAction {
  type: typeof DELETEBYSUBTABLEGROUP_BODYROLL;
  payload: {
    subtableGroupId: string;
  }
}

interface ErrorBodyRollAction {
  type: typeof ERROR_BODYROLL;
  payload: {
    message: string;
    tableGroupId: string;
    subtableGroupId: string;
  }
  error: true;
}

export type BodyRollActionTypes = 
| AddBodyRollAction
| SetBodyRollAction
| DeleteBodyRollAction
| DeleteByTableGroupBodyRollAction
| DeleteBySubtableGroupBodyRollAction
| ErrorBodyRollAction;

