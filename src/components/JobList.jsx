import { Grid } from "@mui/material";
import JobCard from "./ui/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobs } from "../redux/slices/jobSlice";
import Loading from "./ui/Loading";

const JobList = () => {
	const dispatch = useDispatch();
	const { items, offset, loading } = useSelector((state) => state.jobs);

	useEffect(() => {
		dispatch(fetchJobs({ limit: 5, offset: offset }));
	}, []);

	return (
		<>
			{loading && <Loading />}

			<Grid container spacing={{ xs: 2, md: 3 }} p={2}>
				{items.map((item) => (
					<Grid item xs={12} sm={6} md={3} key={item.jdUid}>
						<JobCard job={item} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default JobList;
