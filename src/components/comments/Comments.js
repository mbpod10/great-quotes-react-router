import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Comments.module.css';

import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = () => {

  const params = useParams()
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments)
  const { id } = params

  useEffect(() => {
    sendRequest(id)
  }, [sendRequest, id])

  const [isAddingComment, setIsAddingComment] = useState(false);


  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = () => {
  }

  let comments

  if (status === 'pending') {
    comments =
      <div className='centered'>
        <LoadingSpinner />
      </div>
  }

  if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments} />
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='centerd'>No Comments Were Added Yet</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={id} onAddedComment={addedCommentHandler} />}
      {/* {isAddingComment && <NewCommentForm quoteId={params.id} onAddedComment={startAddCommentHandler} />} */}
      {comments}
    </section>
  );
};

export default Comments;
