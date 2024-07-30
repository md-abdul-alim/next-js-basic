import getPost from '@/lib/getPost';
import getPostComment from '@/lib/getPostComment';
import Comments from '@/app/components/Comments';
import React, { Suspense } from 'react';

export async function generateMetadata({ params }){
  // de duplication api request. if once request a api next js.
  // It will not request the same request.
  // So we can call the same api as we need.

  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostPage({ params }) {
    const { id } = params;

    const postPromise = getPost(id);
    const commentsPromise = getPostComment(id);
  
    // Call api paralally for avoiding waterfall request. Meaning avoid one by one request.
    // const [post, comments] = await Promise.all([
    //   postPromise,
    //   commentsPromise
    // ]);

    const post = await postPromise;

  return (
    <div className='mt-6'>
      <h2 className='text-blue-500'>{post.title}</h2>
      <p className='mt-3'>{post.body}</p>
      <hr />

      <Suspense fallback="<h1>Loading comments...</h1>">
        <Comments promise={commentsPromise} />      
      </Suspense>

    </div>
  )
}
