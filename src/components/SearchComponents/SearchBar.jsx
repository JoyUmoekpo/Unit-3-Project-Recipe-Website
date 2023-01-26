import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

import styles from "./SearchBar.module.css";

const Search = () => {
	const [search, setSearch] = useState('');
	
	return (
		<div className={styles.search}>
			<BiSearch className={styles.search_icon} />
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search for a Recipe"
				className={styles.search_bar}
			/>
		</div>
	);
};

export default Search;
