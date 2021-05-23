import React, { Component } from 'react';
import QuestionDataService from "../services/question.service";
import { Link } from "react-router-dom";

export default class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.retrieveQuestions = this.retrieveQuestions.bind(this);

        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        this.retrieveQuestions();
    }

    retrieveQuestions() {
        QuestionDataService.getAll()
            .then(response => {
                this.setState({
                    questions: response.data
                });
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const { questions, currentQuestion } = this.state;
        return(
            <div>
                <h4>Question List</h4>
                <ul>
                    {questions && questions.map((question, index) => (
                        <li key={index}>{question.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}