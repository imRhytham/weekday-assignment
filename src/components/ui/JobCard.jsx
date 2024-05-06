import {
	Card,
	CardContent,
	Typography,
	Button,
	Stack,
	Chip,
	CardActions,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BoltIcon from "@mui/icons-material/Bolt";

const classes = {
	root: {
		borderRadius: 2,
		maxWidth: 375,
		"&:hover": {
			boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
			cursor: "pointer",
		},
	},
};

const JobCard = ({ job }) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const estimatedSalary = (minSalary, maxSalary) => {
		if (minSalary && maxSalary) {
			return `${minSalary}k - ${maxSalary}k`;
		}
		if (minSalary) {
			return `${minSalary}k`;
		}
		if (maxSalary) {
			return `${maxSalary}k`;
		}
		return "Not disclosed";
	};

	const requiredExp = (minExp, maxExp) => {
		if (minExp && maxExp) {
			return `${minExp} - ${maxExp} years`;
		}
		if (minExp && !maxExp) {
			return `${minExp} years`;
		}
		if (maxExp && !minExp) {
			return `${maxExp} years`;
		}
		return "Not disclosed";
	};

	return (
		<Card sx={classes.root} key={job.jdUid} variant="outlined">
			<CardContent>
				<Chip
					label={job?.posted || `⏳Posted 2 hours ago`}
					size="small"
					variant="filled"
					sx={{
						padding: "0.5rem",
						marginBottom: "1rem",
					}}
				/>
				<Stack direction={"row"} spacing={2}>
					<img
						src={job.logoUrl}
						onError={({ currentTarget }) => {
							currentTarget.onerror = null;
							currentTarget.src = "https://placehold.co/40x40";
						}}
						alt="logo"
						height={50}
						width={45}
					/>
					<div>
						<Typography
							variant="body1"
							fontWeight="bold"
							// sx={classes.companyName}
						>
							{job.companyName}
						</Typography>

						<Typography
							variant="body1"
							color="text.secondary"
							textTransform="capitalize"
							// sx={classes.title}
						>
							{job.jobRole}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							fontWeight="bold"
							textTransform="capitalize"
							// sx={classes.location}
						>
							{job.location}
						</Typography>
					</div>
				</Stack>
				<Stack direction="row" alignItems="center">
					<Typography variant="body2" color="text.secondary">
						Estimated Salary: {job.salaryCurrencyCode}{" "}
						{estimatedSalary(job.minJdSalary, job.maxJdSalary)}
					</Typography>
					<CheckBoxIcon
						style={{
							marginLeft: "0.5rem",
							verticalAlign: "middle",
							color: "#00D26A",
						}}
					/>
				</Stack>
				<Typography variant="body1" fontWeight="bold">
					About Company:
				</Typography>
				<Typography variant="body2" fontWeight="bold">
					About us
				</Typography>
				<Typography
					variant="body1"
					sx={
						!expanded
							? {
									maskImage:
										"linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
							  }
							: null
					}
				>
					{expanded
						? job?.jobDetailsFromCompany
						: job?.jobDetailsFromCompany.slice(0, 250) + "..."}
				</Typography>
				<Typography
					sx={{
						backgroundColor: "transparent",
						color: "blue",
						width: "100%",
						padding: "0.5rem",
						textAlign: "center",
						cursor: "pointer",
					}}
				>
					<Button
						onClick={toggleExpand}
						sx={{
							"&:focus": {
								outline: "none",
							},
						}}
					>
						{expanded ? "Show Less" : "Show More"}
					</Button>
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Required Experience
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{requiredExp(job.minExp, job.maxExp)}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					variant="contained"
					href={job?.jdLink || "#"}
					size="small"
					sx={{
						backgroundColor: "#7ff4d3",
						color: "black",
						width: "100%",
						padding: "0.5rem",
						"&:hover": {
							backgroundColor: "#55EFC4",
							color: "black",
						},
					}}
				>
					<BoltIcon style={{ marginRight: "0.5rem", color: "#FF822D" }} />
					<Typography variant="body2" fontWeight="bold">
						Easy Apply
					</Typography>
				</Button>
			</CardActions>
		</Card>
	);
};

JobCard.propTypes = {
	job: PropTypes.object.isRequired,
};

export default JobCard;
