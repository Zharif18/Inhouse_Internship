import React, {useState} from 'react'

function score(){
    const [runs, setRuns] = useState(0);
    const [wickets, setWickets] = useState(0);
    function incrementRuns(){
        if (runs==1) setRuns(runs + 1);
        if (runs==2) setRuns(runs + 2);
        if (runs==3) setRuns(runs + 3);
        if (runs==4) setRuns(runs + 4);
        if (runs==6) setRuns(runs + 6);
    }
    function incrementWickets(){
        if(wickets==10) {
            setWickets("All out");
            setRuns(0);
            setWickets(0);
            alert("All out");
        } else {
            setWickets(wickets + 1);
        }
       
    }

    return (
        <>
            <h2>Display Score</h2>
            <h2>Runs : {runs}</h2>
            <h2>Wickets : {wickets}</h2>
            <button onClick={()=>setRuns(runs+1)}>+1</button>
            <button onClick={()=>setRuns(runs+2)}>+2</button>
            <button onClick={()=>setRuns(runs+3)}>+3</button>
            <button onClick={()=>setRuns(runs+4)}>+4</button>
            <button onClick={()=>setRuns(runs+6)}>+6</button>
            <button onClick={incrementWickets}>incrementWickets</button>
        </>
    );
}
export default score