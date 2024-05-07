// import { useState } from 'react'

import FilterBar from "./components/FilterBar";
import JobList from "./components/JobList";

function App() {
	return (
		<>
			{/* This will contain two major components Filter bar where all the filter will be present and Job list job cards will be present */}
			<FilterBar />
			<JobList />
		</>
	);
}

export default App;
