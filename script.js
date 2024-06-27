
function validateForm() {
    var fullName = document.getElementById('full-name').value.trim();
    var uploadInput = document.getElementById('upload-document');
    var uploadStatus = document.getElementById('uploadStatus');

   
    var nameRegex = /^[a-zA-Z\s-]+$/;
    if (!nameRegex.test(fullName)) {
        alert('Please enter a valid full name.');
        return false;
    }

    
    var file = uploadInput.files[0];
    if (file) {
        var maxSize = 2 * 1024 * 1024; 
        if (file.size < maxSize) {
            alert('File size should be less than 2MB.');
            return false;
        }
    }

    

    return true; 
}


document.addEventListener('DOMContentLoaded', function() {
    var uploadInput = document.getElementById('upload-document');
    if (uploadInput) {
        uploadInput.addEventListener('change', function() {
            var file = this.files[0];
            var maxSize = 2 * 1024 * 1024; // 2MB in bytes

            if (file && file.size < maxSize) {
                alert('File size should be at least 2MB.');
                this.value = ''; // Reset the file input
            }
        });
    }
});
