
function stringToHex(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16).padStart(2, '0');
    }
    return hex;
}

function myFunction() {
    var res = document.getElementById('myInput').value;
    const result = stringToHex(res);
    document.getElementById('output').innerHTML = result.toLocaleUpperCase();
}
