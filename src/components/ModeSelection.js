import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Frame from './Frame';

import allocationService from '../services/allocation';

const toISO = (date) => date.toISOString().split('T')[0];

const ModeSelection = ({ setStep, monthStart, token }) => {
	const copyPreviousMonth = () => {
		console.log('Copy previous month selected');
		allocationService
			.copyPreviousMonth(token, toISO(monthStart))
			.then((r) => console.log('Data copied successfully'))
			.catch((e) => console.log('Request error:', e.toJSON()));
		setStep('success');
	};

	const edit = () => {
		console.log('Edition selected');
		setStep('edition');
	};

	return (
		<Frame>
			<Stack spacing={4} alignItems="center" width={720}>
				<Typography variant="h4" align="center">
					Hey 👋 Es ist Zeit, Deine Ressourcenallokation für{' '}
					<b>
						{monthStart.toLocaleString('de', {
							month: 'long',
							year: 'numeric',
						})}
					</b>{' '}
					zu erfassen.
				</Typography>
				<Button
					variant="contained"
					disableElevation
					size="large"
					style={{ textTransform: 'none' }}
					sx={{ fontSize: 18 }}
					onClick={copyPreviousMonth}
				>
					Es hat sich seit Februar nichts geändert.
				</Button>
				<Button
					variant="outlined"
					disableElevation
					size="large"
					style={{ textTransform: 'none' }}
					sx={{ fontSize: 18 }}
					onClick={edit}
				>
					Ich muss Änderungen eingeben.
				</Button>
			</Stack>
		</Frame>
	);
};

export default ModeSelection;
