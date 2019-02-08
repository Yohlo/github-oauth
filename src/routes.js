import React  from "react";
import { Route } from "react-router-dom";
import Authorization from './components/Authorization';
import { Login, Success, Error } from './components/OAuth';
import Layout from './components/Layout';
import Home from './components/Home';

const routes = (
    <Layout>
        <Route exact path="/" component={(props) =>
            <Authorization
                Component={Home} {...props} />
        } />
        <Route exact path="/OAuth"
          component={Login}
        />
        <Route exact path="/OAuth/Error"
          component={Error}
        />
        <Route exact path="/OAuth/Success"
          component={Success}
        />
    </Layout>
);

export default routes