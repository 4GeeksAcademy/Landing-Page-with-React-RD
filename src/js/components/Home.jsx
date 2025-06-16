import React from "react";
import Navbar from "./Navbar.jsx";
import JumboTron from "./JumboTron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import rigoImage from "../../img/rigo-baby.jpg";

const cardData = Array(4).fill({
	image: rigoImage,
	title: "Card title",
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	link: "#"
});

const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar />

			<div className="container flex-grow-1 d-flex flex-column text-center">
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

			<Footer />
		</div>
	);
};

export default Home;
