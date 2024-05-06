import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton, InputAdornment } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import PropTypes from "prop-types";

const SingleSelectDropDown = ({
	value,
	onChange,
	options,
	onRemove,
	placeholder,
}) => {
	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
			<Select
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				displayEmpty
				inputProps={{ "aria-label": "Without label" }}
				endAdornment={
					value && (
						<InputAdornment position="start">
							<IconButton size="small" onClick={onRemove}>
								<ClearIcon fontSize="small" />
							</IconButton>{" "}
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
};

export default SingleSelectDropDown;
