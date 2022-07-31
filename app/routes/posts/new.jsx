import { redirect } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const action = async ({ request }) => {
	const form = await request.formData();
	console.log(form.get('title'), form.get('body'));
	//return redirect('/posts');
};

const NewPost = () => {
	return (
		<>
			<div>
				<h1>New Post</h1>
				<Link to='/posts' className='btn btn-reverse'>
					Back
				</Link>
			</div>
			<div>
				<form method='POST'>
					<div>
						<label htmlFor='title'>Title</label>
						<input type='text' name='title' id='title'></input>
					</div>
					<div>
						<label htmlFor='body'>Post Body</label>
						<textarea name='body' id='body' />
					</div>
					<button className='btn btn-block' type='submit'>
						Add Post
					</button>
				</form>
			</div>
		</>
	);
};

export function ErrorBoundary({ error }) {
	console.log(error);
	return (
		<div>
			<h1>Error</h1>
			<div>{error.message}</div>
		</div>
	);
}

export default NewPost;
