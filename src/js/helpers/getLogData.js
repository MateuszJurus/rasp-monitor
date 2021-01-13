const getLogData = async logName => {
    const url = "http://localhost:8080/url";
    let res;
    await fetch(url)
        .then(response => response.json())
        .then(data => {res = data})

    return res;
}

export default getLogData;