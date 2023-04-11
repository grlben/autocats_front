import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Alert from '@mui/material/Alert';
import { InputAdornment } from '@mui/material';

import Frame from './Frame';
import Loading from './Loading';

import allocationService from '../services/allocation';
import { VerticalAlignCenter } from '@mui/icons-material';

const Project = ({ projectPreviousMonth, project, onChange, unit }) => {
	const unitVol = unit === 'percent' ? 100 : 37;
	const unitText = unit === 'percent' ? '%' : 'Std.';
	return (
		<TableRow>
			<TableCell>{project.name}</TableCell>
			<TableCell>
				{projectPreviousMonth.allocation > 0
					? Math.round(projectPreviousMonth.allocation * unitVol) +
					  ' ' +
					  unitText
					: '-'}
			</TableCell>
			<TableCell>
				<Stack m={0} spacing={1} direction="row" alignItems="center">
					<TextField
						id="outlined-number"
						size="small"
						autoComplete="off"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">{unitText}</InputAdornment>
							)
						}}
						onFocus={(event) => {
							event.target.select();
						}}
						style={{ width: 85 }}
						value={
							project.allocation > 0
								? Math.round(project.allocation * unitVol)
								: ''
						}
						onChange={(e) => onChange(project.name, e.target.value)}
					/>
				</Stack>
			</TableCell>
		</TableRow>
	);
};

const ProjectTable = ({
	allocPreviousMonth,
	alloc,
	onChange,
	setSearchName,
	unit,
}) => {
	return (
		<TableContainer sx={{ height: 340 }}>
			<Table stickyHeader size="small">
				<TableHead>
					<TableRow>
						<TableCell style={{ verticalAlign: 'center' }} width={460}>
							<Stack direction={'row'} alignItems="center" spacing={1}>
								<b>Projekt</b>
								<TextField
									id="searchName"
									label="Suchen"
									autoComplete="off"
									onChange={(e) => {
										setSearchName(e.target.value);
									}}
									size="small"
								/>
							</Stack>
						</TableCell>
						<TableCell>
							<b>Februar</b>
						</TableCell>
						<TableCell>
							<b>März</b>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{alloc?.map((x) => (
						<Project
							key={x.name}
							projectPreviousMonth={
								allocPreviousMonth.filter((p) => p.name === x.name)[0]
							}
							project={x}
							onChange={onChange}
							unit={unit}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

const Edition = ({ setStep, monthStart, token }) => {

	const submit = () => {
		console.log('Submitted');
		setStep('success');
	};

	const [alloc, setAlloc] = useState([]);
	const [searchName, setSearchName] = useState('');
	const [unit, setUnit] = useState('percent');
	const limit = unit === 'percent' ? 100 : 37;
	const unitText = unit === 'percent' ? '%' : 'Std.';

	const allocToShow =
		searchName === ''
			? alloc
			: alloc.filter((p) =>
					p.name.toLowerCase().includes(searchName.toLowerCase())
			  );

	var updateAlloc = (id, newAllocation) => {
		const regex = /^[0-9\b]+$/;

		if (newAllocation > limit) return;

		if (newAllocation === '' || regex.test(newAllocation)) {
			setAlloc(
				alloc.map((p) =>
					p.name === id
						? {
								name: id,
								allocation:
									newAllocation === '' ? 0 : parseFloat(newAllocation) / limit,
						  }
						: p
				)
			);
		}
	};

	const [allocPreviousMonth, setAllocPreviousMonth] = useState([]);

	useEffect(() => {
		console.log('loading previous month');
		const temp = allocationService.getAllocation(token, monthStart);
		console.log('previous month loaded');
		setAllocPreviousMonth(temp);
		setAlloc(temp);
	}, []);

	const checkAlloc = () => {
		const totalAlloc = Math.round(
			alloc.length > 0
				? alloc
						.map((x) => x.allocation)
						.reduce(function (total, x) {
							return x + total;
						}) * limit
				: 0
		);

		if (totalAlloc > limit) {
			return (
				<Alert severity="error">
					Es wurde zu viel allokiert: {totalAlloc - limit} {unitText}
				</Alert>
			);
		}

		if (totalAlloc === limit) {
			return (
				<Alert severity="info">
					Deine Arbeitszeit wurde vollständig allokiert 👍
				</Alert>
			);
		}

		return (
			<Alert severity="warning">
				Ein Teil deiner Zeit wurde nicht allokiert: {limit - totalAlloc}{' '}
				{unitText}
			</Alert>
		);
	};

	return alloc.length === 0 ? (
		<Loading />
	) : (
		<Frame>
			<Stack spacing={4} alignItems="center" width={720}>
				<Typography variant="h4" align="center">
					Bitte erfasse Deine Zeit für{' '}
					<b>
						{monthStart.toLocaleString('de', {
							month: 'long',
							year: 'numeric',
						})}
					</b>{' '}
					📝
				</Typography>
				<Stack spacing={0} alignItems="center">
					<RadioGroup
						row
						defaultValue="percent"
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
						onChange={(e) => setUnit(e.target.value)}
					>
						<FormControlLabel
							value="percent"
							control={<Radio />}
							label="Prozente"
						/>
						<FormControlLabel
							value="hours"
							control={<Radio />}
							label="Stunden pro Woche"
						/>
					</RadioGroup>
					<Typography variant="body">
						ℹ️ Eingabe ohne Berücksichtigung der Urlaubstagen usw.
					</Typography>
				</Stack>

				<ProjectTable
					allocPreviousMonth={allocPreviousMonth}
					alloc={allocToShow}
					onChange={updateAlloc}
					setSearchName={setSearchName}
					unit={unit}
				/>
				{checkAlloc()}
				<Button
					variant="contained"
					size="large"
					disableElevation
					style={{ textTransform: 'none' }}
					onClick={submit}
				>
					In CATS eintragen
				</Button>
			</Stack>
		</Frame>
	);
};

export default Edition;
