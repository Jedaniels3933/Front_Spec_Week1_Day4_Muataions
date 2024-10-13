import React from 'react'

const DisplayPosts = () => {


    const { data, status } = useQuery("posts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return response.json()
    })

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (status === "error") {
        return <div>Error fetching data</div>
    }




  return (
    <div>
      <h1>Display Posts</
  )
}

export default DisplayPosts
