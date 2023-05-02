import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import Error from './pages/Error';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/Kasa/",
		element: <Home />
	},
	{
		path: "/about",
		element: <About />
	},
	{
		path: "/accomodation/:id",
		element: <Accomodation />
	},
	{
		path: "*",
		element: <Error />
	}
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
