import React from "react";
import dataSlider from "../../Slider/dataSlider";

const Modal1 = ({ setOpenModal1 }) => {
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<img src={dataSlider[1].adres} />
				<div className="modalContainer__CloseBtn">
					<button
						onClick={() => {
							setOpenModal1(1);
						}}
					>
						X
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal1;
