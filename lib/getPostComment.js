export default async function getPostComment(id){
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        {
            cache: 'force-cache'
        }
    )
    return result.json();
} 