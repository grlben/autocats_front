import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const ModeSelection = ({ setStep, monthStart }) => {
	const copyPreviousMonth = () => {
		console.log('Copy previous month');
		setStep('success');
	};

	const edit = () => {
		console.log('edition');
		setStep('edition');
	};

	return (
		<Stack spacing={4} alignItems="center" width={720}>
			<Typography variant="h4" align="center">
				Hey 👋 Es ist Zeit, Deine Ressourcenallokation für{' '}
				<b>
					{monthStart.toLocaleString('de', { month: 'long', year: 'numeric' })}
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
	);
};

export default ModeSelection;
