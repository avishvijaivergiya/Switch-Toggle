document.addEventListener('DOMContentLoaded', () => {
    function initializeSegmentControl(containerId) {
        const controlsContainer = document.querySelector(`#${containerId}`);
        if (!controlsContainer) return;

        const controls = controlsContainer.querySelector('.controls');
        const segments = controlsContainer.querySelectorAll('.segment');
        const inputs = controlsContainer.querySelectorAll('.segment input[type="radio"]');

        function updateHighlight() {
            const checkedInput = controlsContainer.querySelector('.segment input[type="radio"]:checked');
            if (!checkedInput) return;

            const activeSegment = checkedInput.parentElement;

            segments.forEach(segment => segment.classList.remove('active'));
            activeSegment.classList.add('active');

            const { offsetWidth, offsetLeft } = activeSegment;

            controlsContainer.style.setProperty('--highlight-width', `${offsetWidth}px`);
            controlsContainer.style.setProperty('--highlight-x-pos', `${offsetLeft}px`);
        }

        updateHighlight();

        setTimeout(() => {
            controls.classList.add('ready');
        }, 10);

        inputs.forEach(input => {
            input.addEventListener('change', updateHighlight);
        });

        window.addEventListener('resize', updateHighlight);
    }

    // Initialize all segment controls on the page
    initializeSegmentControl('segment-2-options');
    initializeSegmentControl('segment-2-tick');
    initializeSegmentControl('segment-3-options');
    initializeSegmentControl('segment-3-tick');
}); 