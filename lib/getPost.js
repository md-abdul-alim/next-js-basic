export default async function getPost(id){
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            cache: "no-store"
        }
    )
    return result.json();
} 