
export class Form {
    constructor(domNode) {
        this.form = domNode;
        this.city = this.form.elements.city;
        this.pass = this.form.elements.pass;
        this.repass = this.form.elements.repass;
        this.email = this.form.elements.email;
        this.addListeners(this.form);

    }

    initCitiesList(list) {
        list = list.filter(elem => elem.population >= 50000);
        list.sort((a, b) => a.city.toLowerCase() > b.city.toLowerCase() ? 1 : -1);
        const biggestCitesIndex = list.reduce((prev, elem, index, array) => {
            if (+elem.population > +array[prev].population) return index;
            return prev;
        }, 0);
        list = list.map(elem => elem.city);
        list.unshift(list[biggestCitesIndex]);
        list.splice(biggestCitesIndex + 1, 1);
        this.renderCitiesList(list);
    };

    renderCitiesList(list) {
        list.forEach(element => {
            const option = document.createElement("option");
            option.innerText = element;
            this.city.appendChild(option);
        });
    }
    
    validationPass = (event) => {
        if (!event.target.value.length) {
            this.renderErr(event.target, "empty");
            return false;
        } else if (event.target.value.length < 5) {
            this.renderErr(event.target, "short");
            return false
        } else {
            this.renderErr(event.target, "");
            return true;
        };
    }

    validationRePass = (event) => {
        if (!event.target.value.length) {
            this.renderErr(event.target, "empty");
            return false;
        } else if (event.target.value != this.pass.value) {
            this.renderErr(event.target, "equal");
            return false
        } else {
            this.renderErr(event.target, "");
            return true;
        };
    }

    validationEmail = (event) => {
        if (!event.target.value.length) {
            this.renderErr(event.target, "empty-mail");
            return false;
        } else if (!/^.+@.+\..+$/.exec(event.target.value)) {
            this.renderErr(event.target, "is-mail");
            return false;
        } else {
            this.renderErr(event.target, "");
            return true;
        };
    }

    validation() {
        if (this.validationPass({target: this.pass}) &&
            this.validationRePass({target: this.repass}) &&
            this.validationEmail({target: this.email})) {
                return true;
            } else return false;
    }

    renderErr(elem, err) {
        const errClass = elem.parentNode.classList.item(1);
        if (err) {
            if (errClass) elem.parentNode.classList.remove(errClass);
            elem.classList.add("input__field_error");
            elem.parentNode.classList.add(`input__field-wrapper_error-${err}`);
        } else {
            elem.classList.remove("input__field_error");
            if (errClass) elem.parentNode.classList.remove(errClass);
        }
        
    }

    addListeners(form) {
        form.addEventListener("submit", this.sendForm);
        pass.addEventListener("blur", this.validationPass);
        repass.addEventListener("blur", this.validationRePass);
        email.addEventListener("blur", this.validationEmail);
    }

    sendForm = (event) => {
        event.preventDefault();
        if (this.validation()) {
            console.log("sendForm() ok");
        } else console.log("sendForm() bad");
        
        
    }
    
}