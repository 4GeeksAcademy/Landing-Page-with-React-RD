import React from "react";
import Navbar from "./Navbar.jsx";
import JumboTron from "./JumboTron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import rigoImage from "../../img/rigo-baby.jpg";

const cardData = Array(3).fill({
	image: rigoImage,
	title: "Repeated Card",
	text: "This card is repeated three times.",
	link: "#"
});

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="text-center">
					<JumboTron />

					<div className="d-flex justify-content-center flex-wrap">
						{cardData.map((card, index) => (
							<Card
								key={index}
								image={card.image}
								title={card.title}
								text={card.text}
								link={card.link}
							/>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
