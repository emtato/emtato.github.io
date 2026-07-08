document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("tipForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const zip = document.getElementById("zipcode").value.trim();

        const name = document.getElementById("suspect").value.trim().toLowerCase();

        if (zip !== "87104") {

            alert("Invalid ZIP Code.");

            return;

        }

        if (name !== "fibi") {

            alert("No matching individual found.");

            return;

        }

        // Everything matches

        window.location.href = "success.html";

    });

});
