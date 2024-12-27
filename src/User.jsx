function User(){
	return <><h1>Hello Dharti</h1> <h1>Hello Dharti</h1></>;
}

export default User;

export function List({studobject}){
	return (
		<>
			<h1>{studobject.name}</h1>
			<h1>{studobject.dob}</h1>
			<h1>{studobject.email}</h1>
		</>
	);
}

export function Wrapper({ children, color }) {
	return(
		<div className="test-box" style={{ 
			color: color, 
			textAlign: "center", 
			marginBottom: "20px"
		}}>
			{children}
		</div>
	);
}