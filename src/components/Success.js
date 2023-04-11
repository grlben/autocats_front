import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import Frame from './Frame';

const Success = () => {
	return (
		<Frame>
			<Stack spacing={4} alignItems="center" width={720}>
				<Stack spacing={1.5} alignItems="center">
					<CheckCircleOutlineIcon
						style={{ color: 'green', fontSize: '72px' }}
						sx={{ stroke: '#ffffff', strokeWidth: 0.4 }}
					/>
					<Typography variant="h4" align="center" style={{ color: 'green' }}>
						Alles klar! Wir tragen das für Dich in CATS ein.
					</Typography>
				</Stack>
				<Stack>
					<Typography variant="body" align="center">
						In ein paar Minuten, wirst Du eine <b>Bestätigungsemail</b> 📨
						empfangen.{' '}
					</Typography>
					<Typography variant="body" align="center">
						Bitte prüfe die Allokation in der Email und passe sie ggf. in CATS
						an.
					</Typography>
				</Stack>
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="Ich möchte eine Erinnerung nächsten Monat per Email erhalten."
				/>
			</Stack>
		</Frame>
	);
};

export default Success;
