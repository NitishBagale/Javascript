const displayMsg=(msg, id, colorname)=>{
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.color = colorname   
}


const fnameValidate=()=>{
    const first_name = document.getElementById('fname').value 
    if(first_name==""){
        displayMsg("First Name is Mandotary","fnameMsg","red")
        return false
    }
    else if(first_name.length<3){
        displayMsg("First Name should contain more than 2 character","fnameMsg","red")
        return false
    }
    else{
        displayMsg("Validate first Name","fnameMsg","green")
        return true
    }
}
const emailValidate=()=>{
    const email = document.getElementById ('email').value
    if(email==""){
        displayMsg("Email is mandatory","emailMsg","red")
        return false
    }
    else{
        displayMsg("Valid Msg","emailMsg","green")
        return true
    }
    
}