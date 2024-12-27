import { useState } from "react";

function Skills(){
	const [skills, setskills] = useState([]);

	const handleSkillChange = (e) => {
		if (e.target.checked) {
			setskills([...skills, e.target.value]);
		} else {
			setskills(skills.filter(skill => skill !== e.target.value));
		}
	};

	return(
		<div className="skill-box-wrap">
			<div className="inner-skill-box">
				<input type="checkbox" id="php" value="php" onChange={handleSkillChange}></input>
				<label htmlFor="php">PHP</label>
			</div>
			<div className="inner-skill-box">
				<input type="checkbox" id="laravel" value="laravel" onChange={handleSkillChange}></input>
				<label htmlFor="laravel">LARAVEL</label>
			</div>
			<div className="inner-skill-box">
				<input type="checkbox" id="react-js" value="react-js" onChange={handleSkillChange}></input>
				<label htmlFor="react-js">REACT JS</label>
			</div>
			<div className="inner-skill-box">
				<input type="checkbox" id="hubspot" value="hubspot" onChange={handleSkillChange}></input>
				<label htmlFor="hubspot">HUBSPOT</label>
			</div>
			<h1>{skills.toString()}</h1>
		</div>
	);
}

export default Skills;
