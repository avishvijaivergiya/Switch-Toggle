document.addEventListener('DOMContentLoaded', () => {
    // Find all segment control containers and initialize them individually
    const allSegmentContainers = document.querySelectorAll('.controls-container');

    allSegmentContainers.forEach(container => {
        const controls = container.querySelector('.controls');
        const segments = container.querySelectorAll('.segment');
        const inputs = container.querySelectorAll('.segment input[type="radio"]');

        const updateHighlight = () => {
            const checkedInput = container.querySelector('.segment input[type="radio"]:checked');
            if (!checkedInput) return;

            const activeSegment = checkedInput.parentElement;
            
            segments.forEach(s => s.classList.remove('active'));
            activeSegment.classList.add('active');
            
            const { offsetWidth, offsetLeft } = activeSegment;
            container.style.setProperty('--highlight-width', `${offsetWidth}px`);
            container.style.setProperty('--highlight-x-pos', `${offsetLeft}px`);
        };

        inputs.forEach(input => {
            input.addEventListener('change', updateHighlight);
        });

        window.addEventListener('resize', updateHighlight);

        // Initial state update
        updateHighlight();

        setTimeout(() => {
            if (controls) {
                controls.classList.add('ready');
            }
        }, 10);
    });
}); 