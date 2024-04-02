export function handleFormSubmission(event) {
    event.preventDefault();

    // Get form data
    var id = document.getElementById("idInput").value;
    var name = document.getElementById("nameInput").value;
    var city = document.getElementById("cityInput").value;
    var rememberMe = document.getElementById("exampleCheck1").checked;

    // Display form data in a label
    document.getElementById("formData").innerHTML = `
        <p>ID: ${id}</p>
        <p>Name: ${name}</p>
        <p>City: ${city}</p>
        <p>Remember me: ${rememberMe ? "Yes" : "No"}</p>
    `;
}
