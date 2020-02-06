
export class Status {
    constructor(domNode, button) {
        this.status = domNode;
        this.button = button;
        this.input = document.createElement("input");
        this.input.setAttribute("type", "text");
        this.input.setAttribute("maxlength", 150);
        this.addListeners();
    }

    addListeners() {
        this.button.addEventListener("click", this.openInput);
    }

    openInput = () => {
        let value  = this.status.innerText;
        this.status.innerText = "";
        this.status.appendChild(this.input);
        this.input.value = value; 
        this.button.innerText = "Сохранить";
        this.button.removeEventListener("click", this.openInput);
        this.button.addEventListener("click", this.saveStatus);
    }

    saveStatus = () => {
        let value = this.input.value;
        this.status.innerHTML = "";
        this.status.innerText = value;
        this.button.removeEventListener("click", this.saveStatus);
        this.addListeners();
        this.button.innerText = "Сменить статус";
    }

}