import { TextField as Input } from "@mui/material";
import PropTypes from "prop-types";

const TextField = ({ placeholder, value, onChange, type, label }) => {
	return (
		<Input
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			type={type}
			size="small"
			label={label}
			sx={{
				background: "transparent",
				color: "black",
			}}
		/>
	);
};

TextField.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string,
};

export default TextField;
