// Get the current year
const currentYear = new Date().getFullYear();

 document.addEventListener("DOMContentLoaded", function () {
            // Set current year
            var currentYear = new Date().getFullYear();
            document.getElementById("currentyear").textContent = currentYear;

            // Set last updated date
            var lastUpdatedDate = new Date(document.lastModified);
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById("last-updated").textContent = lastUpdatedDate.toLocaleDateString(undefined, options);
        });
