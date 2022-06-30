import { useState } from 'react'
import QuoteForm from "../quotes/QuoteForm"

const NewQuote = () => {

  const [isLoading, setIsLoading] = useState(false)


  const onAddQuote = (params) => {
    // setIsLoading(true)
    // const newQuote = params
    // let newId = (Math.random() + 1).toString(36).substring(7)
    // newQuote.id = newId
    // setQuotes(prevState => [...prevState, newQuote])
    // history.push(`quotes/${newId}`)
    // setIsLoading(false)
  }

  return (
    <QuoteForm onAddQuote={onAddQuote} isLoading={isLoading} />
  )
}

export default NewQuote