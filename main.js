const projectList = document.getElementById('project-list');
const addBtn = document.getElementById('add-project-btn');

addBtn.addEventListener('click', () => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    projectDiv.innerHTML = `
        <hr>
        <input type="text" placeholder="Project Name">
        <textarea placeholder="Project Description"></textarea>
        <button class="delete-btn">— Remove</button>
    `;
    projectList.appendChild(projectDiv);
});

// Logic to delete the project
projectList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});