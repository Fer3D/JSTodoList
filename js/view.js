export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById("table");
        const btn = document.getElementById("add");
        btn.onclick = function () {
            this.addTodo("Title", "Description");
        };
    }
    setModel(model) {
        this.model = model;
    }
    addTodo(title, description) {
        console.log(title, description);
    }
}