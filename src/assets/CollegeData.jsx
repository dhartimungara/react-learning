import College from './College';

function CollegeData(){

	const collegeData = [
		{
			name:"SVNIT Surat",
			city:"Surat",
			website:"www.svnit.com",
				student:[
				{
					name: "Dharti",
					age:	"28",
					Email: "dharti.patel@gmail.com"
				},
				{
					name: "Kuldip",
					age:	"29",
					Email: "kuldip.patel@gmail.com"
				}
				]
		},
		{
			name: "DICT Gandhinagar",
			city: "Gandhinagar",
			website: "www.dict.com",
				student:[
				{
					name: "Dharti",
					age:	"28",
					Email: "dharti.patel@gmail.com"
				},
				{
					name: "Kuldip",
					age:	"29",
					Email: "kuldip.patel@gmail.com"
				}
				]
		},
	];

	return(
		<div style={{ textAlign: "left" }}>
			{
				collegeData.map((college, index) => (
					<div key={index}>
						<College college={college} />
					</div>
				))
			}
		</div>
	)
}
export default CollegeData;