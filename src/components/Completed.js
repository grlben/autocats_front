import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { Link } from 'react-router-dom';

const Completed = () => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			style={{ minHeight: '100vh' }}
		>
			<Grid item xs={3}>
				<Box
					sx={{
						width: 800,
						borderRadius: 6,
						backgroundColor: 'white',
						p: 6,
						m: 4,
					}}
				>
					<Stack spacing={4} alignItems="center">
						<Stack spacing={1.5} alignItems="center">
						<Link to="/mode_selector" style={{ textDecoration: 'none' }}>
						<CheckCircleOutlineIcon
							style={{ color: 'green', fontSize: '72px' }} sx={{ stroke: "#ffffff", strokeWidth: 0.65 }}
						/>
						</Link>
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
								Bitte prüfe die Allokation in der Email und passe sie ggf. in CATS an.
							</Typography>
						</Stack>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Ich möchte eine Erinnerung nächsten Monat per Email erhalten."
						/>
					</Stack>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Completed;
