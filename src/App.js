import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./ui/components/layout/Layout";
import Badges from "./ui/pages/badges/Badges";
import BadgeNew from "./ui/pages/badges/new/BadgeNew";
import PageNotFound from "./ui/pages/error/PageNotFound";
import Loader from "./ui/components/loader/Loader";
import ServerError from "./ui/pages/error/ServerError";
import BadgeEdit from "./ui/pages/badges/edit/BadgeEdit";
import BadgeDetails from "./ui/pages/badges/details/BadgeDetails";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Badges}/>
                    <Route exact path="/loader" component={Loader}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:id/edit" component={BadgeEdit}/>
                    <Route exact path="/badges/:id" component={BadgeDetails}/>
                    <Route exact path="/error/503" component={ServerError}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;