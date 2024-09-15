document.querySelectorAll('.classroom').forEach(item => {
    item.addEventListener('mouseover', function() {
        const room = this.getAttribute('data-room');
        document.querySelectorAll('.classroom').forEach(classItem => {
            if (classItem.getAttribute('data-room') !== room) {
                classItem.classList.add('dim');
            } else {
                classItem.classList.remove('dim');
            }
        });
    });

    item.addEventListener('mouseout', function() {
        document.querySelectorAll('.classroom').forEach(classItem => {
            classItem.classList.remove('dim');
        });
    });
});
