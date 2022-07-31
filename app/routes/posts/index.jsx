import { useLoaderData, Link } from '@remix-run/react';
import posts from '../posts';

export const loader = () => {
	const data = {
		posts: [
			{ id: 1, title: 'Post 1', body: 'Post body 1' },
			{ id: 2, title: 'Post 2', body: 'Post body 2' },
			{ id: 3, title: 'Post 3', body: 'Post body 3' },
		],
	};
	return data;
};

function PostItems() {
	const { posts } = useLoaderData();
	return (
		<>
			<h1>Posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={post.id}>
							<h3>{post.title}</h3>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default PostItems;
