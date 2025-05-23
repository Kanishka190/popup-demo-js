document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('[popovertarget="popup"]');
    const popover = document.getElementById('popup');

    button.addEventListener('click', () => {
        if (popover.style.display == 'block') {
            popover.style.display = 'none'; 
        } else {
            popover.style.display = 'block'; 
        }
    });
});
