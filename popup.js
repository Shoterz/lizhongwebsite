function togglePopup(content){
	document.getElementById("popup-1").classList.toggle("active");
}
function togglePop(content){
	document.getElementById("popup-2").classList.toggle("active");
}
function togglePopLicense(content){
	document.getElementById("popup-3").classList.toggle("active");
}
function togglePopLicense2(content){
	document.getElementById("popup-4").classList.toggle("active");
}
function togglePopLicense3(content){
	document.getElementById("popup-5").classList.toggle("active");
}
function togglePopupMoreInfo(content){
	document.getElementById("popup-6").classList.toggle("active");
}


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



function message(){
	var email = document.getElementById('email');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
	
    if(email.value === ''){
        
    }
    else{
        setTimeout(() => {
            email.value = '';
        }, 10000);

        success.style.display = 'block';
		 window.open('https://drive.google.com/drive/u/3/folders/1BXvY0zRki7CrbFW2uFx4z_WOlHqme6VX', '_self');
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 10000);
}
function message1(){
	var email = document.getElementById('email1');

	 window.open('https://drive.google.com/drive/folders/1RGUajNtlB0Ygm1jNl6R8qBfS_yQnf8X6?usp=sharing', '_self');
   
}
function message2(){
	var email = document.getElementById('email2');

	 window.open('https://drive.google.com/drive/folders/1XXu9moBnNApLKXHc6DTdmzTiQbGep02j?usp=sharing', '_self');
   
}
 var form = document.getElementById('emailform');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("emailform")),
          }).then(
              response => response.json()
          ).then((html) => {
            // you can put any JS code here

          });
        });
