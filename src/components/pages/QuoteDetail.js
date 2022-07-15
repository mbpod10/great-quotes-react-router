import React, { useEffect } from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from "../comments/Comments"
import HighlightedQuote from "../quotes/HighlightedQuote"
import NoQuotesFound from "../quotes/NoQuotesFound"

import useHttp from '../../hooks/use-http'
import { getSingleQuote } from '../../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner'

const QuoteDetail = () => {
  const match = useRouteMatch()
  const params = useParams()
  const { id } = params

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(id)
  }, [sendRequest, id])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className='centered'>{error}</p>
  }

  return (
    <>
      {loadedQuote.text &&
        (
          <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={`/quotes/${params.id}`} exact>
              <div className='centered'>
                <Link className='btn--flat' to={`/quotes/${params.id}/comments`}>View Comments</Link>
              </div>
            </Route>
          </>
        )
      }
      {!loadedQuote.text && <NoQuotesFound />}
      <Route path={`${match.path}/comments`} >
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetail