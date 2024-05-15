const btn1=document.getElementById("p1");
const btn2=document.getElementById("p2");
const btn3=document.getElementById("p3");
const text2=document.getElementById("text2");
const text4=document.getElementById("text4");
const img=document.getElementById("image");

let h1="Launch vehicle";
let p1="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
let h2="Spaceport";
let p2="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.";
let h3="Space capsule ";
let p3="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
btn1.onclick = function(){
    text2.textContent=h1;
    text4.textContent=p1;
    img.src='./image/image-launch-vehicle-portrait.jpg'
}
btn2.onclick = function(){
    text2.textContent=h2;
    text4.textContent=p2;
    img.src='./image/image-spaceport-portrait.jpg' 
}
btn3.onclick = function(){
    text2.textContent=h3;
    text4.textContent=p3;
    img.src='./image/image-space-capsule-portrait.jpg'
}