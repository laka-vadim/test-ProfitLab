import "normalize.css";
import "./index.scss";
import {Form} from "./scripts/form";
import {Status} from "./scripts/status";
import cities from "./cities.json";

window.onload = function() {
    const form = new Form(document.forms.update);
    form.initCitiesList(cities);
    const status = new Status(document.getElementById("status-text"), document.getElementById("status-button"));
};