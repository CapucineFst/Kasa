import Home from './pages/Home';
import Accomodation from './pages/Accomodation';
import About from './pages/About';

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