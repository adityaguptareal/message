document.getElementById("submit-btn").addEventListener("click", function() {
    var mode = document.getElementById("mode").value;
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);

    var output = "";

    if (mode === "encode") {
        output = encodeMessage(message, shift);
    } else if (mode === "decode") {
        output = decodeMessage(message, shift);
    }

    document.getElementById("output").value = output;
    document.getElementById("output-section").style.display = "block";
});

function encodeMessage(message, shift) {
    var encodedMessage = "";
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            encodedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            encodedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            encodedMessage += message.charAt(i);
        }
    }
    return encodedMessage;
}

function decodeMessage(message, shift) {
    return encodeMessage(message, 26 - shift);
}
