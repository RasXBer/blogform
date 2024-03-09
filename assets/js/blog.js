
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from local storage
    var userData = JSON.parse(localStorage.getItem("myForm"));

    // Log local storage data
    console.log("User Name:", userData.userName);
    console.log("Title:", userData.title);
    console.log("Content:", userData.content);
});


