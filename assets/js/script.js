const moon = document.getElementById('mode_icon');

moon.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    const button = document.getElementById('login_button');
    const container = document.getElementById('container');
    if(moon.classList.contains('fa-moon')) {
        moon.classList.remove('fa-moon');
        moon.classList.add('fa-sun');

        form.classList.add('dark')
        container.classList.add('dark')
        button.classList.add('dark')
        return;
    }

    moon.classList.add('fa-moon');
    moon.classList.remove('fa-sun');

    form.classList.remove('dark')
    container.classList.remove('dark')
    button.classList.remove('dark')
});

