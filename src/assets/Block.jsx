function Block({ user }) {
	return (
		<div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
			<p>Name: {user.name}</p>
			<p>Age: {user.age}</p>
			<p>Email: {user.email}</p>
			<p>ID: {user.id}</p>
		</div>
	);
}

export default Block;
