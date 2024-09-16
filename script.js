document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.classroom');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            const courseClass = Array.from(cell.classList).find(cls => cls.startsWith('course-'));
            
            // Resaltar todas las celdas con el mismo curso y atenuar las demás
            cells.forEach(c => {
                if (c.classList.contains(courseClass)) {
                    c.classList.add('hovered'); // Resaltar
                } else {
                    c.classList.add('dimmed'); // Atenuar
                }
            });
        });

        cell.addEventListener('mouseout', () => {
            // Restaurar todos los estilos cuando se quita el cursor
            cells.forEach(c => {
                c.classList.remove('hovered');
                c.classList.remove('dimmed');
            });
        });
    });
});
