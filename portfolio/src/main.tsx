import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './client/routes/App.tsx'
import './client/theme/index.css'
// importar/configurar o react-router-dom
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
// Import Pages
import { Home } from './client/screens/Home.tsx'
import { AboutMe } from './client/screens/AboutMe.tsx'
import {ErrorPage} from './client/screens/ErrorPage.tsx'


// criação da const function
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,	
		// Pagina de erro
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
