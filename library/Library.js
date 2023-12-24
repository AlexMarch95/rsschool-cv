// working slider start
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.dots.one').addEventListener('click', function () {
    offset = 470;

    sliderLine.style.left = -offset + 'px';
})
document.querySelector('.dots.two').addEventListener('click', function () {
    offset = 950;

    sliderLine.style.left = -offset + 'px'
})
document.querySelector('.dots.three').addEventListener('click', function () {
    offset = 1430

    sliderLine.style.left = -offset + 'px';
})
document.querySelector('.arrow.One').addEventListener('click', function () {
    offset = offset + 470;
    if (offset > 0) {
        offset = -1900
    }
    sliderLine.style.left = offset + 'px'
})
document.querySelector('.arrow.Two').addEventListener('click', function () {
    offset = offset - 470;
    if (offset < -1901) {
        offset = 0
    }
    sliderLine.style.left = offset + 'px'
})
// working slider end
document.querySelector('.Register').addEventListener('click' , function(){
    document.getElementById('myModal').classList.add('open')
})
// profile
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('openPr').addEventListener('click', function () {
        document.querySelector('.profil-auto1').classList.toggle('closed')
    })
})
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('openPr1').addEventListener('click', function () {
        document.querySelector('.profil-auto1').classList.toggle('closed')
    })
})
// profile
// burger start
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('.header').classList.toggle('open')
    })
})
// burger end

// fadeIn fadeOut
let myLogo1 = document.getElementById('book1')
document.getElementById('winter').onclick = function () {
    myLogo1.classList.toggle('fade')
}
let myLogo2 = document.getElementById('book2')
document.getElementById('spring').onclick = function () {
    myLogo2.classList.toggle('fade')
}
let myLogo3 = document.getElementById('book3')
document.getElementById('summer').onclick = function () {
    myLogo3.classList.toggle('fade')
}
let myLogo4 = document.getElementById('book4')
document.getElementById('autumn').onclick = function () {
    myLogo4.classList.toggle('fade')
}
// fadeIn fadeOut

// PopUp
document.getElementById('openBtn').addEventListener('click', function () {
    document.getElementById('myModal').classList.add('open')
})
document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('myModal').classList.remove('open')
})
document.getElementById('openBtn1').addEventListener('click', function () {
    document.getElementById('myModal').classList.add('open')
})
// PopUp

//Input Registration 
 let name = document.getElementById('firstName');
 let last = document.getElementById('lastName');
 let mail = document.getElementById('mail');
 let password = document.getElementById('password');
 let btn = document.getElementById('signUp');

 let users = {};

function User (name,last,mail,password) {
   this.name = name;
   this.last = last;
   this.mail = mail;
   this.password = password;
}

function createId (users) {
return Object.keys(users).length
}

btn.addEventListener('click' , function () {
    const nameUser = name.value;
    const lastUser = last.value;
    const mailUser = mail.value;
    const passwordUser = password.value;

    const user = new User (nameUser,lastUser,mailUser,passwordUser);
    const userId = 'User' + createId (users);
    users[userId] = user;
    console.log(users);
    alert(`${nameUser} , вы успешно прошли регистрацию`);
    document.getElementById('myModal').classList.remove('open')
    document.querySelector('.profil-auto1').classList.remove('closed')
    document.querySelector('.profilIc').classList.add('open')
    document.querySelector('.iconClose').classList.add('close')
    document.querySelector('.icon').classList.add('open')
    document.querySelector('.icon2').classList.add('open')
    document.querySelector('.LogIn').classList.add('close')
    document.querySelector('.Register').classList.add('close')
    document.querySelector('.LogIn.open').classList.add('one')
    document.querySelector('.Register.open').classList.add('one')
})
//Input Registration 