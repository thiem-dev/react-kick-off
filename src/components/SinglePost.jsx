import Button from './Button'

const SinglePost = ({singlePost, clearSinglePost}) => {
    return (
        <div className="post">
            <h1>{singlePost.title}</h1>
            <p>{singlePost.body}</p>
            <Button clearSinglePost={clearSinglePost} />
        </div>
    )
}   

export default SinglePost