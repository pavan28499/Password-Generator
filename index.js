let randomPassword = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l', 'm','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','<','>','/','?','1','2','3','4','5','6','7','8','9','10','!','@','#','$','%','^','&','*','(',')']
let pass1 = document.getElementById("passwordOne")
let pass2 = document.getElementById("passwordTwo")

function generatePassowrd(){
     pass1.textContent = "";
     pass2.textContent = "";
     for(let i= 0; i<12; i++){
        let password1 = Math.floor(Math.random()*randomPassword.length);
        let password2 = Math.floor(Math.random()*randomPassword.length);
        
      pass1.textContent += randomPassword[password1]
      pass2.textContent += randomPassword[password2]
      }
      
}
generatePassowrd()
