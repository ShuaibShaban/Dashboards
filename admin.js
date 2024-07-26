document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const addAdminBtn = document.getElementById("addAdminBtn");
    const adminModal = document.getElementById("adminModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const userList = document.getElementById("userList");

    toggleBtn.addEventListener("click", function() {
        sidebar.classList.toggle("collapsed");
        content.classList.toggle("collapsed");
        document.querySelectorAll(".sidebar ul li a span").forEach(span => {
            span.classList.toggle("collapsed");
        });
        document.querySelector(".sidebar-header h2").classList.toggle("collapsed");
    });

    addAdminBtn.addEventListener("click", function() {
        adminModal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function() {
        adminModal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == adminModal) {
            adminModal.style.display = "none";
        }
    };

    // Simulated user data fetch function
    function fetchUsers() {
        // Simulated fetch from backend
        const users = [
            { name: "User One", email: "user.one@example.com" },
            { name: "User Two", email: "user.two@example.com" }
        ];

        users.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user-list");

            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <button onclick="editUser('${user.name}', '${user.email}')">Edit User</button>
            `;

            userList.appendChild(userDiv);
        });
    }

    fetchUsers();
});

function editUser(name, email) {
    const adminModal = document.getElementById("adminModal");
    adminModal.style.display = "block";

    document.getElementById("adminName").value = name;
    document.getElementById("adminEmail").value = email;
}

function addAdmin() {
    const name = document.getElementById("adminName").value;
    const email = document.getElementById("adminEmail").value;

    // Simulated add to backend
    const newAdmin = { name, email };

    const userDiv = document.createElement("div");
    userDiv.classList.add("user-list");

    userDiv.innerHTML = `
        <h3>${newAdmin.name}</h3>
        <p>Email: ${newAdmin.email}</p>
        <button onclick="editUser('${newAdmin.name}', '${newAdmin.email}')">Edit User</button>
    `;

    document.getElementById("userList").appendChild(userDiv);

    document.getElementById("adminModal").style.display = "none";
}
