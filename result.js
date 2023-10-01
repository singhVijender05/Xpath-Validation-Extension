// result.js
document.addEventListener("DOMContentLoaded", function () {
    const validationResultDiv = document.getElementById("validationResult");
    const storedResults = sessionStorage.getItem("xpathResults");

    if (storedResults) {
        const results = JSON.parse(storedResults);
        validationResultDiv.innerHTML = "";
        results.forEach((result) => {
            const resultDiv = document.createElement("div");

            // Create Font Awesome icons for valid and invalid XPaths
            const icon = document.createElement("i");
            icon.classList.add("fa-solid", "mr-[0.5rem]", "rounded-full", "p-1", "text-white", "font-extrabold", result.isValid ? "fa-check" : "fa-xmark");
            icon.classList.add(result.isValid ? "bg-green-400" : "bg-red-500");
            if (!result.isValid) {
                icon.classList.add("px-[0.4rem]");
            }

            // Create a text node for the result message
            const resultText = document.createTextNode(`${result.xpath}`);

            // Append the icon and result text to the resultDiv
            resultDiv.appendChild(icon);
            resultDiv.appendChild(resultText);

            // Append resultDiv to validationResultDiv
            validationResultDiv.appendChild(resultDiv);
        });
    } else {
        validationResultDiv.textContent = "No validation results available.";
    }
});
