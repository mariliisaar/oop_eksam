import React, { Component } from 'react';
import QuestionDataService from "../services/question.service";

export default class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeHint = this.onChangeHint.bind(this);
        this.onChangeQuestionType = this.onChangeQuestionType.bind(this);
        this.onChangeQuestionnaire = this.onChangeQuestionnaire.bind(this);
        this.onChangeDeleted = this.onChangeDeleted.bind(this);
        this.saveQuestion = this.saveQuestion.bind(this);
        this.newQuestion = this.newQuestion.bind(this);

        this.state = {
            id: null,
            title: "",
            hint: "",
            question_type_id: null,
            questionnaire_id: null,
            deleted: null,

            submitted: false
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeHint(e) {
        this.setState({
            hint: e.target.value
        });
    }

    onChangeQuestionType(e) {
        this.setState({
            question_type_id: e.target.value
        });
    }

    onChangeQuestionnaire(e) {
        this.setState({
            questionnaire_id: e.target.value
        });
    }

    onChangeDeleted(e) {
        this.setState({
            deleted: new Date()
        });
    }

    saveQuestion() {
        let data = {
            title: this.state.title,
            hint: this.state.hint,
            question_type_id: this.state.question_type_id,
            questionnaire_id: this.state.questionnaire_id,
            deleted: this.state.deleted
        };

        QuestionDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    hint: response.data.hint,
                    question_type_id: response.data.question_type_id,
                    questionnaire_id: response.data.questionnaire_id,
                    deleted: response.data.deleted,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    newQuestion() {
        this.setState({
            id: null,
            title: "",
            hint: "",
            question_type_id: null,
            questionnaire_id: null,
            deleted: null,

            submitted: false
        });
    }

    render() {
        return(
            <div>
                {this.state.submitted ? (
                    <div>
                        <h4>Question successfully submitted</h4>
                        <button onClick={this.newQuestion}>Add</button>
                    </div>
                ) : (
                    <div>
                        <div>
                            <label htmlFor="title">Question *</label>
                            <input type="text" id="title" required value={this.state.title} onChange={this.onChangeTitle} name="title" />
                        </div>

                        <div>
                            <label htmlFor="hint">Hint</label>
                            <input type="text" id="hint" value={this.state.hint} onChange={this.onChangeHint} name="hint" />
                        </div>

                        <button onClick={this.saveQuestion}>Save</button>
                    </div>
                )}
            </div>
        )
    };
}