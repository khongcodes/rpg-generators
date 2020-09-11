// actions pass payload from user response to reducers

import { AllTableNames } from "../../model/DataOut";
import { TableGroupActionTypes,
  ADD_TABLEGROUP, SETTABLE_TABLEGROUP, DELETE_TABLEGROUP, ROLL_TABLEGROUP
} from "./types";


export function addTableGroup(): TableGroupActionTypes {
  return {
    type: ADD_TABLEGROUP,
    payload: null
  }
}

export function setTableGroup(selectValue: AllTableNames): TableGroupActionTypes {
  return {
    type: SETTABLE_TABLEGROUP,
    payload: selectValue
  }
}

export function deleteTableGroup(id: string): TableGroupActionTypes {
  return {
    type: DELETE_TABLEGROUP,
    payload: id
  }
}

export function rollTableGroup(id: string) {
  return {
    type: ROLL_TABLEGROUP,
    payload: id
  }
}