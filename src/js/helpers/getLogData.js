//Get content of a log file and serve at /url
const getLogData = async logName => {
    const url = window.location.href + "url";
    let res;
    await fetch(url)
        .then(response => response.json())
        .then(data => {res = data})

    return res;
}

export default getLogData;