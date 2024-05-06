import { TextField as Input } from "@mui/material";
import PropTypes from "prop-types";

const TextField = ({ placeholder, value, onChange, type }) => {
	return (
		<Input
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			type={type}
			size="small"
		/>
	);
};

TextField.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
};

export default TextField;
