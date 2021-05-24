import React, { Component } from 'react';
import QuestionDataService from "../services/question.service";

export default class Question extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeHint = this.onChangeHint.bind(this);
        this.onChangeQuestionType = this.onChangeQuestionType.bind(this);
        this.onChangeQuestionnaire = this.onChangeQuestionnaire.bind(this);
        this.onChangeDeleted = this.onChangeDeleted.bind(this);
        this.getQuestion = this.getQuestion.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);

        this.state = {
            currentQuestion: {
                id: null,
                title: "",
                hint: null,
                question_type_id: null,
                questionnaire_id: null,
                deleted: null,
                modified: null,
                modified_times: null
            }
        };
    }

    componentDidMount() {
        this.getQuestion(this.props.match.params.id);
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function(prevState) {
            return {
                currentQuestion: {
                    ...prevState.currentQuestion,
                    title: title
                }
            };
        });
    }

    onChangeHint(e) {
        const hint = e.target.value;

        this.setState(function(prevState) {
            return {
                currentQuestion: {
                    ...prevState.currentQuestion,
                    hint: hint
                }
            };
        });
    }

    onChangeQuestionType(e) {
        const question_type_id = e.target.value;

        this.setState(function(prevState) {
            return {
                currentQuestion: {
                    ...prevState.currentQuestion,
                    question_type_id: question_type_id
                }
            };
        });
    }

    onChangeQuestionnaire(e) {
        const questionnaire_id = e.target.value;

        this.setState(function(prevState) {
            return {
                currentQuestion: {
                    ...prevState.currentQuestion,
                    questionnaire_id: questionnaire_id
                }
            };
        });
    }

    onChangeDeleted(e) {
        const deleted = e.target.value;

        this.setState(function(prevState) {
            return {
                currentQuestion: {
                    ...prevState.currentQuestion,
                    deleted: deleted
                }
            };
        });
    }

    getQuestion(id) {
        QuestionDataService.get(id)
            .then(response => {
                this.setState({
                    currentQuestion: response.data
                });
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    updateQuestion() {
        QuestionDataService.update(
            this.state.currentQuestion.id,
            this.state.currentQuestion
        )
            .then(response => {
                console.log(response.data);
                this.getQuestion(this.state.currentQuestion.id);
                this.setState({
                    message: "The question was updated successfully."
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const { currentQuestion } = this.state;

        return(
            <div>
                {currentQuestion ? (
                    <div>
                        <h4>Question</h4>
                        <form>
                            <div>
                            <label htmlFor="title">Question</label>
                                <input type="text" id="title" value={currentQuestion.title} onChange={this.onChangeTitle} name="title" />
                            </div>

                            <div>
                                <label htmlFor="hint">Hint</label>
                                <input type="text" id="hint" value={(currentQuestion.hint == null ? "" : currentQuestion.hint)} onChange={this.onChangeHint} name="hint" />
                            </div>

                            <div>
                                <label htmlFor="type">Question Type</label>
                                <input type="text" id="type" value={(currentQuestion.question_type_id == null ? "" : currentQuestion.question_type_id)} onChange={this.onChangeQuestionType} name="type" />
                            </div>
                        </form>

                        <button type="submit" onClick={this.updateQuestion}>Update</button>
                        <p>{this.state.message}</p>
                        <p>Modified {(currentQuestion.modified_times == null ? 0 : currentQuestion.modified_times)} times. {(currentQuestion.modified != null ? `Last update on: ${currentQuestion.modified}.` : "")}</p>
                    </div>
                ) : (
                    <div>
                        <p>Please choose a question...</p>
                    </div>
                )}
            </div>
        );
    }
}