///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                       PARTIALS

type RangeModifier = {
  range: string;
}
type OptionalModifier = {
  detailPrefix?: string;
  rollTable?: string[];
}


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                             DEFINE TABLE TYPES

export type SimpleRollValue = OptionalModifier & {
  value: string;
};

export type DetailRollValue = OptionalModifier & {
  name: string;
  detail: string;
};

// created when displaySpec.format == "mDetail ref"
export type MultiDetailRollValue = OptionalModifier & {
  name: string;
  detail: string[];
}

export type RangeSimpleRollValue = RangeModifier & SimpleRollValue;
export type RangeDetailRollValue = RangeModifier & DetailRollValue;

export type NestedNamedRangeRollValue = RangeModifier & {
  categoryName: string;
  values: RangeSimpleRollValue[];
}

export type CombinedRollValuesType = 
| SimpleRollValue
| DetailRollValue
| MultiDetailRollValue
| RangeSimpleRollValue
| RangeDetailRollValue
| NestedNamedRangeRollValue;

const rollTypes = <const> [
  "one-roll string table",
  "one-roll detail table",
  "one-roll simple range-table",
  "two-roll range-table",
  "coordinate-roll detail norange-range-table",
  "combined string",
  "lookup"
]

type RollTypeBase = {
  interface: string;
  rollTable?: string[];
}

type OnerollStringTableRolltype = RollTypeBase & {
  type: "one-roll string table";
  values: string[];
}

type OnerollDetailTableRolltype = RollTypeBase & {
  type: "one-roll detail table";
  values: DetailRollValue[];
}

type OnerollSimpleRangetableRolltype = RollTypeBase & {
  type: "one-roll simple range-table";
  values: RangeSimpleRollValue[];
}

type TworollRangetableRolltype = RollTypeBase & {
  type: "two-roll range-table";
  values: NestedNamedRangeRollValue[];
}

type CoordinaterollDetailNorangerangetableRolltype = RollTypeBase & {
  type: "coordinate-roll detail norange-range-table";
  values: RangeDetailRollValue[][];
}

type CombinedStringRolltype = RollTypeBase & {
  type: "combined string";
  values: string[][];
}

type Lookuptype = RollTypeBase & {
  type: "lookup";
  values: object;
}

export type CombinedBodyRollType =
| OnerollStringTableRolltype
| OnerollDetailTableRolltype
| OnerollSimpleRangetableRolltype
| TworollRangetableRolltype
| CoordinaterollDetailNorangerangetableRolltype
| CombinedStringRolltype
| Lookuptype;



///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                               DATA INPUT TYPES

export type LancerInputTypes = {
  iterativeWorld: {
    main: {
      worldType: OnerollStringTableRolltype;
      definingNaturalFeature: OnerollDetailTableRolltype;
      definingAnthropocentricFeature: OnerollDetailTableRolltype;
      environments: OnerollDetailTableRolltype;
    }
  }
}


export type MothershipInputTypes = {
  trinketsPatches: {
    main: {
      d100Trinkets: OnerollStringTableRolltype;
      d100Patches: OnerollStringTableRolltype;
    };
  };
  spaceStationCorespace: {
    main: {
      name: CombinedStringRolltype;
      coreStation: OnerollStringTableRolltype;
      orbitingCelestialBody: OnerollStringTableRolltype;
      coreLeader: OnerollStringTableRolltype;
      controllingFaction: OnerollStringTableRolltype;
      crisis: OnerollDetailTableRolltype;
      goods: OnerollStringTableRolltype;
      resource: OnerollStringTableRolltype;
      commonIssue: OnerollDetailTableRolltype;
      spaceStationStructure: OnerollDetailTableRolltype;
      noteworthyEstablishments: TworollRangetableRolltype;
    }
  };
  spaceStationRimspace: {
    main: {
      rimLandmark: OnerollStringTableRolltype;
      rimStation: OnerollStringTableRolltype;
      callSign: OnerollStringTableRolltype;
      controllingFaction: OnerollStringTableRolltype;
      rivallingFaction: OnerollStringTableRolltype;
      rivalLeader: OnerollStringTableRolltype;
      crisis: OnerollDetailTableRolltype;
      goods: OnerollStringTableRolltype;
      resource: OnerollStringTableRolltype;
      commonIssue: OnerollDetailTableRolltype;
      spaceStationStructure: OnerollDetailTableRolltype;
      noteworthyEstablishments: TworollRangetableRolltype;
    }
  };
  derelictShip: {
    main: {
      shipClass: OnerollSimpleRangetableRolltype;
      shipName: CombinedStringRolltype;
      shipLifeSupportStatus: OnerollSimpleRangetableRolltype;
      shipSurvivorStatus: OnerollSimpleRangetableRolltype;
      shipEngineStatus: OnerollSimpleRangetableRolltype;
      shipSalvage1: OnerollSimpleRangetableRolltype;
      shipSalvage2: OnerollSimpleRangetableRolltype;
      causeofRuination: OnerollSimpleRangetableRolltype;
      weird: OnerollSimpleRangetableRolltype;
      jumpDriveMalfunction: OnerollSimpleRangetableRolltype;
    };
    extended: {
      shipModules: CoordinaterollDetailNorangerangetableRolltype;
      shipMapByClass: Lookuptype;
      weaponsSupplyCache: OnerollSimpleRangetableRolltype;
      cargoType: OnerollSimpleRangetableRolltype;
    };
  };
}

export type CombinedInputDataType = 
| LancerInputTypes
| MothershipInputTypes;