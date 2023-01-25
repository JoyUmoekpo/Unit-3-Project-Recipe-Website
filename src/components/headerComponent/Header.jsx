import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<header>
			<h2>DevMountain Eatery</h2>
			<nav>
				<Link to="">
					<button>Home</button>
				</Link>
				<Link to="/newRecipe">
					<button>Add Recipe</button>
				</Link>
			</nav>
		</header>
	);
};

export default Header;