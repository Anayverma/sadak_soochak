const START_LIGHTS = {
  light1: "bg-red-500",
  light3: "bg-red-500",
  light2: "bg-red-500",
  light4: "bg-red-500",
}

import { useState } from "react";

export default function Home() {
  const [lights, setLights] = useState({
    light1: "bg-red-500",
    light3: "bg-red-500",
    light2: "bg-red-500",
    light4: "bg-red-500",

  });
  function UpdateLane(lane) {
    if(lane == 1){
      setLights(prev=>{
        return {
          ...START_LIGHTS,
          light1: "bg-green-500",
        }
      })
    }
    else if(lane == 2){
      setLights(prev=>{
        return {
          ...START_LIGHTS,
          light2: "bg-green-500",
        }
      })
    }
    else if(lane == 3){
      setLights(prev=>{
        return {
          ...START_LIGHTS,
          light3: "bg-green-500",
        }
      })
    }
    else if(lane == 4){
      setLights(prev=>{
        return {
          ...START_LIGHTS,
          light4: "bg-green-500",
        }
      })
    }
  }
  return (
    <>
      <div className={`${lights.light1} light1`} onClick={()=>UpdateLane(1)}> lane 1 </div>
      <div className={`${lights.light2} light2`} onClick={()=>UpdateLane(2)}> lane 2 </div>
      <div className={`${lights.light3} light3`} onClick={()=>UpdateLane(3)}> lane 3 </div>
      <div className={`${lights.light4} light4`} onClick={()=>UpdateLane(4)}> lane 4 </div>
    </>
  );
}
