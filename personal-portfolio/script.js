
// window.onscroll=()=>{
//     let header=document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100)
// }

// toggle icon and nav bar


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
console.log(menuIcon)


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



$("#submit-to-google-sheet").validate({
    rules: {
        username: {
            pattern: /^[a-zA-Z ]+$/
        },
        phone: {
            pattern: /^\+?[1-9][0-9]{9}$/
        }

    },
    submitHandler: function (form) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxF5xueY53rn0ir2Ogxa3xcLAt8HdK7nrXDAr1Y5otxvfU1-_w_767I1dfAIx7QTQkO/exec",
            data: $(form).serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                form.reset();
                window.location.reload()
            },
            error: function (err) {
                alert("Something Error")
            }
        })

    }
})