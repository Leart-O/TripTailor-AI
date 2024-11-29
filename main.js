document.addEventListener("DOMContentLoaded", function() {
    // Function to handle subscription form
    const subscribeButton = document.querySelector('.footer-button'); // Assuming this is the subscribe button
    const emailInput = document.querySelector('.footer-text-input'); // Assuming this is the email input field

    if (subscribeButton) {
        subscribeButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission

            const email = emailInput.value;
            if (validateEmail(email)) {
                alert('Thank you for subscribing!');
                // Here you would typically send the email to your server
                emailInput.value = ''; // Clear the input
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic regex for email validation
        return re.test(String(email).toLowerCase());
    }

    // Function to display modal with feature information
    const featureButtons = document.querySelectorAll('.feature-button'); // Assuming buttons for features have this class
    const modal = document.createElement('div'); // Create a new modal element
    modal.setAttribute('id', 'feature-modal'); // Set the modal ID
    modal.style.display = 'none'; // Initially set the display to 'none'
    modal.classList.add('modal'); // Add the 'modal' class
    document.body.appendChild(modal); // Append the modal to the body

    const modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'modal-content');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const modalClose = document.createElement('span');
    modalClose.setAttribute('id', 'modal-close');
    modalClose.classList.add('close-button');
    modalClose.textContent = '&times;';
    modalContent.appendChild(modalClose);

    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const featureInfo = button.getAttribute('data-info'); // Assuming each button has a data-info attribute with feature details
            modalContent.textContent = featureInfo; // Set modal content
            modal.style.display = 'block'; // Show the modal
        });
    });

    // Close modal functionality
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modal.style.display = 'none'; // Hide the modal
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle subscription form
    const subscribeButton = document.querySelector('.footer-button'); // Assuming this is the subscribe button
    const emailInput = document.querySelector('.footer-text-input'); // Assuming this is the email input field

    if (subscribeButton) {
        subscribeButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission

            const email = emailInput.value;
            if (validateEmail(email)) {
                alert('Thank you for subscribing!');
                // Here you would typically send the email to your server
                emailInput.value = ''; // Clear the input
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic regex for email validation
        return re.test(String(email).toLowerCase());
    }

    // Function to display modal with feature information
    const featureButtons = document.querySelectorAll('.feature-button'); // Assuming buttons for features have this class
    const modal = document.createElement('div'); // Create a new modal element
    modal.setAttribute('id', 'feature-modal'); // Set the modal ID
    modal.style.display = 'none'; // Initially set the display to 'none'
    modal.classList.add('modal'); // Add the 'modal' class
    document.body.appendChild(modal); // Append the modal to the body

    const modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'modal-content');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const modalClose = document.createElement('span');
    modalClose.setAttribute('id', 'modal-close');
    modalClose.classList.add('close-button');
    modalClose.textContent = '&times;';
    modalContent.appendChild(modalClose);

    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const featureInfo = button.getAttribute('data-info'); // Assuming each button has a data-info attribute with feature details
            modalContent.textContent = featureInfo; // Set modal content
            modal.style.display = 'block'; // Show the modal
        });
    });

    // Close modal functionality
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modal.style.display = 'none'; // Hide the modal
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });
});