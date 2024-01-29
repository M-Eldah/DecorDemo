function myFunc(i) {
    const g = document.getElementById('imageGallery');
    while (g.firstChild) {
        g.removeChild(g.lastChild);
    }

    const id = `ag${i}`;
    const b = document.getElementsByClassName('gallerybuttonActive')[0]
    if (b !== null) {
        b.classList.remove('gallerybuttonActive');
        b.classList.add('gallerybuttoninActive');
    }
    const b2 = document.getElementById(id);
    b2.classList.remove('gallerybuttoninActive');
    b2.classList.add('gallerybuttonActive');

    var array = []
    switch (i) {
        case 0:
            array = [
                'img/MinImage/img1.jpeg',
                'img/MinImage/img2.jpeg',
                'img/MinImage/img3.jpeg',
                'img/MinImage/img4.jpeg',
                'img/MinImage/img5.jpeg',
                'img/MinImage/img6.jpeg',
                'img/MinImage/img7.jpeg',
                'img/MinImage/img8.jpeg',
                'img/MinImage/img9.jpeg',
                'img/MinImage/img10.jpeg',
                'img/MinImage/img11.jpeg',
                'img/MinImage/img12.jpeg',
                'img/MinImage/img13.jpeg',
                'img/MinImage/img14.jpeg',
                'img/MinImage/img15.jpeg',
                'img/MinImage/img16.jpeg',

            ]
            break;
        case 1:
            array = [
                'img/MinImage/img9.jpeg',
                'img/MinImage/img10.jpeg',
                'img/MinImage/img11.jpeg',
                'img/MinImage/img12.jpeg',
                'img/MinImage/img13.jpeg',
                'img/MinImage/img14.jpeg',
                'img/MinImage/img15.jpeg',
                'img/MinImage/img16.jpeg',
            ]
            break;
        case 2:
            array = [
                'img/MinImage/img1.jpeg',
                'img/MinImage/img2.jpeg',
                'img/MinImage/img3.jpeg',
                'img/MinImage/img4.jpeg',
                'img/MinImage/img5.jpeg',
                'img/MinImage/img6.jpeg',
                'img/MinImage/img7.jpeg',
                'img/MinImage/img8.jpeg',
            ]
            break;
    }

    const ele = []
    array.forEach(x => {
        const img = document.createElement('div');
        ele.push(img);
        img.classList.add('card', 'photo', 'hidden')
        img.style.backgroundImage = `url('${x}')`
        g.appendChild(img)
    })
    ele.forEach((x, i) => {
        setTimeout(() => { x.classList.add('show'); }, i * 200)
    })
}
window.onload = () => {
    myFunc(0);

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_8bdx0jd', 'template_zgp07io', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}
function scrolls(i) {
    console.log(i);
    var x = document.getElementById(i).getBoundingClientRect().top - 70 + window.scrollY;
    window.scrollTo(0, x);
}
function showimg(ele, id) {
    document.getElementById(id).src = ele.src;
}
function formtype(i) {
    if (i) {
        document.getElementById("Dateform").classList.add("d-none");
        document.getElementById("contact-form-type").value = "Contact us";
    }
    else {
        document.getElementById("Dateform").classList.remove("d-none");
        document.getElementById("contact-form-type").value = "appointment";
    }
}