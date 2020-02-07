
export class API {
    constructor(host) {
        this.host = host;
    }

    sendForm(data) {
        fetch(this.host, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (res.ok) return res.json();
            else {
                throw new Error(`Ошибка: ${res.status}`);
                
            }
        })
        .then((res) => {
            alert(`TITLE: ${res.title}, CITY: ${res.city}, EMAIL: ${res.email}`)})
        .catch(err => alert(err.message));
    }
}