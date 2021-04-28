import './App.css';
import {pointRotate} from "geometric";


function App() {

//  function getCircles(cx, cy, numc, largestR, diff){
//    let circles = [];
//
//   let currR = largestR;
//    for (let i=0; i < numc; i++){
//      circles.push(<circle class="circleClass" cx={cx} cy={cy} r={largestR} stroke="black" fill-opacity="0" />);
//      currR = currR - diff;
//    };
//
//    return circles;
//  };

//Hardcoding values now just to test
  let x1Start="500";
  let y1Start="140"
  let x2Start="500";
  let y2Start="460"
  let lineTwo1=pointRotate([x1Start, y1Start], 72, [500,500] )
  let lineTwo2=pointRotate([x2Start, y2Start], 72, [500,500] )

  let lineThree1=pointRotate([lineTwo1[0], lineTwo1[1]], 72, [500,500] )
  let lineThree2=pointRotate([lineTwo2[0], lineTwo2[1]], 72, [500,500] )

  let lineFour1=pointRotate([lineThree1[0], lineThree1[1]], 72, [500,500] )
  let lineFour2=pointRotate([lineThree2[0], lineThree2[1]], 72, [500,500] )

  let lineFive1=pointRotate([lineFour1[0], lineFour1[1]], 72, [500,500] )
  let lineFive2=pointRotate([lineFour2[0], lineFour2[1]], 72, [500,500] )
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Let's make some concentric circles 
        </p>
        <svg viewBox= "0 0 1000 1000">
          <circle class="circleClass" cx={500} cy={500} r={360} stroke="black"  fill-opacity="0" />
          <line x1={x1Start} y1={y1Start} x2={x2Start} y2={y2Start} stroke="black" />

          <circle class="circleClass" cx={500} cy={500} r={280} stroke="black" fill-opacity="0" />
          <line x1={lineTwo1[0]} y1={lineTwo1[1]} x2={lineTwo2[0]} y2={lineTwo2[1]} stroke="black" />

          <circle class="circleClass" cx={500} cy={500} r={200} stroke="black"  fill-opacity="0"/>
          <line x1={lineThree1[0]} y1={lineThree1[1]} x2={lineThree2[0]} y2={lineThree2[1]} stroke="black" />

          <circle class="circleClass" cx={500} cy={500} r={120} stroke="black"  fill-opacity="0"/>
          <line x1={lineFour1[0]} y1={lineFour1[1]} x2={lineFour2[0]} y2={lineFour2[1]} stroke="black" />

          <circle class="circleClass" cx={500} cy={500} r={40} stroke="black"  fill-opacity="0"/>
          <line x1={lineFive1[0]} y1={lineFive1[1]} x2={lineFive2[0]} y2={lineFive2[1]} stroke="black" />
        </svg>
        <svg viewBox="0 0 400 400">
          <circle cx={50} cy={50} r={10} stroke="black" fill="green" /> 
          <circle cx={50} cy={100} r={10} stroke="black" fill="green" /> 
          <circle cx={50} cy={150} r={10} stroke="black" fill="green" /> 
          <circle cx={100} cy={50} r={10} stroke="black" fill="red" /> 
          <circle cx={100} cy={100} r={10} stroke="black" fill="red" /> 
          <circle cx={100} cy={150} r={10} stroke="black" fill="red" /> 
          <circle cx={150} cy={50} r={10} stroke="black" fill="blue" /> 
          <circle cx={150} cy={100} r={10} stroke="black" fill="blue" /> 
          <circle cx={150} cy={150} r={10} stroke="black" fill="blue" /> 
          <circle cx={200} cy={50} r={10} stroke="black" fill="white" /> 
          <circle cx={200} cy={100} r={10} stroke="black" fill="white" /> 
          <circle cx={250} cy={50} r={10} stroke="black" fill="yellow" /> 
          <circle cx={250} cy={100} r={10} stroke="black" fill="yellow" /> 
          <circle cx={300} cy={50} r={10} stroke="black" fill="purple" /> 
        </svg>
      </header>
    </div>
  );
}

export default App;
