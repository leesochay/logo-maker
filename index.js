// function init () {

function image(title, type) {
    this.title = title;
    this.type = type;
    this.nap = function () {
        return this.title;
    };
    this.noNap = function () {
        console.log(type);
    };
}

module.exports = image;
