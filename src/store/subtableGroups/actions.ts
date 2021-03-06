///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                        IMPORTS
// 1. Store

import {
  ClearAndRepopulateSubtablesDispatchInput, SubtableGroupActionTypes,
  CLEARANDREPOPULATETABLE_SUBTABLEGROUP,
  DELETEBYTABLEGROUP_SUBTABLEGROUP,
  ADDBODYROLLIDS_SUBTABLEGROUP,
  MARKINITIALIZED_SUBTABLEGROUP,
  DELETEBODYROLLID_SUBTABLEGROUP,
  DELETEBODYROLLCOLLECTION_SUBTABLEGROUP
} from "./types";


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                ACTION CREATORS

export function clearAndRepopulateTableSubtableGroup(
  tableGroupId: string,
  subtablesData: ClearAndRepopulateSubtablesDispatchInput[]
): SubtableGroupActionTypes {
  
  const addedSubtablesObj = subtablesData.reduce((container: {[key: string]: ClearAndRepopulateSubtablesDispatchInput}, subtableInfo) => {
    container[subtableInfo.id] = Object.assign({bodyRollCollection: [], tableGroupId: tableGroupId}, subtableInfo);
    return container;
  }, {});
  const subtables = addedSubtablesObj;

  return {
    type: CLEARANDREPOPULATETABLE_SUBTABLEGROUP,
    payload: { tableGroupId, subtables }
  }
}

export function deleteByTableGroupSubtableGroup(tableGroupId: string): SubtableGroupActionTypes {
  return {
    type: DELETEBYTABLEGROUP_SUBTABLEGROUP,
    payload: { tableGroupId }
  }
}

export function addBodyRollIdsSubtableGroup(subtableGroupId: string, bodyRollIds: string[]): SubtableGroupActionTypes {
  return {
    type: ADDBODYROLLIDS_SUBTABLEGROUP,
    payload: { subtableGroupId, bodyRollIds }
  };
}

export function markInitializedSubtableGroup(subtableGroupId: string): SubtableGroupActionTypes {
  return {
    type: MARKINITIALIZED_SUBTABLEGROUP,
    payload: { subtableGroupId }
  }
}

export function deleteBodyRollIdSubtableGroup(subtableGroupId: string, bodyRollId: string): SubtableGroupActionTypes {
  return {
    type: DELETEBODYROLLID_SUBTABLEGROUP,
    payload: { subtableGroupId, bodyRollId }
  }
}

export function deleteBodyRollCollectionSubtableGroup(subtableGroupId: string): SubtableGroupActionTypes {
  return {
    type: DELETEBODYROLLCOLLECTION_SUBTABLEGROUP,
    payload: { subtableGroupId }
  }
}