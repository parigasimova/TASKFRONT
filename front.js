document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const password = document.getElementById('password').value;

    // You can perform actions like sending the data to a server here
    // For this example, we'll just log the values to the console
    console.log(`Logged in with ID: ${id}, Name: ${name}, Surname: ${surname}, Password: ${password}`);
});

document.getElementById('deleteForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the ID to delete
    const deleteId = document.getElementById('deleteId').value;

    // You can perform actions like deleting the user with this ID from a database here
    // For this example, we'll just log the ID to be deleted to the console
    console.log(`Deleting user with ID: ${deleteId}`);
});

