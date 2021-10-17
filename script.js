const text = document.querySelector('.message');
const submitButton = document.querySelector('.btn');



const getMessage = async()=>{
    const res = await fetch(`http://localhost:3000/messages`);
    const messages = await res.json();
    
    const num = Math.floor(Math.random()*messages.length); 
    const item = messages[num];
    
    const message = item.message;   
    text.innerText = message;

    console.log(message);   
}
submitButton.addEventListener('click', getMessage);

getMessage();

