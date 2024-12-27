import { useState } from "react";
import Clock from "./Clock";

function Color(){
	const [color, setcolor] = useState('rg');
	const data=[
		{color:"red",
			backgroundColor:"green",
			border:"5px solid red",
			borderRadius:"10px",
			padding:"10px",
			maxWidth:"400px",
			margin:"0 auto"
		},
		{color:"green",
			backgroundColor:"red",
			border:"5px solid green",
			borderRadius:"10px",
			padding:"10px",
			maxWidth:"400px",
			margin:"0 auto"
		},
		{color:"blue",
			backgroundColor:"yellow",
			border:"5px solid blue",
			borderRadius:"10px",
			padding:"10px",
			maxWidth:"400px",
			margin:"0 auto"
		},
		{color:"yellow",
			backgroundColor:"blue",
			border: "5px solid yellow",
			borderRadius:"10px",
			padding:"10px",
			maxWidth:"400px",
			margin:"0 auto"
		}
	]
	return (
		<div>
			<h1 style={{ color: color }}>Color</h1>
			<select onChange={(event) => setcolor(event.target.value)} name="color" id="color">
				<option value="rg">RG</option>
				<option value="gr">GR</option>
				<option value="by">BY</option>
				<option value="yb">YB</option>
			</select>
			<Clock color={color} data={data} />
		
		</div>
	)
}
export default Color;