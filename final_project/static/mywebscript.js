const translateToFrench = () => {
    const textToTranslate = document.getElementById("textToTranslate").value;

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("translated_text").innerHTML = xhttp.responseText;
        }
    };

    const url = `englishToFrench?textToTranslate=${encodeURIComponent(textToTranslate)}`;
    xhttp.open("GET", url, true);
    xhttp.send();
};

const translateToEnglish = () => {
    const textToTranslate = document.getElementById("textToTranslate").value;

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("translated_text").innerHTML = xhttp.responseText;
        }
    };

    const url = `frenchToEnglish?textToTranslate=${encodeURIComponent(textToTranslate)}`;
    xhttp.open("GET", url, true);
    xhttp.send();
};
