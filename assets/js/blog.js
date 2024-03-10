
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from local storage
    var userData = JSON.parse(localStorage.getItem("myForm"));

    // Log local storage data
    console.log("User Name:", userData.userName);
    console.log("Title:", userData.title);
    console.log("Content:", userData.content);
// Log local storage data on My First Blog page
const blogPostsContainer = document.getElementById('blogPosts');
   const userInfo= document.createElement('h2')
   userInfo.textContent=userData.userName;
   blogPostsContainer.appendChild(userInfo);
});