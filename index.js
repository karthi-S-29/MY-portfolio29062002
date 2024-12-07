function showsidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex';
}
function hidesidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none';
}


var typed = new Typed('.typewriter1', {
    strings: ['Frontend Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });