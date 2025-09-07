document.getElementById("bu").addEventListener("click",function (e){
    e.preventDefault();

    let username=document.getElementById("us").value;
    let number=document.getElementById("po").value;
    let email=document.getElementById("em").value;
    let password=document.getElementById("pa").value;

    let details={
        us:username,
        nu:number,
        em:email,
        pa:password
    }
    console.log(details);
    localStorage.setItem("Studentdetails",JSON.stringify(details));
    window.location.href="login.html"
});