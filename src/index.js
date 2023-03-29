import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from 'react-router-dom';
import Login from './components/Login';
import ModeSelector from './components/ModeSelector';
import Completed from './components/Completed';
import Editor from './components/Editor';
import Waiting from './components/Waiting';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: 'mode_selector',
		element: <ModeSelector />,
	},
	{
		path: 'completed',
		element: <Completed />,
	},
	{
		path: 'editor',
		element: <Editor />,
	},
  {
		path: 'waiting',
		element: <Waiting />,
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
