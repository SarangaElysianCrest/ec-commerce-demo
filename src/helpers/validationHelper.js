export function ValidateEmail(inputText)
{
    let mailFormat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(inputText.match(mailFormat))
    {
        return true;
    }
    else
    {
        return false;
    }
}   

export function ValidatePassword(inputText){
    let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(inputText.match(passwordFormat)){
        return true;

    }else{
        return false;
    }
}