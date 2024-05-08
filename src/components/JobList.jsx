import { Grid } from "@mui/material";
import JobCard from "./ui/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobs } from "../redux/slices/jobSlice";
import Loading from "./ui/Loading";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const JobList = () => {
	const dispatch = useDispatch();

	const { offset, loading, filteredItems } = useSelector((state) => state.jobs);

	useEffect(() => {
		dispatch(fetchJobs({ limit: 10, offset: offset }));
	}, []);

	useInfiniteScroll(() => {
		dispatch(fetchJobs({ limit: 10, offset: offset }));
	});

	return (
		<>
			<Grid container spacing={{ xs: 2, md: 3 }} p={2}>
				{filteredItems.map((item) => (
					<Grid item xs={12} sm={6} lg={4} key={item.id}>
						<JobCard job={item} />
					</Grid>
				))}
			</Grid>
			{loading && <Loading />}
		</>
	);
};

export default JobList;
