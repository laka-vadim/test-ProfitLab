
export class API {
    constructor(host) {
        this.host = host;
    }

    sendForm(data) {
        return fetch(this.host, {
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
    }
}