import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton, InputAdornment, InputLabel } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import PropTypes from "prop-types";

const SingleSelectDropDown = ({
	value,
	onChange,
	options,
	onRemove,
	placeholder,
	label,
}) => {
	return (
		<FormControl
			sx={{
				mx: 1,
				minWidth: 120,
				"& .MuiSelect-iconOutlined": { display: value ? "none" : "" },
			}}
			size="small"
		>
			<InputLabel id="select-label">{label}</InputLabel>
			<Select
				labelId="select-label"
				id="demo-select-small"
				value={value}
				placeholder={placeholder}
				label={label}
				onChange={onChange}
				endAdornment={
					value && (
						<InputAdornment position="start">
							<IconButton
								size="small"
								onClick={onRemove}
								sx={{
									"&:focus": {
										outline: "none",
									},
								}}
							>
								<ClearIcon fontSize="small" />
							</IconButton>
						</InputAdornment>
					)
				}
			>
				{options.map((option) => (
					<MenuItem
						key={option.label}
						disabled={option.isDisabled}
						value={option.value}
					>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

SingleSelectDropDown.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onRemove: PropTypes.func,
	options: PropTypes.array.isRequired,
	label: PropTypes.string,
};

export default SingleSelectDropDown;
