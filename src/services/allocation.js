import axios from 'axios';

// const baseUrl = 'https://aap-fo-aep-test.corp.transmission-it.de/';
const baseUrl = 'http://127.0.0.1:8007/';

const getAllocation = (token, monthStart) => {
	console.log(
		'Send get request to allocation endpoint for ' +
			monthStart +
			' and token: ' +
			token
	);

	// const request = axios.get(baseUrl + 'api/v1/get_target_hours', {
	// 	params: { cookie_key: token, start: monthStart },
	// });

	// return request.then((response) => response.data);

	const dummyAlloc = [
		{ name: 'Offshore CAPEX Overhead - SL-05020-02-01', allocation: 0.25 },
		{
			name: 'IN.20WDBAC01.02 \u00fcbergr. Lstg. - 52A000015735/0010',
			allocation: 0.25,
		},
		{
			name: 'Onshore CAPEX Infra-Projekte (Overhead) - SL-05020-01-01',
			allocation: 0.15,
		},
		{
			name: 'IN.19WDBAC03.02 \u00fcbergr. Lstg. - 52A000015705/0010',
			allocation: 0.05,
		},
		{
			name: 'IN.17WDBAC01.04 CWA 2 OSS Baltic Eagle - 52A000015663/0010',
			allocation: 0.0,
		},
		{ name: 'IN.20WDBAC01.05 OSS 2 - 52A000015738/0010', allocation: 0.0 },
		{ name: 'Strompreisbremse Personal - SL-05020-08-01', allocation: 0.0 },
		{
			name: 'WGR_HZT_01 - Permanent Services - SL-05020-07-01',
			allocation: 0.0,
		},
		{ name: 'KWK Personal - SL-05020-04-01', allocation: 0.0 },
		{ name: 'EEG Personal - SL-05020-03-01', allocation: 0.0 },
		{ name: 'Offshore OPEX Overhead - SL-05020-02-02', allocation: 0.0 },
		{
			name: 'IN.17WDBAC01.03 CWA 2 Kabel - 52A000015662/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.22WCNDC02.02 NOR-11-1 \u00fcbergr. Lstg. - 52A000015839/0010',
			allocation: 0.0,
		},
		{ name: 'IN.20WDBAC01.21 Leitung - 52A000015740/0010', allocation: 0.0 },
		{ name: 'IN.20WDBAC01.11 UW Sanitz - 52A000015739/0010', allocation: 0.0 },
		{ name: 'IN.20WDBAC01.04 OSS 1 - 52A000015737/0010', allocation: 0.0 },
		{
			name: 'IN.17WDBAC01.05 CWA 2 OSS Arcadis Ost 1 - 52A000015664/0010',
			allocation: 0.0,
		},
		{ name: 'IN.20WDBAC01.03 Kabel - 52A000015736/0010', allocation: 0.0 },
		{
			name: 'IN.17WDBAC01.02 CWA 2 \u00fcbergr. Lstg. - 52A000015661/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.20WDBAC01.01 Genehmigung/Kompensation - 52A000015734/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.19WDBAC03.21 Leitung (Einschleifung) - 52A000015709/0010',
			allocation: 0.0,
		},
		{ name: 'IN.19WDBAC03.11 UW Stilow - 52A000015708/0010', allocation: 0.0 },
		{ name: 'IN.19WDBAC03.04 OSS - 52A000015707/0010', allocation: 0.0 },
		{ name: 'IN.19WDBAC03.03 Kabel - 52A000015706/0010', allocation: 0.0 },
		{
			name: 'IN.19WDBAC03.01 Gen./Kompensation - 52A000015704/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.17WDBAC01.21 CWA 2 Leitungseinschlfg. - 52A000015666/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.17WDBAC01.11 CWA 2 UW Lubmin - 52A000015665/0010',
			allocation: 0.0,
		},
		{
			name: 'IN.17WDBAC01.01 CWA 2 Gen./Kompensation - 52A000015660/0010',
			allocation: 0.0,
		},
	];

	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(dummyAlloc), 2000);
	});
};

const postAllocation = (token, monthStart, alloc) => {
	console.log(
		'Send post request to allocation endpoint for ' +
			monthStart +
			', token: ' +
			token +
			' and payload: ',
		alloc
	);

	const request = axios.post(baseUrl + 'api/v1/set_hours_per_task', alloc, {
		params: { cookie_key: token, start: monthStart },
	});

	return request.then((response) => response.data);
};

const copyPreviousMonth = (token, monthStart) => {
	console.log(
		'Send post request to allocation endpoint for ' +
			monthStart +
			' and token: ' +
			token +
			' to copy previous month'
	);

	const request = axios.post(
		baseUrl + 'api/v1/set_hours_from_previous_month',
		null,
		{
			params: { cookie_key: token, start: monthStart },
		}
	);

	return request.then((response) => response.data);
};

export default { getAllocation, postAllocation, copyPreviousMonth };
