import React from "react";
import { BiSearch } from "react-icons/bi";

import styles from "./SearchBar.module.css";

const Search = () => {
	return (
		<div className={styles.search}>
			<BiSearch className={styles.search_icon}/>
			<input
				type="search"
				name="search"
				id="website-search"
				placeholder="Search for a Recipe"
				className={styles.search_bar}
			/>
		</div>
	);
};

export default Search;
