import { useEffect } from "react";
import Student from "./Students";


const College = ({ college }) => {
	return(
		<div style={{ 
			border: "1px solid #000",
			backgroundColor: "#DDD",
			borderRadius:"10px",
			marginBottom: "20px",
			padding: "20px",
			color: "#000"
		}}>
			<h1>Name : {college.name}</h1>
		<ul>
			<li>city : {college.city}</li>
			<li>website : {college.website}</li>
			</ul>
			<Student student={college.student} />
		</div>
	)
}
export default College;