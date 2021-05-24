import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Layout from '../components/layout';
import QuestionList from '../components/list-question.component';
import Question from '../components/question.component';
import AddQuestion from '../components/add-question.component';

import Home from './home';
import Questionnaire from './questionnaire';

const Views = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path={["/", "/question"]} component={ QuestionList } />
                    <Route exact path={"/question/:id"} component={ Question } />
                    <Route exact path={"/add"} component={ AddQuestion } />
                    {/* <Route exact path="/" component={ Home } /> */}
                    <Route path="/questionnaire" component={ Questionnaire } />
                </Switch>
            </Layout>
        </Router>
    );
};

export default Views;