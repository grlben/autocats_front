import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Frame = (props) => {
	return (
		<Grid
			container
			pacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			style={{ minHeight: '100vh' }}
		>
			<Grid item xs={3}>
				<Box
					{...props}
					sx={{
						borderRadius: 6,
						backgroundColor: 'white',
						p: 6,
						m: 4,
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default Frame;
