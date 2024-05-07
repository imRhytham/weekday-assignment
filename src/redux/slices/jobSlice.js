import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
			return data.jdList;
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
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchJobs.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchJobs.fulfilled, (state, action) => {
				state.loading = false;
				state.items.push(...action.payload);
				state.offset += 1;
			})
			.addCase(fetchJobs.rejected, (state) => {
				state.loading = false;
			});
	},
});

export default jobSlice.reducer;
