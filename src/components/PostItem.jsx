const PostItem = ({post, getSinglePost}) => {

    const handleClick = (e) => {
        getSinglePost(e.currentTarget.id)

    }


    return (
        <div className="post" id={post.id} onClick={handleClick}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
        
    )
}

export default PostItem