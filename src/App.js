import React from 'react';
import Navbar from './components/Navbar';
import AccountProfile from './components/AccountProfile'
import AccountForm from './components/AccountForm'
import { Container, } from 'semantic-ui-react';
import { Switch, Route, } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" render={ () => <div>Home</div> } />
          <Route exact path="/account/profile" render={ () => <AccountProfile />} />
          <Route exact path="/account/new" render={ () => <AccountForm />} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
