
const fname=document.getElementById('firstname');
const lname=document.getElementById('lastname');
const uemail=document.getElementById('email');
const uphone=document.getElementById('phone');
const upassword=document.getElementById('password');
const uphoto=document.getElementById('photo');
const ufilephoto=document.getElementById('filephoto');
const signupBtn=document.getElementById('register_btn');
const responseMessage  = document.getElementById('dmessage');



signupBtn.addEventListener('click',(event)=>{
event.preventDefault();
const post = {
		 fname_v : fname.value, 
		lname_v : lname.value,
		 uemail_v : uemail.value,
		 uphone_v : uphone.value,
		 upassword_v : upassword.value,
		 uphoto_v : uphoto.value,
		ufilephoto_v : ufilephoto.value,
		};
		submitFormData(post);
		console.log(post);
});

function makeRequest(data){
	return new Promise((resolve, reject)=>{
	let request=new XMLHttpRequest();	
	request.OPEN('POST','./signup');

	request.onreadystatechange = () => {
	if(request.readyState === 4) {
		if(request.status===201){
			//return response.textContent='Error response!';
			resolve(JSON.parse(request.response));
		}else{
			reject(JSON.parse(request.response));
		}
	}
};
request.setRequestHeader('Content-Type','Application/json');
request.send(json.stringfy(data));
	});
}


async function submitFormData(post){

	try{
		const requestPromise = makeRequest(post);
		const response = await requestPromise;
		responseMessage.textContent = response.message;
	}catch(errorResponse){
		responseMessage.textContent = errorResponse.error;
	}
}