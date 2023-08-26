const header = document.querySelector('header');
const navbar = document.querySelector('nav');
const menuToggle = document.querySelector('.menuToggle');

menuToggle.onclick = function(){
    header.classList.toggle('active');
    console.log("clicked")
}


// यह लाइन डॉक्यूमेंट पर क्लिक के लिए एक ईवेंट लिस्टेनर जोड़ती है। जब किसी क्लिक की जाती है, तो यह ईवेंट तब होता है।
document.addEventListener('click', (event) => {
    // यह नया वेरिएबल target बनाता है और उसमें वह एलिमेंट स्टोर करता है जिस पर क्लिक हुआ है।
    const target = event.target;

    // यह कंडीशन जांचता है कि क्या क्लिक का टारगेट मेनू और मेनू आइकन के बाहर है और क्या मेनू खुला हुआ है (toggle टॉगल हुआ है)।
    if (!navbar.contains(target) && !header.contains(target)) {
        header.classList.toggle('active');
    }
});
