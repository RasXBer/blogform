
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from local storage
    var userData = JSON.parse(localStorage.getItem("myForm"));
for (let i = 0; i < userData.length; i++) {
    
    

    // Log local storage data
    console.log("User Name:", userData[i].userName);
    console.log("Title:", userData[i].title);
    console.log("Content:", userData[i].content);
// Log local storage data on My First Blog page
const blogPostsContainer = document.getElementById('blogPosts');
   const userInfo= document.createElement('h2')
   const titleInfo= document.createElement('h3')
   const contentInfo= document.createElement('h4')
   userInfo.textContent=userData[i].userName;
   titleInfo.textContent=userData[i].title;
   contentInfo.textContent=userData[i].content;
   blogPostsContainer.appendChild(userInfo);
   blogPostsContainer.appendChild(titleInfo);
   blogPostsContainer.appendChild(contentInfo);
} 
});

document.querySelector("#backbtn").addEventListener("click", function(){
    document.location.replace("index.html")
})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }