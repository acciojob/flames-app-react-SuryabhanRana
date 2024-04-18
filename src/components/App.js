import React, {useState} from "react";
import '../styles/App.css';

const relation=["Siblings","Friends","Love","Affection","Marriage","Enemy"];
function findRelation(name1,name2){
    let map={};
    let n=name1.length,m=name2.length;
    for(let i=0;i<n;i++){
        let char=name1[i];
        if(map[char]){
            map[char]++;
        }else{
            map[char]=1;
        }
    }
    let common=0;
    for(let i=0;i<m;i++){
        let char=name2[i];
        if(map[char]){
            map[char]--;
            common++;
        }
    }
    return relation[(n+m-2*common)%6];
}
const Flames=()=>{
    const [name1,setName1]=useState(" ");
    const [name2,setName2]=useState(" ");
    const [relation,setRelation]=useState(" ");

    const calculate=()=>{
        setRelation(findRelation(name1,name2));
    }
    const clear=()=>{
        setName1(" ");
        setName2(" ");
        setRelation(" ");
    }
    return(
        <div id="main">
            <input name="name1" value={name1} data-testid="input1" placeholder="Enter first name" onChange={(e)=>setName1(e.target.value)}/>
            <input  name="name2" value={name2} data-testid="input2" placeholder="Enter second name" onChange={(e)=>setName2(e.target.value)}/>
            <button onClick={calculate} data-testid="calculate_relationship">calculate Relationship Future</button>
            <button onClick={clear} data-testid="clear">Clear</button>
            {relation&&<h3 data-testid="answer">{relation}</h3>}
        </div>
    )
}
export default Flames;