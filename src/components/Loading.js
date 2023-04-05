import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
	useEffect(() => {
		setTimeout(() => {
			//   navigate('/editor')
		}, 8000);
	}, []);

	return (
		<Stack spacing={4} alignItems="center" width={720}>
			<Stack spacing={2.5} alignItems="center">
				<CircularProgress />
				<Typography variant="h4" align="center">
					“Ist man in kleinen Dingen nicht geduldig, bringt man die großen
					Vorhaben zum Scheitern.“
				</Typography>
				<Typography variant="body" align="center">
					Konfuzius
				</Typography>
			</Stack>
		</Stack>
	);
};

export default Loading;
