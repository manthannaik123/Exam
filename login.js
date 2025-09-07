const storedata = JSON.parse(localStorage.getItem("Studentdetails"));

if (storedata) {
    console.log("Username:", storedata.us);
    console.log("Phone Number:", storedata.nu);
    console.log("Email:", storedata.em);
    console.log("Password:", storedata.pa);
} else {
    console.log("NO data found");
}

document.getElementById("bu1").addEventListener("click",function (e){
    e.preventDefault();

    let username=document.getElementById("us1");
    let password=document.getElementById("pa1");

    console.log(username);
    console.log(password);

   if (username.value == storedata.us) 
        {
        if (password.value == storedata.pa) 
            {
                const popup = document.getElementById("loadingPopup");
                const loadingText = document.getElementById("loadingText");
                popup.style.display = "block";

                let percent = 0;
                const interval = setInterval(() => {
                    percent += 9;
                    loadingText.textContent = `Loading... ${percent}%`;

                if (percent >= 100) {
                    clearInterval(interval);
                    window.location.href = "ui.html";
                }
            }, 100);
        } else {
           const popup = document.getElementById("errorPopup");
                const loadingText = document.getElementById("Text");
                popup.style.display = "block";
                  
                let percent = 0;
                const interval = setInterval(() => {
                    percent += 9;

                if (percent >= 100) {
                    clearInterval(interval);
                }
            }, 100);
        }
    } else {
        console.log("Wrong credentials");
    }
});

