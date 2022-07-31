import { useParams } from '@remix-run/react';

function Post() {
	const params = useParams();
	return <div>Post: {params.postId}</div>;
}

export default Post;
