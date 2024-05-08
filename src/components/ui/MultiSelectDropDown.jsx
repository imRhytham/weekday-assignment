import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel";
import PropTypes from "prop-types";
import { InputLabel } from "@mui/material";

const MultipleSelectDropDown = ({
	value,
	onChange,
	options,
	placeholder,
	label,
	onRemoveSelectedElement,
}) => {
	return (
		<div>
			<FormControl sx={{ width: 200 }}>
				<InputLabel id="select-label">{label}</InputLabel>

				<Select
					labelId="select-label"
					id="demo-multiple-chip"
					multiple
					label={label}
					value={value}
					size="small"
					onChange={onChange}
					placeholder={placeholder}
					renderValue={(selected) => (
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
							{selected?.map((value, index) => (
								<Chip
									size="small"
									key={value}
									label={value}
									onDelete={() => onRemoveSelectedElement(index)}
									deleteIcon={
										<CancelIcon
											onMouseDown={(event) => event.stopPropagation()}
										/>
									}
								/>
							))}
						</Box>
					)}
				>
					{options.map((option) => (
						<MenuItem key={option.label} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

MultipleSelectDropDown.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onRemove: PropTypes.func,
	options: PropTypes.array.isRequired,
	label: PropTypes.string,
	onRemoveSelectedElement: PropTypes.func.isRequired,
};

export default MultipleSelectDropDown;
