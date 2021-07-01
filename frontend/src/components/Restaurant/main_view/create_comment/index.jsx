import {CommentWrapper} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchComments} from "../../../../store/actions/review_comments";

const Comments = props => {

    const dispatch = useDispatch()
    const comments = useSelector(state => state.defaultReducer.comments)

    useEffect(() => {
        // clears the state then dispatch new comments
        const action = {
            type: 'REVIEW_COMMENTS',
            payload: []
        }
        dispatch(action)
        dispatch(fetchComments(props.id))
    },[dispatch])

    return (
        <CommentWrapper>
            <div className="upper">
                <form>
                    <input type="text" placeholder="Write a comment..."/>
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

export default Comments