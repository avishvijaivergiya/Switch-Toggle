document.querySelectorAll('.switch').forEach(switchEl => {
    switchEl.addEventListener('click', () => {
        if (!switchEl.classList.contains('disabled')) {
            switchEl.classList.toggle('active');
        }
    });
}); 