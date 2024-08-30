function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    const pattern = /^pet_[a-zA-Z0-9]+$/;

    if (pattern.test(input)) {
        result = "valid syntax";
    } else{
        result ="Invalid Syntax"
    }

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


