// Variables

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let date = document.getElementById("date");
let length = document.getElementById("length");
let course = document.getElementById("course");
let gen = document.getElementById("Generate");
let main_body = document.querySelector(".main-body");
let form = document.getElementById("form");
let content = document.querySelector(".content");
let container = document.querySelector(".containerr");
let certificate_box = document.getElementById("ccc");

// Functions


gen.addEventListener("click", (e) => {

  if (fname.value == "" || lname.value == "" || date.value == "" || length.value == "" || course.value == "") {    
    
  } else {

  let first = fname.value;
  let last = lname.value;
  let course_name = course.value;
  let course_date = date.value;
  let course_length = length.value;

  e.preventDefault();

  fname.value = "";
  lname.value = "";
  course.value = "";
  length.value = "";
  date.value = "";

  form.style.display = "none";
  container.style.display = "none";
  content.style.display = "block";

  certificate_box.innerHTML = `
    <div id="ccc" class="certificate-box">
                    <img
                      id="certificate"
                      src="../assets/img/Certificates/EDIT/6/6 - 1.png"
                      alt=""
                    />
                    <div class="name">${first} ${last}</div>
                    <div class="description">for participating in the ${course_name} Seminar which was conducted on ${course_date}.</div>
                  </div>
                  <div class="sign">
                        <input type="file" id="file" accept="image/jpeg, image/png, image/jpg">
                        <div id="display-image"></div>
                      </div>
              </div>
              </div>
    `;

  document.getElementById("Download").style.display = "block";

  // Upload a File

  const image_input = document.querySelector("#file");
  image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      image_input.style.display = "none";
      document.querySelector(".sign").style.display = "flex";
      document.querySelector(".sign").style.justifyContent = "center";
      document.querySelector(
        "#display-image"
      ).style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
  });

}

  
});

// Download Certificate

document.getElementById("Download").addEventListener("click", () => {
  let body = document.getElementById("body").innerHTML;
  let c_box = certificate_box.innerHTML;
  document.getElementById("body").innerHTML = c_box;
  document.getElementById("body").style.textAlign = "center";
  window.print();
  location.reload()
  document.querySelector("body").style.maxWidth = "fit-content"
  document.querySelector(".custom-box").style.display = "none";
  document.querySelector("#Download").style.display = "none";
});
// Font Change

document.getElementById("dancing").addEventListener("click", () => {
    document.querySelector(".name").style.fontFamily = "Dancing Script";
    document.getElementById("alex").innerHTML = "Dancing Script";
    document.getElementById("alex").style.fontFamily = "Dancing Script";
  });
  
  document.getElementById("alex2").addEventListener("click", () => {
    document.querySelector(".name").style.fontFamily = "Alex Brush";
    document.getElementById("alex").innerHTML = "Alex Brush";
    document.getElementById("alex").style.fontFamily = "Alex Brush";
  });
  
  document.getElementById("caveat").addEventListener("click", () => {
    document.querySelector(".name").style.fontFamily = "Caveat";
    document.getElementById("alex").innerHTML = "Caveat";
    document.getElementById("alex").style.fontFamily = "Caveat";
  });
  
  document.getElementById("Courgette").addEventListener("click", () => {
    document.querySelector(".name").style.fontFamily = "Courgette";
    document.getElementById("alex").innerHTML = "Courgette";
    document.getElementById("alex").style.fontFamily = "Courgette";
  });
  
  document.getElementById("Allura").addEventListener("click", () => {
    document.querySelector(".name").style.fontFamily = "Allura";
    document.getElementById("alex").innerHTML = "Allura";
    document.getElementById("alex").style.fontFamily = "Allura";
  });
  
  

//Font Size Change

document.getElementById('normal2').addEventListener('click',()=>{
  document.getElementById('normal').innerText = "Default"
  document.querySelector('.name').style.fontSize = "55px"
  document.querySelector('.name').style.bottom = "415px"
  document.querySelector('.description').style.bottom = "390px"
  document.querySelector('.sign').style.bottom = "335px"

})

document.getElementById('larger').addEventListener('click',()=>{
  document.getElementById('normal').innerText = "Large"
  document.querySelector('.name').style.fontSize = "75px"
  document.querySelector('.name').style.bottom = "432px"
  document.querySelector('.description').style.bottom = "422px"
  document.querySelector('.sign').style.bottom = "366px"

})

document.getElementById('smaller').addEventListener('click',()=>{
  document.getElementById('normal').innerText = "Small"
  document.querySelector('.name').style.fontSize = "40px"
  document.querySelector('.name').style.bottom = "402px"
  document.querySelector('.description').style.bottom = "366px"
  document.querySelector('.sign').style.bottom = "312px"
})