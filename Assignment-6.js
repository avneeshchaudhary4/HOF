function validLinkedInUrls  (url){
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    if(pattern.test(url)){
        return "Valid LinkedIn profile URL";
    } else{
        return "Invalid LinkedIn profile URL";
    }
}
const urlsToValidate = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane-doe_456",
    "https://www.linkedin.com/in/1234",
    "https://www.linkedin.com/johndoe",
];
urlsToValidate.forEach(url => {
    console.log(validLinkedInUrls(url));
});