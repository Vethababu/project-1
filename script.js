document.getElementById('resumeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const summary = document.getElementById('summary').value;
  const skills = document.getElementById('skills').value.split(',');

  document.getElementById('previewName').textContent = name;
  document.getElementById('previewTitle').textContent = title;
  document.getElementById('previewSummary').textContent = summary;

  const skillsList = document.getElementById('previewSkills');
  skillsList.innerHTML = '';
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.trim();
    skillsList.appendChild(li);
  });
});

document.getElementById('aiSuggest').addEventListener('click', function() {
  alert("✨ AI Suggestion: Add quantifiable achievements to your summary!");
});

document.getElementById('downloadPDF').addEventListener('click', function() {
  window.print(); // Simple PDF export via browser print
});