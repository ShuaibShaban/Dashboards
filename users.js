document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");

    toggleBtn.addEventListener("click", function() {
        sidebar.classList.toggle("collapsed");
        content.classList.toggle("collapsed");
        document.querySelectorAll(".sidebar ul li a span").forEach(span => {
            span.classList.toggle("collapsed");
        });
        document.querySelector(".sidebar-header h2").classList.toggle("collapsed");
    });

});

function viewProfile() {
    document.getElementById('profileView').style.display = 'block';
    document.getElementById('profileEdit').style.display = 'none';
}

function editProfile() {
    document.getElementById('profileView').style.display = 'none';
    document.getElementById('profileEdit').style.display = 'block';
}


