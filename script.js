// Age auto-update functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set your birthdate here (format: YYYY-MM-DD)
    const birthdate = '2007-01-31'; // Example birthdate
    
    // Function to calculate age
    function calculateAge(birthdate) {
        const birthDate = new Date(birthdate);
        const today = new Date();
        
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        
        // If birthday hasn't occurred yet this year, subtract one year
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    }
    
    // Update age in the DOM
    function updateAge() {
        const ageElement = document.getElementById('age');
        if (ageElement) {
            ageElement.textContent = calculateAge(birthdate);
        }
    }
    
    // Initial age update
    updateAge();
    
    // Update age every day (86,400,000 milliseconds = 24 hours)
    setInterval(updateAge, 86_400_000);
});
