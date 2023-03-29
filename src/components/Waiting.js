import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'




const Waiting = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
          navigate('/editor')
        }, 8000)
      }, [])

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
						<Stack spacing={2.5} alignItems="center">
						<CircularProgress />
						<Typography variant="h4" align="center">
                        “Ist man in kleinen Dingen nicht geduldig, bringt man die großen Vorhaben zum Scheitern.“ 
						</Typography>
                        <Typography variant="body" align="center">
								Konfuzius
							</Typography>
						</Stack>
					</Stack>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Waiting;
