import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavbarMenuListFC from "./components/NavbarMenuListFC";
import { Redirect } from "react-router";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {
                    NavbarMenuListFC.map((m, i) => {
                        return <Route key={i} exact path={m.path} component={m.component} />;
                    })
                }
                <Route
                    key="home"
                    exact
                    path="/"
                    render={() => {
                        return <Redirect to="/home" />
                    }}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;