function tSwitch()
{
    var sTable=document.getElementById("sTable");
    var mTable=document.getElementById("mTable");
    var map=document.getElementById("map");
    var map2=document.getElementById("map2");
    if (mTable.style.display==="table")
    {
        document.title="Shows";
        mTable.style.display="none";
        sTable.style.display="table";
        map2.classList.remove("map");
        map2.onclick=null;
        map.classList.add("map");
        map.onclick=tSwitch;
    }
    else
    {
        document.title="Movies";
        sTable.style.display="none";
        mTable.style.display="table";
        map.classList.remove("map");
        map.onclick=null;
        map2.classList.add("map");
        map2.onclick=tSwitch;
        body.scrollHeight=document.body.scrollHeight+30;
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
        body.style.overflow="visible";
    }
    else
    {
        hiddenTextContainer.style.display="none";
        window.scrollTo(0,0)
        terms.innerText="View Terms & Conditions";
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
    if(x.checked)
    {
        x.checked=false;
        y.checked=false;
        xc.classList.replace("radioBubbleS","radioBubble");
        yc.classList.replace("radioBubbleS","radioBubble");
    }
    else
    {
        x.checked=true;
        y.checked=false;
        xc.classList.replace("radioBubble","radioBubbleS");
        yc.classList.replace("radioBubbleS","radioBubble");
    }
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
    // var lq = document.getElementById("lowQ");
    // var hq = document.getElementById("highQ");
    // var stText = document.getElementById("stText");
    s.style.display="none";
    st.style.display="none";
    rSwitch(xx,yy,xxc,yyc);
    if(x.checked)
    // if(x.style.classList.contains("radioBubble"))
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
    if(st.style.display==="block"&&txt.placeholder==='Season(s) ($2-$4 each) (e.g. "3", "1-4", "1,3,5")')
    {
        st.style.display="none";
        rSwitch("bySeason","byEpisode","bySeasonBubble","byEpisodeBubble");
        return;
    }
    txt.placeholder='Season(s) ($2-$4 each) (e.g. "3", "1-4", "1,3,5")';
    st.style.display="block";
    rSwitch("bySeason","byEpisode","bySeasonBubble","byEpisodeBubble");
}
function byE()
{
    var st=document.getElementById("stContainer");
    var txt=document.getElementById("stText");
    if(st.style.display==="block"&&txt.placeholder==='Episode(s) ($1-$2 each) (e.g. "S01E03", "Season 1 Episode 3", "1x3")')
    {
        st.style.display="none";
        rSwitch("byEpisode","bySeason","byEpisodeBubble","bySeasonBubble");
        return;
    }
    txt.placeholder='Episode(s) ($1-$2 each) (e.g. "S01E03", "Season 1 Episode 3", "1x3")';
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

    const response = await fetch('https://fartflix.duckdns.org:8920/Users/AuthenticateByName', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Emby-Authorization': 'MediaBrowser Client="fartflix.com", Device="login", DeviceId="1", Version="1.0.0"'
        },
        body: JSON.stringify({
            Username: username,
            Pw: password
        })
    });

    if (response.ok) {
        const data = await response.json();
        // Handle successful login, e.g., store token, redirect user, etc.
        console.log('Login successful:', data);
        // console.log('Name:', data.User.Name);
        // Example: Store the access token in localStorage
        // localStorage.setItem('jellyfinToken', data.AccessToken);
        // Redirect to another page or update the UI
        alert('Successfully logged in as ' + data.User.Name);
        window.location.href = '/login/make-a-request'; // Change to your desired page
    } else {
        // Handle login failure
        console.error('Login failed:', response.statusText);
        alert('Login failed. Please check your username and password.');
    }
}
async function newUser() {
    const username = document.getElementById('email').value;
    const password = document.getElementById('pw').value;

    const response = await fetch('https://fartflix.duckdns.org:8920/Users/New', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Emby-Authorization': 'MediaBrowser Client="fartflix.com", Device="newUser", DeviceId="1", Version="1.0.0"'
        },
        body: JSON.stringify({
            Username: username,
            Pw: password
        })
    });

    if (response.ok) {
        const data = await response.json();
        // Handle successful login, e.g., store token, redirect user, etc.
        console.log('Account creation successful:', data);
        // console.log('Name:', data.User.Name);
        // Example: Store the access token in localStorage
        // localStorage.setItem('jellyfinToken', data.AccessToken);
        // Redirect to another page or update the UI
        alert('Account creation successful!');
        // window.location.href = '/login/make-a-request'; // Change to your desired page
    } else {
        // Handle login failure
        console.error('Account creation failed:', response.statusText);
        alert('Account creation failed.');
    }
}