/////////////////////////////////////////////////////////////////////////////////
////////                                                               DATA SETUP

export const bookNames = <const> [
  "lancer", 
  "mothership"
];

export const tableNamesByBooks = <const> {
  lancer: {
    iterativeWorld: [ "worldType", "definingNaturalFeature", "definingAnthropocentricFeature", "environments" ]
  },
  mothership: {
    trinketsPatches: [ "d100Trinkets", "d100Patches" ],
    spaceStationCorespace: [
      "name", "coreStation", "orbitingCelestialBody", "coreLeader", "controllingFaction",
      "crisis", "goods", "resource", "commonIssue", "spaceStationStructure", "noteworthyEstablishments"
    ],
    spaceStationRimspace: [
      "rimLandmark", "rimStation", "callSign", "controllingFaction", "rivallingFaction", "rivalLeader",
      "crisis", "goods", "resource", "commonIssue", "spaceStationStructure", "noteworthyEstablishments"
    ],
    derelictShip: [ "shipClass", "shipLifeSupportStatus", "shipSurvivorStatus", "shipEngineStatus", "shipSalvage1", "shipSalvage2", "causeOfRuination", "weird", "shipName", "shipModules", "jumpDriveMalfunction" ]
  }
}

// export const tableNames = bookNames.map(a => Object.keys(tableNamesByBooks[a])).flat() as const;
// tableNames as const
export const tableSelectValues = <const> [
  "lancer-iterativeWorld",
  "mothership-trinketsPatches",
  "mothership-spaceStationCorespace",
  "mothership-spaceStationRimspace",
  "mothership-derelictShip"
]

export const tableIdentObjs = <const> [
  {
    selectValue: "initial",
    stringName: "Select a table"
  },
  {
    selectValue: "lancer-iterativeWorld",
    stringName: "LANCER - Iterative World Generation"
  },
  {
    selectValue: "mothership-trinketsPatches",
    stringName: "Mothership RPG - Trinkets & Patches"
  },
  {
    selectValue: "mothership-spaceStationCorespace",
    stringName: "Mothership RPG / Pound of Flesh - Space Station (Corespace)"
  },
  {
    selectValue: "mothership-spaceStationRimspace",
    stringName: "Mothership RPG / Pound of Flesh - Space Station (Rimspace)"
  },
  {
    selectValue: "mothership-derelictShip",
    stringName: "Mothership RPG / Dead Planet - Derelict Ship"
  }
];

const bodyRollFormats = <const> [
  "simple",
  "detail",
  // "... ref-propName",
  "reference"
];


/////////////////////////////////////////////////////////////////////////////////
////////                                                            TYPE DEFINING

export type AllTableSelectValues = typeof tableSelectValues[number];
export type AllTableIdentObjs = typeof tableIdentObjs[number];
export type AllBookNames = typeof bookNames[number];
export type AllTableNames = keyof typeof tableNamesByBooks[AllBookNames];
export type AllBodyRollNames = typeof tableNamesByBooks[AllBookNames][AllTableNames]

export type AllBodyRollFormats = typeof bodyRollFormats[number];

export type SubtableDisplaySpecType = {
  name: string;
  format: AllBodyRollFormats;
  initialRollCount: number | string;
};

export const getKeysFromSelectValue = (selectedTable: AllTableSelectValues) => {
  const bookKey = selectedTable.split("-")[0] as AllBookNames;
  const tableKey = selectedTable.split("-")[1] as AllTableNames;
  return { bookKey, tableKey };
}

export type TableSpecType = {
  referenceType: "simple"|"shared"|"reference";
  tableName: AllTableIdentObjs;
  body: {
    main: {
      [key in AllBodyRollNames]: SubtableDisplaySpecType;
    };
    common?: {
      [key in AllBodyRollNames]: SubtableDisplaySpecType;
    };
  }
}

type LancerTableNames = keyof typeof tableNamesByBooks.lancer;
type MothershipTableNames = keyof typeof tableNamesByBooks.mothership;
type LancerOutputSpecType = { [key in LancerTableNames]: TableSpecType };
type MothershipOutputSpecType = { [key in MothershipTableNames]: TableSpecType };

const lancerOutputSpecs: LancerOutputSpecType = {
  iterativeWorld: {
    referenceType: "simple",
    tableName: {
      selectValue: "lancer-iterativeWorld",
      stringName: "LANCER - Iterative World Generation",
    },
    body: {
      main: {
        worldType: {
          name: "World Type",
          format: "simple",
          initialRollCount: 1
        },
        definingNaturalFeature: {
          name: "Defining Natural Feature",
          format: "detail",
          initialRollCount: 1
        },
        definingAnthropocentricFeature: {
          name: "Defining Anthropocentric Feature",
          format: "detail",
          initialRollCount: 1
        },
        environments: {
          name: "Environmental Factors",
          format: "detail",
          initialRollCount: 1
        }
      }
    }
  }
}


const mothershipOutputSpecs: MothershipOutputSpecType = {
  trinketsPatches: {
    referenceType: "simple",
    tableName: {
      selectValue: "mothership-trinketsPatches",
      stringName: "Mothership RPG - Trinkets & Patches"
    },
    body: {
      main: {
        d100Trinkets: {
          name: "D100 Trinkets",
          format: "simple",
          initialRollCount: 1
        },
        d100Patches: {
          name: "D100 Patches",
          format: "simple",
          initialRollCount: 1
        }
      }
    }
  },

  // needs special handling for the dual nature of this data
  spaceStationCorespace: {
    referenceType: "shared",
    tableName: {
      selectValue: "mothership-spaceStationCorespace",
      stringName: "Mothership RPG / Pound of Flesh - Space Station (Corespace)"
    },
    body: {
      main: {
        name: {
          name: "Name",
          format: "simple"
        },
        coreStation: {
          name: "Station Type",
          format: "simple"
        },
        orbitingCelestialBody: {
          name: "Orbiting Celestial Body",
          format: "simple"
        },
        coreLeader: {
          name: "Core Leader",
          format: "simple"
        },
        controllingFaction: {
          name: "Controlling Faction",
          format: "simple"
        }
      },
      common: {
        crisis: {
          name: "Crisis",
          format: "detail"
        },
        goods: {
          name: "Available Goods",
          format: "simple"
        },
        resource: {
          name: "Scarce Resource",
          format: "simple"
        },
        commonIssue: {
          name: "Common Issue",
          format: "detail"
        },
        spaceStationStructure: {
          name: "Structure",
          format: "detail"
        },
        noteworthyEstablishments: {
          name: "Noteworthy Establishments",
          format: "detail"
        }
      }
    }
  },
  spaceStationRimspace: {
    referenceType: "shared",
    tableName: {
      selectValue: "mothership-spaceStationRimspace",
      stringName: "Mothership RPG / Pound of Flesh - Space Station (Rimspace)"
    },
    body: {
      main: {
        rimLandmark: {
          name: "Landmark on the Rim",
          format: "simple"
        },
        rimStation: {
          name: "Station Type",
          format: "simple"
        },
        callSign: {
          name: "Callsign",
          format: "simple"
        },
        controllingFaction: {
          name: "Controlling Faction",
          format: "simple"
        },
        rivallingFaction: {
          name: "Rivalling Faction",
          format: "simple"
        },
        rivalLeader: {
          name: "Rival Faction's Leader",
          format: "simple"
        }
      },
      common: {
        crisis: {
          name: "Crisis",
          format: "detail"
        },
        goods: {
          name: "Available Goods",
          format: "simple"
        },
        resource: {
          name: "Scarce Resource",
          format: "simple"
        },
        commonIssue: {
          name: "Common Issue",
          format: "detail"
        },
        spaceStationStructure: {
          name: "Structure",
          format: "detail"
        },
        noteworthyEstablishments: {
          name: "Noteworthy Establishments",
          format: "detail"
        }
      }
    }
  },
  derelictShip: {
    referenceType: "reference",
    tableName: {
      selectValue: "mothership-derelictShip",
      stringName: "Mothership RPG / Dead Planet - Derelict Ship"
    },
    body: {
      main: {
        shipClass: {
          name: "Ship Class",
          format: "detail ref-shipMapByClass"
        },
        shipLifeSupportStatus: {
          name: "Life Support Status",
          format: "simple"
        },
        shipSurvivorStatus: {
          name: "Survivor Status",
          format: "simple"
        },
        shipEngineStatus: {
          name: "Engine Status",
          format: "simple"
        },
        shipSalvage1: {
          name: "Salvage A",
          format: "simple"
        },
        shipSalvage2: {
          name: "Salvage B",
          format: "simple"
        },
        causeOfRuination: {
          name: "Cause of Ruination",
          format: "simple"
        },
        weird: {
          name: "Something Weird",
          format: "simple"
        },
        shipName: {
          name: "Ship Name",
          format: "simple"
        },
        shipModules: {
          name: "Ship Modules",
          format: "detail"
        },
        jumpDriveMalfunction: {
          name: "Jump Drive Malfunction",
          format: "simple"
        }
      },
      // extra: {
      //   shipMapByClass: {
      //     name: "Ship Map",
      //     format: "reference"
      //   },
      //   weaponsSupplyCache: {
      //     name: "Weapons Supply Cache",
      //     format: "reference"
      //   },
      //   cargoType: {
      //     name: "Cargo Type",
      //     format: "reference"
      //   }
      // }
    }
  }
}


type CombinedOutputSpecType = 
| LancerOutputSpecType
| MothershipOutputSpecType

export const allTablesDisplaySpecsByBook: {
  [key in AllBookNames]: CombinedOutputSpecType
} = {
  lancer: lancerOutputSpecs,
  mothership: mothershipOutputSpecs
}