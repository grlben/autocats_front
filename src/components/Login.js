import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import SnoozeIcon from '@mui/icons-material/Snooze';

const Login = () => {
	return (
		<Box
			sx={{
				borderRadius: 6,
				backgroundColor: 'white',
				p: 6,
                m: 4
			}}
		>
			<Stack spacing={4} alignItems="center">
				<Stack m={0} spacing={1} direction="row" alignItems="center">
					<SnoozeIcon fontSize='large'/>
					<Typography variant="h3">AutoCATS</Typography>
				</Stack>
                <Typography variant="body">Ressourcenallokation in Sekunden.</Typography>
				<TextField
					id="outlined-required"
					label="Nutzer"
					defaultValue="Hello World"
				/>
				<TextField
					id="outlined-password-input"
					label="Passwort"
					type="password"
					autoComplete="current-password"
				/>
				<Button variant="contained" disableElevation>
					Einloggen
				</Button>
			</Stack>
		</Box>
	);
};

export default Login;
