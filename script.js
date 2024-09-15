document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.classroom');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            const room = cell.getAttribute('data-room');
            cells.forEach(c => {
                if (c.getAttribute('data-room') === room) {
                    c.classList.add('hovered');
                } else {
                    c.classList.add('dimmed');
                }
            });
        });

        cell.addEventListener('mouseout', () => {
            cells.forEach(c => {
                c.classList.remove('hovered');
                c.classList.remove('dimmed');
            });
        });
    });
});
