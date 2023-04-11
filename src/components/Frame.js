// import '../App.css';
// import { CSSTransition } from 'react-transition-group';

import Box from '@mui/material/Box';

const Frame = (props) => {
	return (
		// <CSSTransition in={true} classNames="transition" timeout={5000}>
			<Box
				{...props}
				sx={{
					borderRadius: 6,
					backgroundColor: 'white',
					p: 6,
					m: 4,
				}}
			/>
		// </CSSTransition>
	);
};

export default Frame;
