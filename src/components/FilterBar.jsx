import { useState, useCallback } from "react";
import TextField from "./ui/TextField";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearFilter, setFilter } from "../redux/slices/jobSlice";
import SingleSelectDropDown from "./ui/SingleSelectDropdown";
import {
	experienceMenuOptions,
	jobRolesOptions,
	modesOptions,
	salaryMenuOptions,
} from "../utils/common";
import MultipleSelectDropDown from "./ui/MultiSelectDropDown";

const FilterBar = () => {
	const [companyName, setCompanyName] = useState("");
	const [experience, setExperience] = useState("");
	const [minSalary, setMinSalary] = useState("");
	const [mode, setMode] = useState("");
	const [jobRoles, setJobRoles] = useState([]);

	const dispatch = useDispatch();

	const handleCompanyNameChange = useCallback(
		(e) => {
			const { value } = e.target;
			setCompanyName(value);
			if (value) {
				dispatch(setFilter({ filter: "companyName", value }));
			} else {
				dispatch(clearFilter("companyName"));
			}
		},
		[dispatch]
	);

	const handleSelectExperience = useCallback(
		(e) => {
			const { value } = e.target;
			setExperience(value);
			dispatch(setFilter({ filter: "minExp", value }));
		},
		[dispatch]
	);

	const removeExperienceFilter = useCallback(() => {
		setExperience("");
		dispatch(clearFilter("minExp"));
	}, [dispatch]);

	const handleSelectMinSalary = useCallback(
		(e) => {
			const { value } = e.target;
			setMinSalary(value);
			dispatch(setFilter({ filter: "minJdSalary", value }));
		},
		[dispatch]
	);

	const removeMinSalaryFilter = useCallback(() => {
		setMinSalary("");
		dispatch(clearFilter("minJdSalary"));
	}, [dispatch]);

	const handleModeChange = useCallback(
		(e) => {
			const { value } = e.target;
			setMode(value);
			dispatch(setFilter({ filter: "mode", value }));
		},
		[dispatch]
	);

	const removeModeFilter = useCallback(() => {
		setMode("");
		dispatch(clearFilter("mode"));
	}, [dispatch]);

	const handleSelectJobRoles = useCallback(
		(e) => {
			const { value } = e.target;
			setJobRoles(value);
			if (value.length > 0) {
				dispatch(setFilter({ filter: "jobRoles", value }));
			} else {
				dispatch(clearFilter("jobRoles"));
			}
		},
		[dispatch]
	);

	const removeSelectedRole = (val) => {
		const index = jobRoles.findIndex((item) => item.value === val);
		const updatedRoles = [
			...jobRoles.slice(0, index),
			...jobRoles.slice(index, jobRoles.length - 1),
		];
		setJobRoles(updatedRoles);
		if (updatedRoles.length > 0) {
			dispatch(setFilter({ filter: "jobRoles", value: updatedRoles }));
		} else {
			dispatch(clearFilter("jobRoles"));
		}
	};

	return (
		<Grid container p={2} spacing={2} m={2}>
			<Grid item>
				<TextField
					value={companyName}
					onChange={handleCompanyNameChange}
					type="text"
					placeholder="Company Name"
					label="Company Name"
				/>
			</Grid>
			<Grid item>
				<SingleSelectDropDown
					value={experience}
					onChange={handleSelectExperience}
					options={experienceMenuOptions}
					placeholder="Experience"
					label="Experience"
					onRemove={removeExperienceFilter}
				/>
			</Grid>
			<Grid item>
				<SingleSelectDropDown
					value={minSalary}
					onChange={handleSelectMinSalary}
					options={salaryMenuOptions}
					placeholder="Minimum Salary"
					onRemove={removeMinSalaryFilter}
					label="Salary"
				/>
			</Grid>
			<Grid item>
				<SingleSelectDropDown
					value={mode}
					onChange={handleModeChange}
					options={modesOptions}
					label="Mode"
					placeholder="Mode"
					onRemove={removeModeFilter}
				/>
			</Grid>
			<Grid item>
				<MultipleSelectDropDown
					options={jobRolesOptions}
					value={jobRoles}
					onChange={handleSelectJobRoles}
					label="Job Role"
					placeholder="Role"
					onRemoveSelectedElement={removeSelectedRole}
				/>
			</Grid>
		</Grid>
	);
};

export default FilterBar;
