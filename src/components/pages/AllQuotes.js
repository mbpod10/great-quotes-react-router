import React from 'react'
import { useState } from "react";
import QuoteList from '../quotes/QuoteList';


const AllQuotes = () => {
  const quoting = [
    { id: "q1", author: 'Harbard', text: "Incredible Quote" },
    { id: "q2", author: 'Odin', text: "Let Him Go" },
  ]

  const [quotes, setQuotes] = useState(quoting)
  return (
    <QuoteList quotes={quotes} />
  )
}

export default AllQuotes