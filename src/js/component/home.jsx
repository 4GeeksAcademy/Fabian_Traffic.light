import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [activeColor, setActiveColor] = useState("red");
	const [colors, setColors] = useState(["red", "yellow", "green"]);

	const changeColor = () => {
		if (activeColor === "red"){
			setActiveColor("yellow");
		} else if (activeColor === "yellow") {
			setActiveColor ("green");
		} else {
			setActiveColor("red");
		}
	};

	const addColorPurple = () => {
		if (!colors.includes("purple")){
			setColors([...colors, "purple"]);
		}
	};

	return (
		<div className="body">
			<div className="container">
				<div className="stick"></div>
				<div className="traffic-light">
					{colors.map(color => (
					<div
					key={color}
						onClick={() => setActiveColor(color)}
						className={`${color} light ${activeColor === color ? "active" : ""}`}
					></div>
				))}
						
				</div>
			</div>
			<div className="Button ">
						<button className="btn btn-outline-dark" onClick={changeColor}>Cambio de color</button>
						<button className="btn btn-outline-dark" onClick={addColorPurple}>Añadir color purpura</button>
					</div>
		</div>
	);
};

export default Home;