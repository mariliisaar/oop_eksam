import http from "../http-common";

class QuestionDataService {
    getAll() {
        return http.get("/question");
    }

    get(id) {
        return http.get(`/question/${id}`);
    }

    create(data) {
        return http.post("/question", data);
    }

    update(id, data) {
        return http.put(`/question/${id}`, data);
    }
}

export default new QuestionDataService();