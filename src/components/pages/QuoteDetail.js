import React from 'react'
import { useParams, Route } from 'react-router-dom'
import Comments from "../comments/Comments"
import HighlightedQuote from "../quotes/HighlightedQuote"

const QuoteDetail = () => {

  const quotes = [
    { id: "q1", author: 'Harbard', text: "Incredible Quote" },
    { id: "q2", author: 'Odin', text: "Let Him Go" },
  ]

  const params = useParams()

  const quoteDetail = quotes.find(quote => quote.id === params.id)

  return (
    <>
      <HighlightedQuote text={quoteDetail.text} author={quoteDetail.author} />
      <Route path={`/quotes/${params.id}/comments`} >
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetail