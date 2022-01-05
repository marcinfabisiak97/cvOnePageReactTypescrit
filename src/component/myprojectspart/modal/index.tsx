import React from "react";
import dataSlider from "../../Slider/dataSlider";

const Modal = ({ setOpenModal }, props) => {
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<button
						onClick={() => {
							setOpenModal(false);
						}}
					>
						X
					</button>
					<img src={dataSlider[0].adres} />
				</div>
			</div>
		</div>
	);
};

export default Modal;
