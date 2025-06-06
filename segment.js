document.addEventListener('DOMContentLoaded', () => {
    const controlsContainer = document.querySelector('.controls-container');
    const controls = document.querySelector('.controls');
    const segments = document.querySelectorAll('.segment');
    const inputs = document.querySelectorAll('.segment input[type="radio"]');

    function updateHighlight() {
        const checkedInput = document.querySelector('.segment input[type="radio"]:checked');
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
}); 