import React from 'react';
import { Navbar } from '../components/ui/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';

export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/hero/:heroId" component={ HeroScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>

        </>
    )
}
