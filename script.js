const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function()
{
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});
function sayHello()
{
let name=confirm("Are you sure to book the Room?");
if(name == true)
{
alert("-----YOUR IS ROOM IS BOOKED!!-----");
alert("****THANK YOU*****");
}
else{
alert("=====FAILED TO BOOK THE ROOM======");
}
}
document.getElementById("mbt").onclick=sayHello;


function log()
{
alert("***Login Successfully***");
}
document.getElementById("myfyn").onclick=log;






