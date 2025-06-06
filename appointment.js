document.addEventListener('DOMContentLoaded', () => {
    // Tab navigation
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Patient type segmented control
    const patientTypeButtons = document.querySelectorAll('.patient-type-btn');
    patientTypeButtons.forEach(button => {
        button.addEventListener('click', () => {
            patientTypeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Populate calendar
    const appointmentsGrid = document.querySelector('.appointments-grid');
    const days = ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
    const dates = [
        { day: 'Fri', date: 'Jun 6', appts: '42' }, { day: 'Sat', date: 'Jun 7', appts: '63' }, { day: 'Sun', date: 'Jun 8', appts: '63' }, { day: 'Mon', date: 'Jun 9', appts: '63' }, { day: 'Tue', date: 'Jun 10', appts: '63' }, { day: 'Wed', date: 'Jun 11', appts: '63' }, { day: 'Thu', date: 'Jun 12', appts: '63' },
        { day: 'Fri', date: 'Jun 13', appts: '63' }, { day: 'Sat', date: 'Jun 14', appts: '63' }, { day: 'Sun', date: 'Jun 15', appts: '63' }, { day: 'Mon', date: 'Jun 16', appts: '63' }, { day: 'Tue', date: 'Jun 17', appts: '63' }, { day: 'Wed', date: 'Jun 18', appts: '63' }, { day: 'Thu', date: 'Jun 19', appts: '63' },
    ];

    dates.forEach(item => {
        const cell = document.createElement('div');
        cell.className = 'day-cell available';
        cell.innerHTML = `
            <div class="day-name">${item.day}</div>
            <div class="day-date">${item.date}</div>
            <div class="day-appts">${item.appts} appts</div>
        `;
        appointmentsGrid.appendChild(cell);
    });
}); 