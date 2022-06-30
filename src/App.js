import { Route, Switch } from "react-router-dom";

import classes from "./components/layout/Layout.module.css"

import MainNavigation from "./components/layout/MainNavigation";
import QuoteList from "./components/quotes/QuoteList";
import QuoteForm from "./components/quotes/QuoteForm"
import HighlightedQuote from "./components/quotes/HighlightedQuote";

function App() {

  const quotes = [
    { id: 1, author: 'Harbard', text: "Incredible Quote" },
    { id: 2, author: 'Odin', text: "Let Him Go" },
  ]

  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>
        <Switch>
          <Route path="/quotes" exact>
            <QuoteList quotes={quotes} />
          </Route>
          <Route path="/quotes/:id" >
            {/* <HighlightedQuote /> */}
            <HighlightedQuote id={1} author="Hardbard" text="Let Him Go" />
          </Route>
          <Route path="/new-quote" >
            <QuoteForm />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;