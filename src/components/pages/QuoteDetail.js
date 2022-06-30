import React from 'react'
import { useParams, Route } from 'react-router-dom'
import Comments from "../comments/Comments"
import HighlightedQuote from "../quotes/HighlightedQuote"
import NoQuotesFound from "../quotes/NoQuotesFound"

const QuoteDetail = () => {

  const quotes = [
    { id: "q1", author: 'Harbard', text: "Incredible Quote" },
    { id: "q2", author: 'Odin', text: "Let Him Go" },
  ]

  const params = useParams()

  const quote = quotes.find(quote => quote.id === params.id)

  return (
    <>
      {quote && <HighlightedQuote text={quote.text} author={quote.author} />}
      {!quote && <NoQuotesFound />}
      <Route path={`/quotes/${params.id}/comments`} >
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetail