import React from "react";


import rigoImage from "../../img/rigo-baby.jpg";

const JumboTron = () => {
	return (
							<div className="jumbotron jumbotron-fluid bg-light">
						<h1 className="display-4">A Warm Welcome!</h1>
						<p className="lead">
							This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
						</p>
						<hr className="my-4" />
						<p>
							It uses utility classes for typography and spacing to space content out within the larger container.
						</p>
						<p className="lead">
							<a className="btn btn-primary btn-lg" href="#" role="button">
								Learn more
							</a>
						</p>
					</div>
	);
};

export default JumboTron;