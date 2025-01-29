const lf_base_url = 'https://{ INSTANCE DOMAIN }';
const lf_manifestation_id = '{ INSTANCE MANIFESTATION ID }';
function loadEvents() {
    var url = lf_base_url + "/modulo-eventi?id_manifestazione=" + lf_manifestation_id;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            setInnerHTML(document.getElementById("lf-events"), data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
function setInnerHTML(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script"))
        .forEach(oldScriptEl => {
            const newScriptEl = document.createElement("script");
            Array.from(oldScriptEl.attributes).forEach(attr => {
                newScriptEl.setAttribute(attr.name, attr.value)
            });
            const scriptText = document.createTextNode(oldScriptEl.innerHTML);
            newScriptEl.appendChild(scriptText);
            oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
        });
}
window.onload = function () {
    loadEvents();
}