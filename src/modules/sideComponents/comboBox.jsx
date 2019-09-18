import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 310
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

const ComboBox = props => {
	const classes = useStyles();
	const [comboBoxData, setComboBoxData] = useState([]);
	const [currentValue, setCurrentValue] = useState('');
	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	function handleChange(event) {
		setCurrentValue(event.target.value);
		props.handleChange(event);
	}
	useEffect(() => {
		if (props.data) {
			setComboBoxData(
				props.data.map(item => {
					return (
						<MenuItem name={props.childName} key={item.id} value={item.value}>
							{item.value}
						</MenuItem>
					);
				})
			);
		}
	}, [props]);

	return (
		<form className={classes.root} autoComplete='off'>
			<FormControl variant='outlined' className={classes.formControl}>
				<InputLabel ref={inputLabel} htmlFor='outlined-age-simple'>
					{props.title}
				</InputLabel>
				<Select
					value={currentValue}
					onChange={handleChange}
					labelWidth={labelWidth}
					inputProps={{
						name: props.childName,
						id: 'outlined-age-simple'
					}}>
					{comboBoxData}
				</Select>
			</FormControl>
		</form>
	);
};
export default ComboBox;
