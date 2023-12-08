import PostItem from './PostItem'

const Posts = ({posts, getSinglePost}) => {
    return posts.map((post) => (
        <PostItem post={post}
         key={post.id}
         getSinglePost={getSinglePost}
         />
    ))
}

export default Posts