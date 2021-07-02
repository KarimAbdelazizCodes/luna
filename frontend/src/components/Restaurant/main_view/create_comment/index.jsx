import {CommentWrapper} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {fetchComments} from "../../../../store/actions/review_comments";
import {CreateComment} from "../../../../store/actions/new_comment";
import { withRouter } from "react-router";

const Comments = props => {

    const dispatch = useDispatch()
    const comments = useSelector(state => state.defaultReducer.comments)
    const commentRef = useRef()

    useEffect(() => {
        // clears the state then dispatch new comments
        const action = {
            type: 'REVIEW_COMMENTS',
            payload: []
        }
        dispatch(action)
        dispatch(fetchComments(props.id))
    },[dispatch])

    const handleSubmit = (e) => {
        const token = localStorage.getItem('token')
        if (token) {
            e.preventDefault()
            const text = commentRef.current.value
            dispatch(CreateComment(props.id, text))
            commentRef.current.value = ''
        } else {
            props.history.push('/signin')
        }

    }

    return (
        <CommentWrapper>
            <div className="upper">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Write a comment..." ref={commentRef}/>
                    <button type="submit">Post</button>
                </form>
                <span className="hide-comments" onClick={()=>props.hide(false)}>Hide</span>
            </div>
            { comments ? comments.map(comment =>
                <div className="comment-container">
                    <div className="comment-left">
                        <span className="commenter">{comment.author.first_name} {comment.author.last_name}</span>
                        <span className="comment-text">{comment.text}</span>
                    </div>
                    <span className="time-stamp">{comment.created}</span>
                </div>
            ) : null}
        </CommentWrapper>
    )
}

export default withRouter(Comments)