const getToken = (user, password) => {
	console.log(
		'send post request to login endpoint with user: ' +
			user +
			' and password: ' +
			password
	);
	return {value: '1ef4', expiration: new Date()};
};

export default { getToken };
