// document.getElementById("myForm").addEventListener("submit", function(event){


const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const userName = document.getElementById('userName').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create an object with form data
    const myBlog = {
        userName: userName,
        title: title,
        content: content
    };

    // Store object in localStorage
    localStorage.setItem('myFrom', JSON.stringify(myFrom));

    // Optionally, you can redirect the user to another page
    window.location.href = 'blog.html';
});