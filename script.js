const header = document.querySelector('header');
const navbar = document.querySelector('nav');
const menuToggle = document.querySelector('.menuToggle');

menuToggle.onclick = function(){
    header.classList.toggle('active');
    console.log("clicked")
}


// यह लाइन डॉक्यूमेंट पर क्लिक के लिए एक ईवेंट लिस्टेनर जोड़ती है। जब किसी क्लिक की जाती है, तो यह ईवेंट तब होता है।
document.addEventListener('click', (event) => {
    const target = event.target;

    // Check if the target is not the menuToggle and the header, and the header is currently active.
    if (!navbar.contains(target) && !header.contains(target) && header.classList.contains('active')) {
        header.classList.remove('active');
    }
});
