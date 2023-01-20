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
                      src="../assets/img/Certificates/EDIT/5/5 - 1.png"
                      alt=""
                    />
                    <div class="name">${first} ${last}</div>
                    <div class="description">For the completion of ${course_length} hours of ${course_name} Course from our institution.</div>
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

  // Certificate Change

  document.getElementById("two").addEventListener("click", () => {
    document.querySelector(".two").style.border =
      "2.5px solid rgb(33, 118, 255)";
    document.querySelector(".one").style.border = "none";
    document.querySelector(".three").style.border = "none";
    document.querySelector(".name").style.color = "#004AAD";
    
    document
    .getElementById("certificate")
    .setAttribute("src", "../assets/img/Certificates/EDIT/5/5 - 2.png");
});

document.getElementById("three").addEventListener("click", () => {
    document.querySelector(".three").style.border =
    "2.5px solid rgb(33, 118, 255)";
    document.querySelector(".two").style.border = "none";
    document.querySelector(".one").style.border = "none";
    document.querySelector(".name").style.color = "#008037";
    
    document
    .getElementById("certificate")
    .setAttribute("src", "../assets/img/Certificates/EDIT/5/5 - 3.png");
});

document.getElementById("one").addEventListener("click", () => {
    document.querySelector(".one").style.border =
    "2.5px solid rgb(33, 118, 255)";
    document.querySelector(".two").style.border = "none";
    document.querySelector(".three").style.border = "none";
    document.querySelector(".name").style.color = "#A63121";

    document
      .getElementById("certificate")
      .setAttribute("src", "../assets/img/Certificates/EDIT/5/5 - 1.png");
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
    document.querySelector(".name").style.fontFamily = "Great Vibes";
    document.getElementById("alex").innerHTML = "Great Vibes";
    document.getElementById("alex").style.fontFamily = "Great Vibes";
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
  document.querySelector('.name').style.fontSize = "67px"
  document.querySelector('.description').style.bottom = '372px'
  document.querySelector('.sign').style.bottom = "313px"

})

document.getElementById('larger').addEventListener('click',()=>{
  document.getElementById('normal').innerText = "Large"
  document.querySelector('.name').style.fontSize = "87px"
  document.querySelector('.description').style.bottom = '401px'
  document.querySelector('.sign').style.bottom = "344px"


})

document.getElementById('smaller').addEventListener('click',()=>{
  document.getElementById('normal').innerText = "Small"
  document.querySelector('.name').style.fontSize = "47px"
  document.querySelector('.description').style.bottom = '343px'
  document.querySelector('.sign').style.bottom = "285px"

})