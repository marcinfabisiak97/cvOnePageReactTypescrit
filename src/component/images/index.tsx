import React from "react";

interface ImageProp {
	imageUrl: string;
}
const Image: React.FC<ImageProp> = ({ imageUrl }) => {
	return (
		<React.Fragment>
			<img src={imageUrl} alt="dropdown arrow" />
		</React.Fragment>
	);
};
export default Image;
