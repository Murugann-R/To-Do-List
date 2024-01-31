var valueee;
var newww = [];
function addhidden() {
  valueee = document.querySelector(".text").value;
  newww.push(valueee);
  document.querySelector(".text").value = "";
  if (newww.length == 1) {
    document.querySelector(".hayley").textContent = newww[0];
    document.querySelector(".bottom").style.visibility = "visible";
  } else if (newww.length == 2) {
    document.querySelector(".hayley").textContent = newww[0];
    document.querySelector(".bottom").style.visibility = "visible";
    document.querySelector(".hayleyy").textContent = newww[1];
    document.querySelector(".neomi").style.visibility = "visible";
  } else {
    document.querySelector(".hayley").textContent = newww[0];
    document.querySelector(".bottom").style.visibility = "visible";
    document.querySelector(".hayleyy").textContent = newww[1];
    document.querySelector(".neomi").style.visibility = "visible";
    document.querySelector(".hayleyyy").textContent = newww[2];
    document.querySelector(".lagertha").style.visibility = "visible";
  }
}

function element() {
  if (newww.length == 3) {
    newww.pop(2);
  } else if (newww.length == 2) {
    newww.pop(1);
  } else {
    newww.pop(0);
  }
}

function closehiddenone() {
  
    // newww.pop(0);
  element()
  document.querySelector(".bottom").style.visibility = `hidden`;
  if (newww.length == 2) {
    document.querySelector(".hayleyy").style.marginTop = "70px";
    document.querySelector(".closee").style.marginTop = "70px";
    document.querySelector(".hayleyyy").style.marginTop = "100px";
    document.querySelector(".closeee").style.marginTop = "100px";
  } else {
    document.querySelector(".hayleyyy").style.marginTop = "70px";
    document.querySelector(".closeee").style.marginTop = "70px";
    document.querySelector(".hayleyy").style.marginTop = "70px";
    document.querySelector(".closee").style.marginTop = "70px";
  }
}

function closehiddentwo() {
  // newww.pop(1);
  element()
  document.querySelector(".neomi").style.visibility = `hidden`;
  if (newww.length == 2) {
    document.querySelector(".hayley").style.marginTop = "70px";
    document.querySelector(".close").style.marginTop = "70px";
    document.querySelector(".hayleyyy").style.marginTop = "100px";
    document.querySelector(".closeee").style.marginTop = "100px";
  } else {
    document.querySelector(".hayleyyy").style.marginTop = "70px";
    document.querySelector(".closeee").style.marginTop = "70px";
    document.querySelector(".hayley").style.marginTop = "70px";
    document.querySelector(".close").style.marginTop = "70px";
  }
}

function closehiddenthree() {
  // newww.pop(2);
  element()
  document.querySelector(".lagertha").style.visibility = `hidden`;
  if (newww.length == 2) {
    document.querySelector(".hayley").style.marginTop = "70px";
    document.querySelector(".closee").style.marginTop = "70px";
    document.querySelector(".hayleyy").style.marginTop = "100px";
    document.querySelector(".closee").style.marginTop = "100px";
  } else {
    document.querySelector(".hayley").style.marginTop = "70px";
    document.querySelector(".close").style.marginTop = "70px";
    document.querySelector(".hayleyy").style.marginTop = "70px";
    document.querySelector(".closee").style.marginTop = "70px";
  }
}
