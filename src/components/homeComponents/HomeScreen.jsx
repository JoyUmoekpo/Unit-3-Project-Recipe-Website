import React, { useEffect, useState } from "react";
import axios from "axios";

import AdBanner from "./AdBanner";
import RecipeCard from "../RecipeCardComponents/RecipeCard";
import SearchBar from "../SearchComponents/SearchBar";

// import styles from "./Home.module.css";

const HomeScreen = () => {
	const [recipes, setRecipes] = useState([]);

	const getRecipes = () => {
		axios.get("https://recipes.devmountain.com/recipes").then((res) => {
			setRecipes(res.data);
			console.log(res.data);
		});
	};

	useEffect(() => {
		getRecipes();
	}, []);

	return (
		<div>
			<AdBanner />
			<SearchBar />
			<RecipeCard />
		</div>
	);
};

export default HomeScreen;
