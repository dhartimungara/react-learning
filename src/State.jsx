import { useState } from "react";

function State(){
	const changename = () => {
		setabc("namechange");
	}

	const [abc, setabc]=useState('Dharti1');

	return(
		<>
		{/* <Gender /> */}
	<h1>Hey, {abc}</h1>
	<button onClick={changename}>Change Name</button>
			{/* <Car /> */}
		</>

	)
}

export default State;

export function Gender(){
	const [gender , setGender] = useState();

	return(
		<>
			<h1>Select Gender : {gender}</h1>
			<input onChange={(event) => {setGender(event.target.id)}} type="radio" id="Male" name="gender" value="Male" /><label for="Male">Male</label>
			<input onChange={(event) => {setGender(event.target.id)}} type="radio" id="Female" name="gender" value="Female" /><label for="Female">Female</label>
		</>
	)
}

export function Car() {
	const [car , setcar] =useState();
	return(
		<>  
			<h1>Selected Car : {car}</h1>
			<select onChange={(event) => setcar(event.target.value)} name="cars" id="cars">
				<option value="volvo">Volvo</option>
				<option value="saab">Saab</option>
				<option value="mercedes">Mercedes</option>
				<option value="audi">Audi</option>
			</select>
		</>
	)
}

export function Increasecounter(){
	const [incrasecounter,setincreasecounter]=useState(0);
	return(
		<>
			<h1>{incrasecounter}</h1>
			<button onClick={()=>setincreasecounter(incrasecounter+1)}>Counter</button>
			{
				  incrasecounter == 0 ? <h1>0</h1>
				: incrasecounter==1 ? <h1>1</h1>
				: incrasecounter==2 ? <h1>2</h1>
				: incrasecounter==3 ? <h1>3</h1>
				: incrasecounter==4 ? <h1>4</h1>
				: incrasecounter==5 ? <h1>5</h1>
				: <h1>Other</h1>
			}
		</>
	)
}
