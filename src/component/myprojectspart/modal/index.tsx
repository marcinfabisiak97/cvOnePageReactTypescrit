import React from "react";
import dataSlider from "../../Slider/dataSlider";

const Modal = ({ setOpenModal }) => {
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<img src={dataSlider[0].adres} />
				<div className="modalContainer__CloseBtn">
					<button
						onClick={() => {
							setOpenModal(0);
						}}
					>
						X
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
