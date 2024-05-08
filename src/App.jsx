// import { useState } from 'react'

import { Box } from "@mui/material";
import FilterBar from "./components/FilterBar";
import JobList from "./components/JobList";

function App() {
	return (
		<>
			{/* This will contain two major components Filter bar where all the filter will be present and Job list job cards will be present */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "flex-start",
				}}
			>
				<FilterBar />
				<JobList />
			</Box>
		</>
	);
}

export default App;
