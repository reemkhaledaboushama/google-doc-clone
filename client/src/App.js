import TextEditor from "./TextEditor";
import {
BrowserRouter as Router, 
Switch, Route, Redirect  //navigate -> redirect, and routes -> switch in v6 and above
} from 'react-router-dom'
import { v4 as uuidV4} from 'uuid'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
        <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id">
          <TextEditor/>
        </Route>

      </Switch>
   </Router>
  )
}

export default App
