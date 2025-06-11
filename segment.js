document.addEventListener('DOMContentLoaded', () => {
    // Find all segment control containers and initialize them
    const allSegmentContainers = document.querySelectorAll('.controls-container');

    allSegmentContainers.forEach(container => {
        const controls = container.querySelector('.controls');
        const segments = container.querySelectorAll('.segment');
        const inputs = container.querySelectorAll('.segment input[type="radio"]');

        function updateHighlight() {
            const checkedInput = container.querySelector('.segment input[type="radio"]:checked');
            if (!checkedInput) return;

            const activeSegment = checkedInput.parentElement;

            // Remove active class from siblings only
            segments.forEach(segment => segment.classList.remove('active'));
            activeSegment.classList.add('active');

            const { offsetWidth, offsetLeft } = activeSegment;
            
            // Set CSS variables on the specific container
            container.style.setProperty('--highlight-width', `${offsetWidth}px`);
            container.style.setProperty('--highlight-x-pos', `${offsetLeft}px`);
        }

        // Set initial state
        updateHighlight();

        // Add a 'ready' class after a short delay to enable transitions
        setTimeout(() => {
            if(controls) {
               controls.classList.add('ready');
            }
        }, 10);

        // Add event listeners for interaction
        inputs.forEach(input => {
            input.addEventListener('change', updateHighlight);
        });

        // Add event listener for resizing
        window.addEventListener('resize', updateHighlight);
    });
}); 