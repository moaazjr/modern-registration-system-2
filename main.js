// the sellection elements;


const name = document.getElementById('name')
const email = document.getElementById('e-mail')
const pass = document.getElementById('password')
const conf = document.getElementById('confp')
const signupBtn=document.getElementById('signup-btn')
let form =document.querySelector('form')
let users=[]
let h1 = document.getElementById('wel')
const loginBtn=document.getElementById('login-btn')

// signup button and the enterd values ;

if(signupBtn){
    signupBtn.addEventListener('click',signup)
} 
function signup(){
    if(name.value=="")name.nextElementSibling.innerHTML = "required"
    else if(email.value=="")email.nextElementSibling.innerHTML = "required"
    else if(pass.value=="")pass.nextElementSibling.innerHTML = "required"
    else if(conf.value=="")conf.nextElementSibling.innerHTML = "required"
    else if(pass.value != conf.value)return
    else{
        var user= {
            name: name.value,
            email: email.value,
            pass: pass.value,
        }
        users.push(user)
        localStorage.setItem('users',JSON.stringify(users))
        name.value=""
        email.value=""
        pass.value=""
        conf.value=""
        window.open('login.html','_self')
    }
    

    // login button and the compareing;


}
if (form)form.addEventListener('submit',function(e){e.preventDefault()})
if (loginBtn)loginBtn.addEventListener('click', login)
function login(){
    if(email.value=="")email.nextElementSibling.innerHTML = "required"
    else if(pass.value=="")pass.nextElementSibling.innerHTML = "required"
    else {
        for (let i = 0; i < JSON.parse(localStorage.getItem('users')).length ; i++) {
            if(email.value===JSON.parse(localStorage.getItem('users'))[i].email && pass.value===JSON.parse(localStorage.getItem('users'))[i].pass){
                localStorage.setItem('logged', JSON.stringify(JSON.parse(localStorage.getItem('users'))[i]  ))
                window.open('welcome.html','_self')
            }

        }
    }
}

//the welcome window; 

window.onload = ()=>{
    if(h1){
        h1.innerHTML='welcome, '+JSON.parse(localStorage.getItem('logged')).name
        h1.style.color = 'white';
        h1.style.textTransform = 'capitalize';

    }
}
//if the input box is empty :  

function validate() {
    e.preventDefault();
    var inputs = document.querySelectorAll('input:not[type="submit"]');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length ==0) {
            inputs[i].nextElementSibling.innerHTML=`${inputs[i].name} required`;
        }else{
            inputs[i].nextElementSibling.innerHTML=''
        }
    }
var username = document.querySelector('input[name="text"]')
var username_pattern=/^[A-Z][a-z]{3,8}$/
if(username_pattern.value.length != 0){
    if(!username_pattern.test(username.value)){
        username.nextElementSibling.innerHTML ='username is not vaild'
    }
}

}