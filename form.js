document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("tip-form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const zip = document.getElementById("zip-code").value.trim();

        const name = document.getElementById("reported-name").value.trim().toLowerCase();

        if (zip !== "87104") {

            alert("Invalid ZIP Code.");

            return;

        }

        if (name !== "fibi") {

            alert("No matching individual found.");

            return;

        }

        window.location.href = "success.html";

    });

});
