import React from 'react';
import {Layout} from 'antd';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {Navbar} from "./app/components/navbar/Navbar";
import {HomePage} from "./app/pages/homepage/HomePage";
import {useSelector} from "react-redux";
import {RegistrationPage} from "./app/pages/registration/RegistrationPage";
import {ProtectedRoute} from "./app/components/routes/ProtectedRoute";
import {ProcedurePage} from "./app/pages/main/ProcedurePage";
import {MasterPage} from "./app/pages/master/MasterPage";
import {SignPage} from "./app/pages/sign/SignPage";

const App = () => {
    const user = useSelector(store => store.user);

    console.log(user)

    return (
        <HashRouter>
            <Navbar/>
            <Layout>
                <Switch>
                    {!user.userCredentials
                        ? <Route path='/' component={HomePage} exact={true}/>
                        : <Route path='/' component={ProcedurePage} exact={true}/>
                    }
                    <Route path={'/registration'} component={RegistrationPage}/>
                    <ProtectedRoute
                        component={ProcedurePage}
                        path={'/procedures'}
                        isAuth={!!user.userCredentials}
                    />
                    <ProtectedRoute
                        component={MasterPage}
                        path={'/masters'}
                        isAuth={!!user.userCredentials}
                    />
                    <ProtectedRoute
                        component={SignPage}
                        path={'/sign'}
                        isAuth={!!user.userCredentials}
                    />
                </Switch>
            </Layout>
        </HashRouter>
    );
}

export default App;
