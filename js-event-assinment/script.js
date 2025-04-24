document.addEventListener('DOMContentLoaded', () => {
    // 1. Event Handling 🎈
    const clickMeButton = document.getElementById('clickMeButton');
    const hoverMeArea = document.getElementById('hoverMeArea');
    const keypressInput = document.getElementById('keypressInput');
    const keypressOutput = document.getElementById('keypressOutput');
    const doubleClickButton = document.getElementById('doubleClickButton');
    const longPressButton = document.getElementById('longPressButton');
    const longPressMessage = document.getElementById('longPressMessage');

    clickMeButton.addEventListener('click', () => {
        alert('Button Clicked!');
    });

    hoverMeArea.addEventListener('mouseover', () => {
        hoverMeArea.textContent = 'You are hovering!';
    });

    hoverMeArea.addEventListener('mouseout', () => {
        hoverMeArea.textContent = 'Hover Over Me';
    });

    keypressInput.addEventListener('keypress', (event) => {
        keypressOutput.textContent = `You pressed: ${event.key}`;
    });

    doubleClickButton.addEventListener('dblclick', () => {
        alert('Secret Double Click Action!');
    });

    let longPressTimer;
    longPressButton.addEventListener('mousedown', () => {
        longPressTimer = setTimeout(() => {
            longPressMessage.style.display = 'block';
        }, 1500); // Adjust time for long press
    });

    longPressButton.addEventListener('mouseup', () => {
        clearTimeout(longPressTimer);
    });

    longPressButton.addEventListener('mouseout', () => {
        clearTimeout(longPressTimer);
    });

    // 2. Interactive Elements 🎮
    const changeTextButton = document.getElementById('changeTextButton');
    const textDisplay = document.getElementById('textDisplay');
    let isOriginalText = true;

    changeTextButton.addEventListener('click', () => {
        if (isOriginalText) {
            textDisplay.textContent = 'Text Changed!';
            changeTextButton.textContent = 'Revert Text';
        } else {
            textDisplay.textContent = 'Initial Text';
            changeTextButton.textContent = 'Change My Text';
        }
        isOriginalText = !isOriginalText;
    });

    const galleryImages = document.querySelectorAll('#imageGallery .gallery-image');
    const prevButton = document.getElementById('prevImage');
    const nextButton = document.getElementById('nextImage');
    let currentIndex = 0;

    function showImage(index) {
        galleryImages.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage(currentIndex);
    });

    const accordionHeaders = document.querySelectorAll('#accordion .accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Close all other open accordion items
            document.querySelectorAll('#accordion .accordion-content.active').forEach(item => {
                if (item !== content) {
                    item.classList.remove('active');
                }
            });

            content.classList.toggle('active');
        });
    });

    // 3. Form Validation 📋✅
    const myForm = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formMessage = document.getElementById('formMessage');

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    myForm.addEventListener('submit', (event) => {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Invalid email format.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (passwordInput.value === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        } else if (!validatePassword(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
            formMessage.textContent = 'Please correct the errors above.';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Form submitted successfully!';
            formMessage.style.color = 'green';
            // In a real scenario, you would submit the form data here
            // myForm.submit();
        }
    });

    // Bonus: Real-time feedback while typing
    nameInput.addEventListener('input', () => {
        nameError.textContent = nameInput.value.trim() === '' ? 'Name is required.' : '';
    });

    emailInput.addEventListener('input', () => {
        emailError.textContent = emailInput.value.trim() === '' ? 'Email is required.' : (validateEmail(emailInput.value) ? '' : 'Invalid email format.');
    });

    passwordInput.addEventListener('input', () => {
        passwordError.textContent = passwordInput.value === '' ? 'Password is required.' : (validatePassword(passwordInput.value) ? '' : 'Password must be at least 8 characters long.');
    });

    // Bonus: Animation (Simple CSS transition is used for image gallery)
});