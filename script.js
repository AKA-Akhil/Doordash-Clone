document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add 'active' class to clicked tab
            tab.classList.add('active');
            
            // Hide all contents
            contents.forEach(content => content.style.display = 'none');
            // Show content related to the clicked tab
            contents[index].style.display = 'flex';  // Use 'flex' to maintain the layout
        });
    });
});
