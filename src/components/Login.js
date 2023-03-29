import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';

import { Link } from 'react-router-dom';

import Logo from '../img/Logo.png';
import { fontSize } from '@mui/system';

const Login = () => {

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
						borderRadius: 6,
						backgroundColor: 'white',
						p: 6,
						m: 4,
					}}
				>
					<Stack spacing={4} alignItems="center">
                        <Stack spacing={2} >
						<Stack m={0} spacing={2} direction="row" alignItems="center" >
							<img src={Logo} />
							<Typography variant="h4" color={"#1976d2"}><b>AutoCATS</b></Typography>
						</Stack>
                        
						<Typography variant="body" >
							Ressourcenallokation in Sekunden.
						</Typography>
                        </Stack>
                        <Stack spacing={2}>
						<TextField
							id="user"
							label="Nutzer"
						/>
						<TextField
							id="pw"
							label="Passwort"
							type="password"
						/>
                        </Stack>
						<Link to="/mode_selector" style={{ textDecoration: 'none' }}>
							<Button variant="contained" disableElevation style={{textTransform: 'none'}} size="large">
								Einloggen
							</Button>
						</Link>
					</Stack>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Login;
