const Student = ({ student }) => {
	return(
		<div style={{ color: "green", paddingLeft: "20px" }}>
			{
			student.map((student ,index) => (
				<ul key={index}>
					<li>Name: {student.name}</li>
					<li>Age: {student.age}</li>
					<li>Email: {student.Email}</li>
				</ul>
			))
			}
		</div>
	)
}

export default Student;