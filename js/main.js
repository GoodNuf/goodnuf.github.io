class user {
    constructor(obj,fname) {
        if(fname)
        {
            sessionStorage.setItem('id',obj.Id);
            sessionStorage.setItem('email',obj.Name.trim());
            sessionStorage.setItem('name',fname);
            console.log('CONSTRUCTOR [id: "',this.id+'" email: "',this.email+'"]');
            return;
        }
        else
        {
            sessionStorage.setItem('id',obj.User.Id);
            sessionStorage.setItem('email',obj.User.Name.trim());
            sessionStorage.setItem('name',obj.User.Policy.BlockedChannels[0]);
            console.log("obj.User.Policy.BlockedChannels ["+obj.User.Policy.BlockedChannels+"]");
            console.log("obj.User.Policy.BlockedChannels[0] ["+obj.User.Policy.BlockedChannels[0]+"]");
            console.log('LOAD CONSTRUCTOR [id: "',this.id+'" email: "',this.email+'"]'+' name: ['+obj.User.Policy.BlockedChannels[0]+']');
        }
    }
    nameLoad(obj,fname) {
        sessionStorage.setItem('id',obj.User.Id);
        sessionStorage.setItem('email',obj.User.Name);
        sessionStorage.setItem('name',fname);
        console.log('CONSTRUCTOR [id: "',this.id+'" email: "',this.email+'"]');
    }
    static load()
    {
        var obj={};
        obj.id=sessionStorage.getItem('id');
        obj.email=sessionStorage.getItem('email');
        if(sessionStorage.getItem('name'))
            obj.name=sessionStorage.getItem('name');
            // console.log('TRUE');
        else
            console.log('FALSE');
            // this.name=sessionStorage.getItem('name');
        console.log('LOAD [id: "',obj.id+'" email: "',obj.email+'"]');
        return obj;
    }
    destroy() {
        sessionStorage.clear();
        console.log('User destroyed:',this);
    }
    get id() {
        return sessionStorage.getItem('id');
    }
    set name(name) {
        sessionStorage.setItem('name', name);
    }
    get name() {
        return sessionStorage.getItem('name');
    }
    get email() {
        return sessionStorage.getItem('email');
    }
}
function ShowHiddenText()
{
    var hiddenTextContainer=document.getElementById("HiddenTextContainer");
    if (hiddenTextContainer.style.display==="none")
    {
        hiddenTextContainer.style.display="block";
        window.scrollTo(0, document.body.scrollHeight*69);
        terms.innerText="Hide Terms & Conditions";
        terms.classList.replace("terms-link","terms-linkS");
        body.style.overflow="visible";
    }
    else
    {
        hiddenTextContainer.style.display="none";
        window.scrollTo(0,0)
        terms.innerText="View Terms & Conditions";
        terms.classList.replace("terms-linkS","terms-link");
        body.style.overflow="hidden";
    }
}
function Catalog(x)
{
    if (x === false)
        window.location.href='/catalog/?switch=true';
    else
        window.location.href='/catalog/';
}
function validateForm()
{
    var password=document.forms["signupForm"]["password"].value;
    var confirmPassword=document.forms["signupForm"]["cpassword"].value;
    if (password!==confirmPassword)
    {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
function validateRequestForm()
{
    var year=document.forms["signupForm"]["year"].value;
    if (year<1895||year>2025)
    {
        alert("Please enter a valid year.");
        return false;
    }
    return true;
}
function showPW()
{
    var x=document.getElementById("pw");
    if(document.getElementById("pw2"))
    var x2=document.getElementById("pw2");
    var y=document.getElementById("pwb");
    var txt=document.getElementById("pwTxt");
    if (x.type==="password")
    {
        txt.innerText="Hide Password";
        x.type="text";
        if(x2)
        x2.type="text";
        y.classList.replace("checkBubble","checkBubbleS");
    }
    else
    {
        txt.innerText="Show Password";
        x.type="password";
        if(x2)
        x2.type="password";
        y.classList.replace("checkBubbleS","checkBubble");
    }
}
function rSwitch(xx,yy,xxc,yyc)
{
    var x=document.getElementById(xx);
    var y=document.getElementById(yy);
    var xc=document.getElementById(xxc);
    var yc=document.getElementById(yyc);
    x.checked = false;
    y.checked = false;
    xc.classList.replace("radioBubbleS", "radioBubble");
    yc.classList.replace("radioBubbleS", "radioBubble");
    x.checked = true;
    xc.classList.replace("radioBubble", "radioBubbleS");
    // if(x.checked)
    // {
    //     x.checked=false;
    //     y.checked=false;
    //     xc.classList.replace("radioBubbleS","radioBubble");
    //     yc.classList.replace("radioBubbleS","radioBubble");
    // }
    // else
    // {
    //     x.checked=true;
    //     y.checked=false;
    //     xc.classList.replace("radioBubble","radioBubbleS");
    //     yc.classList.replace("radioBubbleS","radioBubble");
    // }
}
function pSwitch(xx,yy,zz,xxc,yyc,zzc)
{
    var x=document.getElementById(xx);
    var y=document.getElementById(yy);
    var z=document.getElementById(zz);
    var xc=document.getElementById(xxc);
    var yc=document.getElementById(yyc);
    var zc=document.getElementById(zzc);
    x.checked = false;
    y.checked = false;
    z.checked = false;
    xc.classList.replace("radioBubbleS", "radioBubble");
    yc.classList.replace("radioBubbleS", "radioBubble");
    zc.classList.replace("radioBubbleS", "radioBubble");
    x.checked = true;
    xc.classList.replace("radioBubble", "radioBubbleS");
}
function sSwitch(xx,yy,xxc,yyc)
{
    resetForm();
    var x=document.getElementById(xx);
    var s=document.getElementById("sContainer");
    var q=document.getElementById("qContainer");
    var st=document.getElementById("stContainer");
    // var lq=document.getElementById("lowQ");
    // var hq=document.getElementById("highQ");
    // var byE=document.getElementById("byEpisode");
    // var byS=document.getElementById("bySeason");
    // var byS=document.getElementById("stText");
    q.style.display="none";
    // x.checked=true;
    rSwitch(xx,yy,xxc,yyc);
    if(x.checked)
    {
        s.style.display="flex";
        sRequire(true);
        mRequire(false);
    }
    else
    {
        st.style.display="none";
        s.style.display="none";
        sRequire(false);
        mRequire(false);
    }

}
function mSwitch(xx,yy,xxc,yyc)
{
    resetForm();
    var x=document.getElementById(xx);
    var q=document.getElementById("qContainer");
    var s=document.getElementById("sContainer");
    var st=document.getElementById("stContainer");
    s.style.display="none";
    st.style.display="none";
    rSwitch(xx,yy,xxc,yyc);
    if(x.checked)
    {
        q.style.display="flex";
        mRequire(true);
        sRequire(false);
    }
    else
    {
        q.style.display="none";
        mRequire(false);
        sRequire(false);
    }
}
function byS()
{

    var st=document.getElementById("stContainer");
    var txt=document.getElementById("stText");
    if(st.style.display==="block"&&txt.placeholder==='Season(s) (e.g. "3", "1-4", "1,3,5")')
    {
        // st.style.display="none";
        rSwitch("bySeason","byEpisode","bySeasonBubble","byEpisodeBubble");
        return;
    }
    txt.placeholder='Season(s) (e.g. "3", "1-4", "1,3,5")';
    st.style.display="block";
    rSwitch("bySeason","byEpisode","bySeasonBubble","byEpisodeBubble");
}
function byE()
{
    var st=document.getElementById("stContainer");
    var txt=document.getElementById("stText");
    if(st.style.display==="block"&&txt.placeholder==='Episode(s) (e.g. "S01E03", "Season 1 Episode 3", "1x3")')
    {
        // st.style.display="none";
        rSwitch("byEpisode","bySeason","byEpisodeBubble","bySeasonBubble");
        return;
    }
    txt.placeholder='Episode(s) (e.g. "S01E03", "Season 1 Episode 3", "1x3")';
    st.style.display="block";
    rSwitch("byEpisode","bySeason","byEpisodeBubble","bySeasonBubble");
}
function resetForm() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var radios = document.querySelectorAll('input[type="radio"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
    radios.forEach(function(radio) {
        radio.checked = false;
    });

    var bubbles = ["mBubble", "sBubble", "lowBubble", "highBubble", "bySeasonBubble", "byEpisodeBubble"];
    var checkboxes = ["byEpisode", "bySeason", "highQ", "lowQ", "show", "movie"];

    bubbles.forEach(function(id) {
        var bubble = document.getElementById(id);
        bubble.classList.replace("radioBubbleS", "radioBubble");
    });

    checkboxes.forEach(function(id) {
        var checkbox = document.getElementById(id);
        checkbox.required = false;
        checkbox.checked = false;
    });
}
function mRequire(x)
{
    var lq=document.getElementById("lowQ");
    var hq=document.getElementById("highQ");
    lq.required=x;
    hq.required=x;
}
function sRequire(x)
{
    var lq=document.getElementById("lowQ");
    var hq=document.getElementById("highQ");
    var stText=document.getElementById("stText");
    var byE=document.getElementById("byEpisode");
    var byS=document.getElementById("bySeason");
    lq.required=x;
    hq.required=x;
    stText.required=x;
    byE.required=x;
    byS.required=x;
}
async function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('pw').value;

    const response = await fetch('https://watch.fartflix.com/Users/AuthenticateByName', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'MediaBrowser Token="8db286654bf641c0ba4fac4934949912", Client="fartflix.com", Device="loginUser", DeviceId="1", Version="1.0.0"'
        },
        body: JSON.stringify({
            Username: username,
            Pw: password
        })
    });

    if (response.ok) {
        const data=await response.json();
        const usr=new user(data);
        console.log("LOGINUSER FUNCTION [ID: "+usr.id+" EMAIL: "+usr.email+" NAME: "+usr.name+']');
        console.log('Login successful:', data);
        alert('Successfully logged in as "'+data.User.Name+'"');
        window.location.href = '/login/make-a-request';
    } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Login failed:', response.status, response.statusText, errorData);
        alert('Login failed. ' + (errorData.Message || 'Please check your username and password.'));
        return;
    }
}
async function newUser() {
    const username=document.getElementById('email').value;
    const password=document.getElementById('pw').value;
    const fname=document.getElementById('fname').value;
    const response = await fetch('https://watch.fartflix.com/Users/New', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'MediaBrowser Token="8db286654bf641c0ba4fac4934949912", Client="fartflix.com", Device="newUser", DeviceId="1", Version="1.0.0"'
        },
        body: JSON.stringify({
            Name: username,
            Password: password,
        })
    });
    if (response.ok) {
        const data = await response.json();
        console.log('Account creation successful:', data);
        fetch(`https://watch.fartflix.com/Users/${encodeURIComponent(data.Id)}/Policy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'MediaBrowser Token="8db286654bf641c0ba4fac4934949912", Client="fartflix.com", Device="newUser", DeviceId="1", Version="1.0.0"'
            },
            body: JSON.stringify({
                EnableMediaPlayback: false,
                EnableContentDownloading: false,
                EnableLiveTvAccess: false,
                EnableLiveTvManagement: false,
                MaxActiveSessions:1,
                // BlockedChannels: [fname],
                AuthenticationProviderId: data.Policy.AuthenticationProviderId,
                PasswordResetProviderId: data.Policy.PasswordResetProviderId
            })
        });
        const usr=new user(data,fname);
        console.log("NEWUSER FUNCTION [ID: "+usr.id+" EMAIL: "+usr.email+" NAME: "+usr.name+']');
        return true;
    } else {
        console.error('Account modification failed:',response.statusText);
        alert('Account modification failed.');
        return false;
    }
}
function memberSwitch()
{
    var x=document.getElementById("member");
    var b=document.getElementById("memberBox");
    if(x.style.display==="none")
    {
        x.style.display="block";
        window.scrollTo(0,document.body.scrollHeight*69);
        b.classList.replace("box2","box2S");
    }
    else
    {
        x.style.display="none";
        window.scrollTo(0,0);
        b.classList.replace("box2S","box2");
    }
}
function tSwitch(showTable,hideTable,showBubble,hideBubble)
{
    var showT=document.getElementById(showTable);
    var hideT=document.getElementById(hideTable);
    var showB=document.getElementById(showBubble);
    var hideB=document.getElementById(hideBubble);
    hideT.style.display="none";
    showT.style.display="table";
    hideB.classList.replace("radioBubbleS","radioBubble");
    showB.classList.replace("radioBubble","radioBubbleS");
}