import React from 'react';
//global Style
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import AboutUs from './pages/AboutUs';
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
// Router
import { Switch, Route } from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <Switch>
                <Route exact path="/">
                    <AboutUs/>
                </Route>
                <Route exact path="/work">
                    <OurWork/>
                </Route>
                <Route path="/work/:id">
                    <MovieDetail/>
                </Route>
                <Route exact path="/contact">
                    <ContactUs/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
