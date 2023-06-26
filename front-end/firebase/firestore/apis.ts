export async function addPins(pins: Array<any>) {
    const apiUrl = "http://localhost:5000/api/user/pins";
    const token = localStorage.getItem('Idtoken')
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": token },
        body: JSON.stringify({ pins: pins }),
    };

    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();

    return data;
}

export async function getUsers() {
    const apiUrl = "http://localhost:5000/api/user/getAllUsers";
    const token = localStorage.getItem('Idtoken')
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": token },
    };

    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();

    return data;
}


export async function sendAvatar(file:File){
    if(!file){
        return;
    }
    const apiUrl = "http://localhost:5000/api/user/avatar";
    const token = localStorage.getItem('Idtoken')
    const requestOptions = {
        method: "POST",
        body: file,
        headers: { "Content-Type": file.type, "content-length": `${file.size}`, "Authorization": token },
    };

    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    return data;
}