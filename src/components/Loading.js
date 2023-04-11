import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import Frame from './Frame';

const Loading = () => {
	useEffect(() => {
		setTimeout(() => {
			//   navigate('/editor')
		}, 8000);
	}, []);

	return (
		<Frame>
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
		</Frame>
	);
};

export default Loading;
