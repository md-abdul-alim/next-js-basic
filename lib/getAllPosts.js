export default async function getAllPosts(){
    const result = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
        {
            next: {
                revalidate: 10,
            }
        }
    )
    // here revalidate means. next js will call the api personally in every 10 second for checking new data.
    if(!result.ok){
        throw new Error("There was an error fetching posts.")
    }

    return result.json();

} 