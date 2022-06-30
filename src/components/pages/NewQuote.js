import { useState } from 'react'
import QuoteForm from "../quotes/QuoteForm"
import { useHistory } from 'react-router-dom'

const NewQuote = () => {

  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const onAddQuote = (params) => {
    // setIsLoading(true)
    // const newQuote = params
    // let newId = (Math.random() + 1).toString(36).substring(7)
    // newQuote.id = newId
    // setQuotes(prevState => [...prevState, newQuote])
    // setIsLoading(false)
    history.push(`/quotes`)

  }

  return (
    <QuoteForm onAddQuote={onAddQuote} isLoading={isLoading} />
  )
}

export default NewQuote