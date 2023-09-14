


/**
 * This function show a model that display error meesage,
 * or the correct message that will be displayed for the user
 * @param {*} message 
 */
function displayMessage(message){
  
   const myMessage = document.getElementById('messagTextId');
   myMessage.innerText = message;

   
   const modelView = new bootstrap.Modal(document.getElementById('messageModelId'));
   
   const closeButton = document.querySelector('.close');
   closeButton.addEventListener('click', function(evt)
   {
       console.log('triggered');
   });
   
//    function(){
//      const model = new bootstrap.Modal(document.getElementById('messageModelId'));
//    });
   
   modelView.show();  
}

/**
 * this function check if the string is empty or not and display error message.
 * @param {*} key  // the input field label
 * @param {*} value // the input field inserted value
 * @returns 
 */
function isNotEmpty(key, value){
    console.log(`${key} = ${value}`);
    if(value.trim() !== undefined && value.trim() !== NaN && value.trim().length > 0)
    {
        console.log(`${key} is not empty`);
        return true;
    }else{
        console.log(`${key} is empty, Please enter your ${key}`);
        displayMessage(`Please enter your ${key}`);
        return  false;
    }
}

/**
 * this function validate the inputs values and,
 * display error message if the values are invalide
 * @param {*} name // the inserted value in name input field
 * @param {*} email // the inserted value in email input field
 */
function validateInput(name,email){
    console.log(name);
    if(isNotEmpty('name', name) && isNotEmpty('email', email))
    {
        console.log(`Hello ${name}, this is your email address: ${email}`);
        displayMessage(`Hello ${name}, this is your email address: ${email}`);
    }
}

/**
 * this function will be called when sumbit button clicked,
 * it reads name and email values from fields and send it for vaidation, 
 * then display a user message. 
 */
function submitFunction(){
    const name = document.getElementById('nameTextId').value;
    const email = document.getElementById('emailTextId').value;
    validateInput(name, email);
} 

document.getElementById('submitBtnId').addEventListener('click', (e) => {
    e.preventDefault();
    submitFunction();
});
