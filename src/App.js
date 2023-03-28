import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Login from './components/Login';
import Container from '@mui/material/Container';

function App() {
	return (
		<div style={{ display:'flex', justifyContent:'center', alignItems:"center" }}>
			<Login />
		</div>
	);
}

export default App;
