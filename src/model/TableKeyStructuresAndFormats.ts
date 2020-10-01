///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                     DATA SETUP

export const bookNames = <const> [
  "lancer", 
  "mothership",
  "uvg"
];

export const tableNamesByBooks = <const> {
  lancer: {
    iterativeWorld: [
      "worldType",
      "definingNaturalFeature",
      "definingAnthropocentricFeature",
      "environments" 
    ],
    spaceStation: [
      "stationSeed",
      "stationNameSeed",
      "districtNameSeed",
      "purposes",
      "curiosities",
      "problems"
    ],
    spaceStationNPC: [
      "descriptor",
      "occupationPrimary",
      "occupationAlternateClandestine",
      "quirk",
      "motivation"
    ],
    pirateBand: [
      "pirateBandName",
      "hustles",
      "mainAsset"
    ],
    enterprises: [
      "holdings",
      "representative",
      "strength"
    ]
  },
  mothership: {
    trinketsPatches: [ "d100Trinkets", "d100Patches" ],
    spaceStationCorespace: [
      "name",
      "coreStation",
      "orbitingCelestialBody",
      "coreLeader",
      "controllingFaction",
      "crisis","goods", "resource", "commonIssue", "spaceStationStructure", "noteworthyEstablishments"
    ],
    spaceStationRimspace: [
      "rimLandmark",
      "rimStation",
      "callSign",
      "controllingFaction",
      "rivallingFaction",
      "rivalLeader",
      "crisis", "goods", "resource", "commonIssue", "spaceStationStructure", "noteworthyEstablishments"
    ],
    derelictShip: [
      "shipClass",
      "shipName",
      "shipLifeSupportStatus",
      "shipSurvivorStatus",
      "shipEngineStatus",
      "shipSalvage1",
      "shipSalvage2",
      "causeOfRuination",
      "weird",
      "jumpDriveMalfunction",
      "shipModules"
    ]
  },
  uvg: {
    quickHeroChar: [
      "who",
      "why",
      "startingWith"
    ],
    otherVoyagers: [
      "role",
      "name",
      "story",
      "color"
    ],
    biomagicalCorruption: [
      "exposure",
      "deleteriousMutations",
      "cosmeticMutations",
      "beneficialMutations"
    ],
    histories: [
      "forgottenTimes",
      "dimlyRememberedStrife",
      "fabledStories",
      "oralHistoriesOfRevolution"
    ],
    discovery: [
      "distance",
      "shape",
      "appearance",
      "originalFunction",
      "creator",
      "discoverer",
      "currentFunction"
    ],
    historicPeriodStyle: [
      "material",
      "specialMaterial",
      "adjective",
      "movement",
      "culture",
      "period"
    ]
  }
}

export const tableSelectValues = <const> [
  "lancer-iterativeWorld",
  "lancer-spaceStation",
  "lancer-spaceStationNPC",
  "lancer-pirateBand",
  "lancer-enterprises",
  "mothership-trinketsPatches",
  "mothership-spaceStationCorespace",
  "mothership-spaceStationRimspace",
  "mothership-derelictShip",
  "uvg-quickHeroChar",
  "uvg-otherVoyagers",
  "uvg-biomagicalCorruption",
  "uvg-histories",
  "uvg-discovery",
  "uvg-historicPeriodStyle"
]

// stringName format - 
// {Core game system} / {Module} - {Name of Table}
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
    selectValue: "lancer-spaceStation",
    stringName: "LANCER / The Long Rim - Space Station"
  },
  {
    selectValue: "lancer-spaceStationNPC",
    stringName: "LANCER / The Long Rim - Space Station NPC"
  },
  {
    selectValue: "lancer-pirateBand",
    stringName: "LANCER / The Long Rim - Pirate Band"
  },
  {
    selectValue: "lancer-enterprises",
    stringName: "LANCER / The Long Rim - Rim Enterprise"
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
  },
  {
    selectValue: "uvg-quickHeroChar",
    stringName: "UVG - Quick Hero Character"
  },
  {
    selectValue: "uvg-otherVoyagers",
    stringName: "UVG - Other Voyagers"
  },
  {
    selectValue: "uvg-biomagicalCorruption",
    stringName: "UVG - Biomagical Corruption"
  },
  {
    selectValue: "uvg-histories",
    stringName: "UVG - Histories"
  },
  {
    selectValue: "uvg-discovery",
    stringName: "UVG - Discovery"
  },
  {
    selectValue: "uvg-historicPeriodStyle",
    stringName: "UVG - Historic Period/Style"
  }
];

const bodyRollFormats = <const> [
  "simple",
  "detail",
  "mDetail ref",
  "detail check-ref",
  "reference"
];


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                              UTILITY FUNCTIONS

export const getKeysFromSelectValue = (selectedTable: AllTableSelectValues) => {
  const bookKey = selectedTable.split("-")[0] as AllBookNames;
  const tableKey = selectedTable.split("-")[1] as AllTableNames;
  return { bookKey, tableKey };
}


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                               TYPE DEFINITIONS

export type AllTableSelectValues = typeof tableSelectValues[number];
export type AllTableIdentObjs = typeof tableIdentObjs[number];
export type AllBookNames = typeof bookNames[number];
export type AllTableNames = keyof typeof tableNamesByBooks[AllBookNames];
export type AllBodyRollNames = typeof tableNamesByBooks[AllBookNames][AllTableNames]

export type AllBodyRollFormats = typeof bodyRollFormats[number];

type SubtableDisplaySpecBaseType = {
  name: string;
  format: "simple" | "detail";
  initialRollCount?: number | string;
  // reference?: string;
};

export type SubtableDisplaySpecMDetailFormat = {
  name: string;
  format: "mDetail ref";
  initialRollCount?: number | string;
  reference: string;
}

export type SubtableDisplaySpecReferenceCountFormat = {
  name: string;
  format: "simple" | "detail";
  initialRollCount: "reference";
  reference: string;
}

export type SubtableDisplaySpecType =
| SubtableDisplaySpecBaseType
| SubtableDisplaySpecMDetailFormat
| SubtableDisplaySpecReferenceCountFormat;


export type TableSpecType = {
  referenceType: "simple"|"reference";
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
type UvgTableNames = keyof typeof tableNamesByBooks.uvg;
type LancerOutputSpecType = { [key in LancerTableNames]: TableSpecType };
type MothershipOutputSpecType = { [key in MothershipTableNames]: TableSpecType };
type UvgOutputSpecType = { [key in UvgTableNames]: TableSpecType };


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                   OUTPUT SPECS

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
        },
        definingNaturalFeature: {
          name: "Defining Natural Feature",
          format: "detail",
        },
        definingAnthropocentricFeature: {
          name: "Defining Anthropocentric Feature",
          format: "detail",
        },
        environments: {
          name: "Environmental Factors",
          format: "detail",
        }
      }
    }
  },
  spaceStation: {
    referenceType: "simple",
    tableName: {
      selectValue: "lancer-spaceStation",
      stringName: "LANCER / The Long Rim - Space Station"
    },
    body: {
      main: {
        stationSeed: {
          name: "Station Seed",
          format: "simple"
        },
        stationNameSeed: {
          name: "Station Name Seed",
          format: "simple"
        },
        districtNameSeed: {
          name: "District Name Seed",
          format: "simple"
        },
        purposes: {
          name: "Purposes",
          format: "simple",
          initialRollCount: 2
        },
        curiosities: {
          name: "Curiosities",
          format: "simple",
          initialRollCount: 2
        },
        problems: {
          name: "Problems",
          format: "simple",
          initialRollCount: 2
        }
      }
    }
  },
  spaceStationNPC: {
    referenceType: "simple",
    tableName: {
      selectValue: "lancer-spaceStationNPC",
      stringName: "LANCER / The Long Rim - Space Station NPC"
    },
    body: {
      main: {
        descriptor: {
          name: "Descriptors",
          format: "simple",
          initialRollCount: 2
        },
        occupationPrimary: {
          name: "Primary Occupation",
          format: "simple"
        },
        occupationAlternateClandestine: {
          name: "Alternate/Clandestine Occupation",
          format: "simple"
        },
        quirk: {
          name: "Quirk",
          format: "simple"
        },
        motivation: {
          name: "Motivation",
          format: "simple"
        }
      }
    }
  },
  pirateBand: {
    referenceType: "simple",
    tableName: {
      selectValue: "lancer-pirateBand",
      stringName: "LANCER / The Long Rim - Pirate Band"
    },
    body: {
      main: {
        pirateBandName: {
          name: "Pirate Band Name",
          format: "simple"
        },
        hustles: {
          name: "Pirate Hustles",
          format: "detail",
          initialRollCount: 2
        },
        mainAsset: {
          name: "Main Asset",
          format: "simple"
        }
      }
    }
  },
  enterprises: {
    referenceType: "simple",
    tableName: {
      selectValue: "lancer-enterprises",
      stringName: "LANCER / The Long Rim - Rim Enterprise"
    },
    body: {
      main: {
        holdings: {
          name: "Holdings",
          format: "simple"
        },
        representative: {
          name: "Representative(s)",
          format: "simple"
        },
        strength: {
          name: "Strength",
          format: "simple"
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
        },
        d100Patches: {
          name: "D100 Patches",
          format: "simple",
        }
      }
    }
  },

  // needs special handling for the dual nature of this data
  spaceStationCorespace: {
    referenceType: "simple",
    tableName: {
      selectValue: "mothership-spaceStationCorespace",
      stringName: "Mothership RPG / Pound of Flesh - Space Station (Corespace)"
    },
    body: {
      main: {
        name: {
          name: "Name",
          format: "simple",
        },
        coreStation: {
          name: "Station Type",
          format: "simple",
        },
        orbitingCelestialBody: {
          name: "Orbiting Celestial Body",
          format: "simple",
        },
        coreLeader: {
          name: "Core Leader",
          format: "simple",
        },
        controllingFaction: {
          name: "Controlling Faction",
          format: "simple",
        },
        crisis: {
          name: "Crisis",
          format: "detail",
        },
        goods: {
          name: "Available Goods",
          format: "simple",
        },
        resource: {
          name: "Scarce Resource",
          format: "simple",
        },
        commonIssue: {
          name: "Common Issue",
          format: "detail",
        },
        spaceStationStructure: {
          name: "Structure",
          format: "detail",
        },
        noteworthyEstablishments: {
          name: "Noteworthy Establishments",
          format: "detail",
          initialRollCount: 4
        }
      }
    }
  },
  spaceStationRimspace: {
    referenceType: "simple",
    tableName: {
      selectValue: "mothership-spaceStationRimspace",
      stringName: "Mothership RPG / Pound of Flesh - Space Station (Rimspace)"
    },
    body: {
      main: {
        rimLandmark: {
          name: "Landmark on the Rim",
          format: "simple",
        },
        rimStation: {
          name: "Station Type",
          format: "simple",
        },
        callSign: {
          name: "Callsign",
          format: "simple",
        },
        controllingFaction: {
          name: "Controlling Faction",
          format: "simple",
        },
        rivallingFaction: {
          name: "Rivalling Faction",
          format: "simple",
        },
        rivalLeader: {
          name: "Rival Faction's Leader",
          format: "simple",
        },
        crisis: {
          name: "Crisis",
          format: "detail",
        },
        goods: {
          name: "Available Goods",
          format: "simple",
        },
        resource: {
          name: "Scarce Resource",
          format: "simple",
        },
        commonIssue: {
          name: "Common Issue",
          format: "detail",
        },
        spaceStationStructure: {
          name: "Structure",
          format: "detail",
        },
        noteworthyEstablishments: {
          name: "Noteworthy Establishments",
          format: "detail",
          initialRollCount: 4
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
          format: "mDetail ref",
          reference: "shipMapByClass"
        },
        shipName: {
          name: "Ship Name",
          format: "simple"
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
        jumpDriveMalfunction: {
          name: "Jump Drive Malfunction",
          format: "simple"
        },
        shipModules: {
          name: "Ship Modules",
          format: "detail check-ref",
          initialRollCount: 4,
        }
      },
      // COMMENTED OUT because these subtables are not displayed
      // extended: {
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
};

const uvgOutputSpecs: UvgOutputSpecType = {
  quickHeroChar: {
    referenceType: "simple",
    tableName: {
      selectValue: "uvg-quickHeroChar",
      stringName: "UVG - Quick Hero Character"
    },
    body: {
      main: {
        who: {
          name: "Who",
          format: "simple"
        },
        why: {
          name: "Why",
          format: "simple"
        },
        startingWith: {
          name: "Starting With",
          format: "simple"
        }
      }
    }
  },
  otherVoyagers: {
    referenceType: "simple",
    tableName: {
      selectValue: "uvg-otherVoyagers",
      stringName: "UVG - Other Voyagers"
    },
    body: {
      main: {
        role: {
          name: "Role",
          format: "simple"
        },
        name: {
          name: "Name",
          format: "simple"
        },
        story: {
          name: "Story",
          format: "simple"
        },
        color: {
          name: "Color",
          format: "simple"
        }
      }
    }
  },
  biomagicalCorruption: {
    referenceType: "simple",
    tableName: {
      selectValue: "uvg-biomagicalCorruption",
      stringName: "UVG - Biomagical Corruption"
    },
    body: {
      main: {
        exposure: {
          name: "Exposure",
          format: "detail"
        },
        deleteriousMutations: {
          name: "Deleterious Mutations",
          format: "simple",
          initialRollCount: 0
        },
        cosmeticMutations: {
          name: "Cosmetic Mutations",
          format: "simple",
          initialRollCount: 0
        },
        beneficialMutations: {
          name: "Beneficial Mutations",
          format: "simple",
          initialRollCount: 0
        },
      }
    }
  },
  histories: {
    referenceType: "simple",
    tableName: {
      selectValue: "uvg-histories",
      stringName: "UVG - Histories"
    },
    body: {
      main: {
        forgottenTimes: {
          name: "Forgotten Times",
          format: "simple"
        },
        dimlyRememberedStrife: {
          name: "Dimly Remembered Strife",
          format: "simple"
        },
        fabledStories: {
          name: "Fabled Stories",
          format: "simple"
        },
        oralHistoriesOfRevolution: {
          name: "Oral Histories of the Revolution",
          format: "simple"
        }
      }
    }
  },
  discovery: {
    referenceType: "simple",
    tableName: {
      selectValue: "uvg-discovery",
      stringName: "UVG - Discovery"
    },
    body: {
      main: {
        distance: {
          name: "Distance",
          format: "simple"
        },
        shape: {
          name: "Shape",
          format: "simple"
        },
        appearance: {
          name: "Appearance",
          format: "simple"
        },
        originalFunction: {
          name: "Original Function",
          format: "simple"
        },
        creator: {
          name: "Creator",
          format: "simple"
        },
        discoverer: {
          name: "Discoverer",
          format: "simple"
        },
        currentFunction: {
          name: "Current Function",
          format: "simple"
        }
      }
    }
  },
  historicPeriodStyle: {
    referenceType: "simple",
    tableName: {
      selectValue: "uvg-historicPeriodStyle",
      stringName: "UVG - Historic Period/Style"
    },
    body: {
      main: {
        material: {
          name: "Material",
          format: "simple"
        },
        specialMaterial: {
          name: "Special Material",
          format: "simple"
        },
        adjective: {
          name: "Adjective",
          format: "simple"
        },
        movement: {
          name: "Movement",
          format: "simple"
        },
        culture: {
          name: "Culture",
          format: "simple"
        },
        period: {
          name: "Period",
          format: "simple"
        }
      }
    }
  }
};


type CombinedOutputSpecType = 
| LancerOutputSpecType
| MothershipOutputSpecType
| UvgOutputSpecType;

export const allTablesDisplaySpecsByBook: {
  [key in AllBookNames]: CombinedOutputSpecType
} = {
  lancer: lancerOutputSpecs,
  mothership: mothershipOutputSpecs,
  uvg: uvgOutputSpecs
}