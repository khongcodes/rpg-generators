///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          NOTES

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                        IMPORTS
// 1. React & packages
// 2, REDUX: Store types
// 3. Data reading utilities
// 4. Configuration data
// 5. Components
// 6. Styles

import React, { ReactEventHandler, useState, useEffect, useRef } from 'react';
import { CSSTransition } from "react-transition-group";

import { TableGroup } from '../../store/tableGroups/types';

import { AllTableSelectValues } from "../../model/TableKeyStructuresAndFormats";

import availableRolls from "../../controlPanel/availableRolls.json";
import { QuerySiblingSubtableInExtendedFnType } from "./TableGroupComponent";
import { BookThemeType } from "../../util/BookThemeContext";

import SubtableGroupComponent from "../SubtableGroupComponent/SubtableGroupComponent";
import { CloseTGButton, ModuleTGLink, RollTGButton } from "../Buttons";

import tableStyles from "../../assets/styles/TableGroup.module.sass";


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          SETUP

type TableGroupDataType = {
  tgId: string;
  initialized: string;
  selectedTable: "none" | AllTableSelectValues;
  moduleLink: string;
}

type RenderStoreDataType = {
  tableGroupStoreData: TableGroupDataType;
}

type TableGroupContentType = {
  showIds: boolean;
  tableGroup: TableGroup;
  tableGroupData: TableGroupDataType;
  callbacks: {
    handleSelectTable: ReactEventHandler;
    handleDeleteTable: ReactEventHandler;
    handleRollTable: ReactEventHandler;
    querySiblingSubtableInExtendedGroup: QuerySiblingSubtableInExtendedFnType;
  };
  bookTheme: BookThemeType;
}

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                             COMPONENTS & LOGIC

const RenderTableGroupStoreData: React.FC<RenderStoreDataType> = ({ tableGroupStoreData }) => {
  return (
    <div>
      <p>
        id: {tableGroupStoreData.tgId}<br/>
        selectedTable: {tableGroupStoreData.selectedTable}<br/>
        initialized: {tableGroupStoreData.initialized}
      </p>
    </div>
  )
};

const AvailableOptions = () => {
  const optGroupsFromAvailableRolls = [];

  for (let i = 0; i < availableRolls.bookNames.length; i++) {
    optGroupsFromAvailableRolls.push(
      <optgroup label={availableRolls.bookNames[i]} key={i}>
        {availableRolls.options[i].map((option,index) => (
          <option value={option.selectValue} key={index}>
            {option.stringName}
          </option>
        ))}
      </optgroup>
    )
  }
  
  return ( <>{optGroupsFromAvailableRolls}</> );
}



const TableGroupContent: React.FC<TableGroupContentType> = ({
  showIds, tableGroup,
  tableGroupData, callbacks,
  bookTheme
}) => {
  const tableSelected = tableGroupData.selectedTable !== "none";
  const {
    handleDeleteTable, handleSelectTable, handleRollTable,
    querySiblingSubtableInExtendedGroup
  } = callbacks;

  const transitionalNodeT = useRef(null);
  const [transitionTG, setTransitionTG] = useState<boolean>(false);

  useEffect(() => { setTransitionTG(true); }, [tableGroup.id]);

  const transitionDelete = (event: React.SyntheticEvent<Element, Event>) => {
    event.preventDefault();
    setTransitionTG(false);
    setTimeout(() => {handleDeleteTable(event)}, 300);
  };

  return (
    <CSSTransition
      in={transitionTG}
      classNames="tgHeight"
      timeout={300}
      key={tableGroup.id}
      nodeRef={transitionalNodeT}
    >
    <div className={tableStyles.tableRoot} ref={transitionalNodeT}>
      { showIds ? <RenderTableGroupStoreData tableGroupStoreData={tableGroupData} /> : <></> }
      <form 
        className={tableStyles.tableGroupControl}
        onSubmit={handleRollTable}
      >
        <CloseTGButton deleteObjectCallback={transitionDelete} />

        <select value={tableGroupData.selectedTable} onChange={handleSelectTable}>
          <option value="none">Select a table</option>
          <AvailableOptions />
        </select>

        <ModuleTGLink
          enabled={tableSelected}
          moduleLink={tableGroupData.moduleLink}
        />
        <RollTGButton enabled={tableSelected} />
      </form>


      <div className={tableStyles.subtableCollectionContainer}>
        {tableGroup.subtableCollection.map(subtableId => (
          // <CSSTransition
          //   in={transition}
          //   classNames="bodyrollTransition"
          //   timeout={300}
          //   key={subtableId}
          //   // nodeRef={transitionalNode}
          // >
          <SubtableGroupComponent
            showIds={showIds}
            tableGroupId={tableGroupData.tgId}
            subtableGroupId={subtableId}
            querySiblingSubtableInExtendedGroup = {querySiblingSubtableInExtendedGroup}
            bookTheme={bookTheme}
            key={subtableId}
          />
          // </CSSTransition>
        ))}
      </div>


    </div>
    </CSSTransition>
  )
};

export default TableGroupContent;