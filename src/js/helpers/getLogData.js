const getLogData = logName => {
    const url = "http://localhost:8080/url";

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
}

module.exports = getLogData;