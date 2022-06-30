import { Route, Switch, Redirect } from "react-router-dom";

import QuoteDetail from "./components/pages/QuoteDetail";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import Layout from "./components/layout/Layout";

function App() {

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:id" >
          <QuoteDetail id={1} author="Hardbard" text="Let Him Go" />
        </Route>
        <Route path="/new-quote" >
          {/* <NewQuote onAddQuote={onAddQuote} isLoading={isLoading} /> */}
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;