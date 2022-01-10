import { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostProvider";
import "./Post.css"
import { useNavigate, useParams } from "react-router-dom";

export const PostForm = () => {
    const { getPosts, addPost, getPostById, updatePost, deletePosts } = useContext(PostContext)
    const { isLoading, setIsLoading} = useState(true);
    const {postsID} = useParams
    const [post, setPost] = useState ({})
const navigate = useNavigate()

const handleControlledInputChange = (event) => {
const newPost = { ...post }
newPost[event.target.id] = event.target.checked ? event.target.checked : event.target.value
setPost(newPost)
}

const handleClickSavePost = () => {
    setIsLoading(true)
    if (postsID) {
        updatePost({
            id: +post.id,
            comment: post.comment,
            userID: post.userID
        })
        .then(() => navigate(`/posts/${post.id}`))
    } else {
        addPost({
            id: +post.id,
            comment: post.comment,
            userID: post.userID
        })
    .then(() => navigate(`/posts/${post.id}`))
    }
}

const handleRelease = () => {
    deletePosts(post.id)
      .then(() => {
        navigate("/posts")
      })
  }

useEffect(() => {
    getPosts().then(() => {
      if (postsID){
        getPostById(postsID)
        .then(post => {
            setPost(post)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    })
  }, [])
return (
    <form className="postForm">
        <h2 className="postForm_title">New Post</h2>
        <fieldset>
            <div className="form-post">
                <label htmlFor="post">Create Post</label>
                <input type="text" id="comment" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Post Comment" value={post.comment}/>
            </div>
        </fieldset>
        <button className="form-save"
        onClick={event => {
            event.preventDefault()
            handleClickSavePost()
          }}>
            {postsID ? <>Save Changes</> : <>Save New</>}
        </button>
    </form>
)
}