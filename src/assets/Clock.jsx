import { useEffect, useState } from "react";

function Clock({ color, data }) {
	const [time, setTime] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
	})
	return (
		<div>
			{color === 'rg' && (
				
				<h1 style={{ color: data[0].color, backgroundColor: data[0].backgroundColor, border: data[0].border, borderRadius: data[0].borderRadius, padding: data[0].padding, maxWidth: data[0].maxWidth, margin: data[0].margin }}>{time}</h1>
			)}
			{color === 'gr' && (
				<h1 style={{ color: data[1].color, backgroundColor: data[1].backgroundColor, border: data[1].border, borderRadius: data[1].borderRadius, padding: data[1].padding, maxWidth: data[1].maxWidth, margin: data[1].margin }}>{time}</h1>
			)}
			{color === 'by' && (
				<h1 style={{ color: data[2].color, backgroundColor: data[2].backgroundColor, border: data[2].border, borderRadius: data[2].borderRadius, padding: data[2].padding, maxWidth: data[2].maxWidth, margin: data[2].margin }}>{time}</h1>
			)}
			{color === 'yb' && (
				<h1 style={{ color: data[3].color, backgroundColor: data[3].backgroundColor, border: data[3].border, borderRadius: data[3].borderRadius, padding: data[3].padding, maxWidth: data[3].maxWidth, margin: data[3].margin }}>{time}</h1>
			)}
		</div>
	);
}
export default Clock;