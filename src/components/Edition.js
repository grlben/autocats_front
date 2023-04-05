import { useState } from 'react';

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

const Project = ({ project, onChange }) => {
	return (
		<TableRow>
			<TableCell>{project.name}</TableCell>
			<TableCell>
				{project.allocation > 0 ? project.allocation * 100 + ' %' : '-'}
			</TableCell>
			<TableCell>
				<Stack m={0} spacing={1} direction="row" alignItems="center">
					<TextField
						id="outlined-number"
						type="number"
						size="small"
						style={{ width: 80 }}
						defaultValue={
							project.allocation > 0 ? project.allocation * 100 : ''
						}
						onChange={(e) =>
							onChange(project.name, parseFloat(e.target.value) / 100)
						}
					/>
					<Typography>%</Typography>
				</Stack>
			</TableCell>
		</TableRow>
	);
};

const ProjectTable = ({ projects, onChange }) => {
	return (
		<TableContainer sx={{ maxHeight: 340 }}>
			<Table stickyHeader size="small">
				<TableHead>
					<TableRow>
						<TableCell>
							<b>Projekt</b>
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
					{projects?.map((x) => (
						<Project key={x.name} project={x} onChange={onChange} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

const Edition = ({ setStep, monthStart }) => {
	var projects = [
		{ name: 'Offshore CAPEX Overhead - SL-05020-02-01', allocation: 0.25 },
		{
			name: 'IN.20WDBAC01.02 \u00fcbergr. Lstg. - 52A000015735/0010',
			allocation: 0.25,
		},
		{
			name: 'Onshore CAPEX Infra-Projekte (Overhead) - SL-05020-01-01',
			allocation: 0.15,
		},
		{
			name: 'IN.19WDBAC03.02 \u00fcbergr. Lstg. - 52A000015705/0010',
			allocation: 0.05,
		},
		{
			name: 'IN.17WDBAC01.04 CWA 2 OSS Baltic Eagle - 52A000015663/0010',
			allocation: 0.0,
		},
		{ name: 'IN.20WDBAC01.05 OSS 2 - 52A000015738/0010', allocation: 0.0 },
		{ name: 'Strompreisbremse Personal - SL-05020-08-01', allocation: 0.0 },
		{
			name: 'WGR_HZT_01 - Permanent Services - SL-05020-07-01',
			allocation: 0.0,
		},
		{ name: 'KWK Personal - SL-05020-04-01', allocation: 0.0 },
		{ name: 'EEG Personal - SL-05020-03-01', allocation: 0.0 },
		{ name: 'Offshore OPEX Overhead - SL-05020-02-02', allocation: 0.0 },
		{
			name: 'IN.17WDBAC01.03 CWA 2 Kabel - 52A000015662/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.22WCNDC02.02 NOR-11-1 \u00fcbergr. Lstg. - 52A000015839/0010',
			allocation: 0.0,
		},
		{ name: 'IN.20WDBAC01.21 Leitung - 52A000015740/0010', allocation: 0.0 },
		{ name: 'IN.20WDBAC01.11 UW Sanitz - 52A000015739/0010', allocation: 0.0 },
		{ name: 'IN.20WDBAC01.04 OSS 1 - 52A000015737/0010', allocation: 0.0 },
		{
			name: 'IN.17WDBAC01.05 CWA 2 OSS Arcadis Ost 1 - 52A000015664/0010',
			allocation: 0.0,
		},
		{ name: 'IN.20WDBAC01.03 Kabel - 52A000015736/0010', allocation: 0.0 },
		{
			name: 'IN.17WDBAC01.02 CWA 2 \u00fcbergr. Lstg. - 52A000015661/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.20WDBAC01.01 Genehmigung/Kompensation - 52A000015734/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.19WDBAC03.21 Leitung (Einschleifung) - 52A000015709/0010',
			allocation: 0.0,
		},
		{ name: 'IN.19WDBAC03.11 UW Stilow - 52A000015708/0010', allocation: 0.0 },
		{ name: 'IN.19WDBAC03.04 OSS - 52A000015707/0010', allocation: 0.0 },
		{ name: 'IN.19WDBAC03.03 Kabel - 52A000015706/0010', allocation: 0.0 },
		{
			name: 'IN.19WDBAC03.01 Gen./Kompensation - 52A000015704/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.17WDBAC01.21 CWA 2 Leitungseinschlfg. - 52A000015666/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.17WDBAC01.11 CWA 2 UW Lubmin - 52A000015665/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.17WDBAC01.01 CWA 2 Gen./Kompensation - 52A000015660/0010',
			allocation: 0.0,
		},
	];

	const [alloc, setAlloc] = useState(projects);

	var updateAlloc = (id, newAllocation) =>
		setAlloc(
			alloc.map((p) =>
				p.name === id ? { name: id, allocation: newAllocation } : p
			)
		);

	return (
		<Stack spacing={4} alignItems="center" width={720}>
			<Typography variant="h4" align="center">
				Bitte erfasse Deine Zeit für{' '}
				<b>
					{monthStart.toLocaleString('de', { month: 'long', year: 'numeric' })}
				</b>{' '}
				📝
			</Typography>
			<Stack spacing={0} alignItems="center">
				<RadioGroup
					row
					defaultValue="percent"
					aria-labelledby="demo-row-radio-buttons-group-label"
					name="row-radio-buttons-group"
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
			<ProjectTable projects={projects} onChange={updateAlloc} />
			<Alert severity="warning">
				<b>Not allocated:</b>{' '}
				{100 -
					Math.round(
						alloc
							.map((x) => x.allocation)
							.reduce(function (total, x) {
								return x + total;
							}) * 100
					)}{' '}
				%
			</Alert>
			<Button
				variant="contained"
				size="large"
				disableElevation
				style={{ textTransform: 'none' }}
			>
				In CATS eintragen
			</Button>
		</Stack>
	);
};

export default Edition;
