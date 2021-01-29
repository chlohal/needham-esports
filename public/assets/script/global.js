function clearToTwoChild(elem) {
    while(elem.children.length > 2) elem.removeChild(elem.children[1]);
}
function clearToNoChild(elem) {
    while(elem.children.length > 0) elem.removeChild(elem.children[0]);
}