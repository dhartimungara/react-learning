import Block from './Block';

function UserTable(){
	const userdata = [
		{id: 1, name: "Dharti", age: 20, email: "dharti@gmail.com"},
		{id: 2, name: "Dharti", age: 20, email: "dharti@gmail.com"},
		{id: 3, name: "Dharti", age: 20, email: "dharti@gmail.com"},
		{ id: 4, name: "Dharti", age: 20, email: "dharti@gmail.com" },
	];

	return (
		<div>
		<h1>Reusable Component</h1>
		{
		userdata.map((user) => (
			<div key={user.id}>
				<Block user={user} />
			</div>
		))
	}
	</div>

		// <table border="1" style={{ margin: "0 auto 50px" }}>
		// 	<thead>
		// 		<tr>
		// 			<th style={{ padding: "10px 25px" }}>Id</th>
		// 			<th style={{ padding: "10px 25px" }}>Name</th>
		// 			<th style={{ padding: "10px 25px" }}>Age</th>
		// 			<th style={{ padding: "10px 25px" }}>Email</th>
		// 		</tr>
		// 	</thead>
		// 	<tbody>
		// 		{
		// 			userdata.map((user) => (
		// 				<tr key={user.id}>
		// 					<td style={{ padding: "10px 25px" }}>{user.id}</td>
		// 					<td style={{ padding: "10px 25px" }}>{user.name}</td>
		// 					<td style={{ padding: "10px 25px" }}>{user.age}</td>
		// 					<td style={{ padding: "10px 25px" }}>{user.email}</td>
		// 				</tr>
		// 			))
		// 		}
		// 		{/* <tr>
		// 			<td>1</td>
		// 			<td>Dharti</td>
		// 			<td>20</td>
		// 			<td>dharti@gmail.com</td>
		// 		</tr> */}
		// 	</tbody>
		// </table>
	)
}

export default UserTable;