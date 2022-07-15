import { useEffect } from "react"
import { useHistory } from "react-router-dom"

import QuoteForm from "../quotes/QuoteForm"

import useHttp from "../../hooks/use-http"
import { addQuote } from "../../lib/api"

const NewQuote = () => {
  const history = useHistory()

  const { status, sendRequest } = useHttp(addQuote)

  useEffect(() => {
    if (status === "completed") {
      history.push('/quotes')
    }
  }, [history, status])

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData)

  }

  return (
    <QuoteForm isLoading={status === 'pending'}
      onAddQuote={addQuoteHandler} />

  )
}

export default NewQuote