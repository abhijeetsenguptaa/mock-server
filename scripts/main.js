let baseUrl = "http://localhost:8080"
let registerBtn = document.getElementById('registerBtn');
let loginBtn = document.getElementById('loginBtn');

registerBtn.addEventListener('click',()=>{
    let username = document.getElementById('register-username').value;
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;
    let repeatPassword = document.getElementById('repeat-password').value;
    let checkDoctor = document.getElementById('doctor').checked;

    if(password==repeatPassword){
        let obj = {
            username : username,
            email : email,
            password : password,
            isDoctor : checkDoctor
        }
        
        fetch(`${baseUrl}/users`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(obj)
        })
    }else{
        alert('Please Enter The Correct Password')
    }

})

loginBtn.addEventListener('click',()=>{
    let loginEmail = document.getElementById('login-email').value;
    let loginPassword = document.getElementById('login-password').value;
    


    fetch(`${baseUrl}/users`,{
        method:"GET"
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        let flag = false;
        data.filter((e)=>{
            if(e.email == loginEmail && e.password == loginPassword){
                flag = true;
            }else{
                alert('Wrong Credentials!')
            }
        })

        if(flag){
            if(e.isDoctor == false){
                window.location.href="../appointment.html"
            }else{
                window.location.href="../doctorDashboard.html"
            }
        }
    })
})
