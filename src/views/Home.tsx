// NOTES
///////////////////////////////////////////////////////////////////
// Store state in session from App component


// IMPORTS
///////////////////////////////////////////////////////////////////
// 1. React

import React, { useState } from 'react';

import { Roll } from "../model/Roll";

import RollComponent from "../components/RollComponent";
import { AddRollButton } from "../components/Buttons";


// SETUP
///////////////////////////////////////////////////////////////////

type HomeProps = {
  rolls: Roll[] | [];
  addRoll: (rollArray: Roll[] | []) => void;
}

// COMPONENTS & LOGIC
///////////////////////////////////////////////////////////////////

const Home: React.FC<HomeProps> = ({ rolls, addRoll }) => {
  console.log(rolls.length)

  return (
    <div>
      <div>
        {
          rolls.length === 0 ? <></> : 
            (rolls as Roll[]).map(roll => 
              <RollComponent key={roll.id} data={roll}/>
            ) 
        }
      </div>

      <div>
        <button onClick={() => addRoll(rolls)}>Add Roll</button>
      </div>
    </div>
  )
}

// This expression is not callable.
//   Each member of the union type '(<U>(callbackfn: (value: Roll, index: number, array: Roll[]) => U, thisArg?: any) => U[]) | (<U>(callbackfn: (value: never, index: number, array: never[]) => U, thisArg?: any) => U[])' has signatures, but none of those signatures are compatible with each other.

export default Home;