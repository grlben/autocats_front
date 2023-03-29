import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import SnoozeIcon from '@mui/icons-material/Snooze';

import { Link } from 'react-router-dom';

const ModeSelector = () => {
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
						<Typography variant="h4" align="center">
							Hey 👋 Es ist Zeit, Deine Ressourcenallokation für März 2023 zu
							erfassen.
						</Typography>
						<Link to="/completed" style={{ textDecoration: 'none' }}>
							<Button variant="contained" disableElevation size="large" style={{textTransform: 'none'}} sx={{fontSize: 18}}>
								Es hat sich seit Februar nichts geändert.
							</Button>
						</Link>
						<Link to="/waiting" style={{ textDecoration: 'none' }}>
						<Button variant="outlined" disableElevation size="large" style={{textTransform: 'none'}} sx={{fontSize: 18}} >
							Ich muss Änderungen eingeben.
						</Button>
						</Link>
					</Stack>
				</Box>
			</Grid>
		</Grid>
	);
};

export default ModeSelector;
