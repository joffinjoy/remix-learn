//import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Outlet, LiveReload } from '@remix-run/react';

export default function App() {
	return (
		<Document>
			<Outlet />
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
