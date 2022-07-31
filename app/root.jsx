//import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Outlet, LiveReload, Link } from '@remix-run/react';

export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet />
			</Layout>
		</Document>
	);
}

function Document({ children, title }) {
	return (
		<html lang='en'>
			<head>
				<title>Learn Remix</title>
			</head>
			<body>
				{children}
				{process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
			</body>
		</html>
	);
}

function Layout({ children }) {
	return (
		<>
			<nav className='navbar'>
				<Link to='/' className='logo'>
					Remix
				</Link>
				<ul>
					<li>
						<Link to='/posts'>Posts</Link>
					</li>
				</ul>
			</nav>
			<div className='container'>{children}</div>
		</>
	);
}

export function ErrorBoundary({ error }) {
	console.log(error);
	return (
		<Document>
			<Layout>
				<h1>Error</h1>
				<div>{error.message}</div>
			</Layout>
		</Document>
	);
}

/* export const meta = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
	return (
		<html lang='en'>
			<head>
				<Meta />

				<Links />
			</head>

			<body>
				<Outlet />

				<ScrollRestoration />

				<Scripts />

				<LiveReload />
			</body>
		</html>
	);
}
 */
