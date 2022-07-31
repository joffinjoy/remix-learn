import { Outlet } from '@remix-run/react';

const posts = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default posts;
