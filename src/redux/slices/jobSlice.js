import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateId } from "../../utils/common";

//function to call api
export const fetchJobs = createAsyncThunk(
	"fetchJobs",
	async (payload, thunkAPI) => {
		try {
			const response = await fetch(
				"https://api.weekday.technology/adhoc/getSampleJdJSON",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			);
			const data = await response.json();
			return data.jdList.map((item) => ({ ...item, id: generateId() }));
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const jobSlice = createSlice({
	name: "data",
	initialState: {
		items: [],
		loading: false,
		offset: 0,
		filteredItems: [],

		filters: {
			companyName: "",
			jobRoles: [],
			mode: "",
			minJdSalary: "",
			minExp: "",
		},
	},
	reducers: {
		setFilter: (state, action) => {
			state.filters[action.payload.filter] = action.payload.value;
			state.filteredItems = applyFilters(state.items, {
				...state.filters,
				[action.payload.filter]: action.payload.value,
			});
		},
		clearFilter: (state, action) => {
			state.filters[action.payload] = action.payload === "minJdSalary" ? 0 : "";
			state.filteredItems = applyFilters(state.items, {
				...state.filters,
				[action.payload]: action.payload === "jobRoles" ? [] : "",
			});
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchJobs.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchJobs.fulfilled, (state, action) => {
				state.loading = false;
				state.items.push(...action.payload);
				state.filteredItems = Object.values(state.filters).every(
					(val) => val === "" || val === 0
				)
					? state.items
					: applyFilters(state.items, state.filters);
			})
			.addCase(fetchJobs.rejected, (state) => {
				state.loading = false;
			});
	},
});

const applyFilters = (items, filters) => {
	return items.filter((item) => {
		const companyNameFilter = filters.companyName.toLowerCase();

		return item.companyName.toLowerCase().includes(companyNameFilter) &&
			item.minExp >= filters.minExp &&
			item.minJdSalary >= filters.minJdSalary &&
			filters.mode === "remote"
			? item.location === "remote"
			: (item.location !== "remote" && filters.jobRoles.length === 0) ||
					filters.jobRoles.includes(item.jobRole.toLowerCase());
	});
};

export const { setFilter, clearFilter } = jobSlice.actions;

export default jobSlice.reducer;
