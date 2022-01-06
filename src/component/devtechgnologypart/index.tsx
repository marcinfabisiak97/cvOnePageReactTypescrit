import React, { useRef } from "react";
const html5 = require("../../assets/devtech/html.png");
const javascript = require("../../assets/devtech/javascript.png");
const css = require("../../assets/devtech/css.png");
const react = require("../../assets/devtech/react.png");
const sass = require("../../assets/devtech/sass.png");
const typescript = require("../../assets/devtech/typescript.png");
const redux = require("../../assets/devtech/redux.png");
const bitbucket = require("../../assets/devtech/bitbucket.png");
const sourcetree = require("../../assets/devtech/sourcetree.png");
const Devtech = () => {
	const myDevTechs = [
		{ source: html5, title: "html5" },
		{ source: javascript, title: "javascript" },
		{ source: css, title: "css" },
		{ source: react, title: "react" },
		{ source: sass, title: "scss" },
		{ source: typescript, title: "typescript" },
		{ source: redux, title: "redux" },
		{ source: bitbucket, title: "bitbucket" },
		{ source: sourcetree, title: "sourcetree" },
	];

	return (
		<div className="devTech">
			<h2 className="devTech__title">Technology by all means</h2>
			<p className="devTech__description">
				I have essential expierience to use the most powerfull
				developers' tools on the market. I want to make sure that the
				solution I prepare for client is the one that will make a
				difference and will enrich your facilities.
			</p>
			<p className="devTech__description">
				We can prognose the results and test efficancy of the methods
				used.
			</p>
			<div className="techBricks">
				{myDevTechs.map((el, index) => {
					return (
						<div>
							<div className="techBricks__brick">
								<img
									src={el.source}
									className="techBricks__brick--image"
								/>
							</div>
							<p className="techBricks__title">{el.title}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Devtech;
