function Contentbox(){

	function callFun(){
		alert("function called")
	}

	return (
		<div>
			<h1>Dharti patel</h1>
			<img src="https://images.unsplash.com/photo-1443402041265-fe79bb6b1651" />
			<ul>
				<li>test</li>
			</ul>
			<button onClick={callFun}>Click Me</button>
		</div>
	);
}
export default Contentbox;