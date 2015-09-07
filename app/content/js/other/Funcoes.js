String.prototype.lpad = function (padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
}

function imagepreview(input) {
    if (input.files && input.files[0]) {
        var fildr = new FileReader();
        fildr.onload = function (e) {
            $('#imgPreview').attr('src', e.target.result);
        }
        fildr.readAsDataURL(input.files[0]);
    }
}