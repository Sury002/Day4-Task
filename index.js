const resumeData = {
    "name": "K Surya",
    "age": 23,
    "email address": "Suryabalaji791@gmail.com",
    "phone number" : 7904937979,
    "education": {
        "degree": "Bachelor of Science",
        "major": "Computer Science",
        "university": "Mohammed Sathak college of arts and science"
    },
    "personal details": {
        "DOB": "09/11/2001",
        "Marital status": "Single", 
        "Nationality": "Indian", 
        "Religion": "Hindu",
        "Gender": "Male", 
        "Place": "Chennai",
        "Father name": "TV Kesavan"  
    },
    "experience": {
        "title": "Customer support professional",
        "company": "Sitel India private limited",
        "duration": "2022 - Present",
        "Roles and responsibilities": [
            "* As a customer support executive for one of the world's pioneers in the Anti-virus software Industry (AVG and Avast), my responsibility is to retain the customer who wants to cancel the Antivirus subscription",
            "* Handling 2 live chats at a time, documenting the case and sending a follow-up email",
            "* My obligation is to understand the concern of customers about cancellation and provide the best options to continue with the subscription"
        ] 
    },
    "skills": ["Communication", "Time management", "Problem solving", "Critical thinking", "Team work"],
    "languages": ["English", "Tamil"]
};

console.log("Name: " + resumeData.name);
console.log("Age: " + resumeData.age);
console.log("Moobile: " +  resumeData["phone number"])
console.log("Email address: " + resumeData["email address"]);
console.log("\nPersonal Details:");
for (let key in resumeData["personal details"]) {
    console.log(`${key}: ${resumeData["personal details"][key]}`);
}

console.log("\nEducation:");
for (let key in resumeData.education) {
    console.log(`${key}: ${resumeData.education[key]}`);
}

console.log("\nExperience:");
console.log(`${resumeData.experience.title} at ${resumeData.experience.company}, ${resumeData.experience.duration}`);
console.log("Roles and Responsibilities:");
resumeData.experience["Roles and responsibilities"].forEach(role => {
    console.log(role);
});

console.log("\nSkills:");
resumeData.skills.forEach(skill => {
    console.log(skill);
});