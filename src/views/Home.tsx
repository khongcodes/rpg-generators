///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          NOTES

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                        IMPORTS
// 1. React & packages
// 2. REDUX: Store types
// 3. REDUX: Selectors
// 4. REDUX: Actions
// 5. Components

import React, { Dispatch } from 'react';
import { connect } from "react-redux";

import { RootState, RootAction } from "../store";

import { selectTableGroupIds } from "../store/tableGroups/selectors";

import { addTableGroup, deleteTableGroup } from '../store/tableGroups/actions';
import { deleteByTableGroupSubtableGroup } from "../store/subtableGroups/actions";
import { deleteByTableGroupBodyRoll } from "../store/bodyRolls/actions";

import TableRollComponent from "../components/TableGroupComponent";

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          SETUP

type HomeProps = {
  addTableGroup: () => void;
  deleteTableGroup: (id: string) => void;
  tableGroupIds: string[];
}

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                             COMPONENTS & LOGIC

const Home: React.FC<HomeProps> = ({ 
  tableGroupIds, 
  addTableGroup, deleteTableGroup
}) => {

  const handleAddTableGroup = () => addTableGroup();
  const handleDeleteTableGroup = (id: string) => deleteTableGroup(id);

  return (
    <div>
      <div>
        {
          tableGroupIds.map(tableGroupId => (
            <TableRollComponent 
              key={tableGroupId}
              tableGroupId={tableGroupId}
              deleteTableGroup={handleDeleteTableGroup}
            />
          )
        )}
      </div>

      <div>
        <button onClick={() => handleAddTableGroup()}>
          Add tableGroup
        </button>
      </div>
    </div>
  )
};

const mapStateToProps = (state: RootState) => ({
  tableGroupIds: selectTableGroupIds(state)
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  addTableGroup: () => dispatch(addTableGroup()),
  deleteTableGroup: (id: string) => {
    dispatch(deleteByTableGroupBodyRoll(id));
    dispatch(deleteByTableGroupSubtableGroup(id));
    dispatch(deleteTableGroup(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);