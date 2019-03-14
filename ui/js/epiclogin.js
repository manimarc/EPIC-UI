
const uemail=document.getElementById('emailid');

const upassword=document.getElementById('passwordid');

const loginBtn=document.getElementById('profile_btn');
const responseMessage  = document.getElementById('dmessage');



loginBtn.addEventListener('click',(event)=>{
const	upassword_v = upassword.value;
const	uemail_v = uemail.value; 
	/*if(upassword_v  !== '')
	{*/
window.location.href = '../index.html';
/*}else{
	alert('All field should be filled!');
}*/
});


