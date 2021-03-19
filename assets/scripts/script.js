console.log("anything but hello world")

// mood vs activity tabs 
function changeTab(evt, type) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(type).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // different mood avtivity tabs
  function moodTabs(evt, type) {
    var i, tabcontentTwo, tablinks;
  
    tabcontentTwo = document.getElementsByClassName("tabcontentTwo");
    for (i = 0; i < tabcontentTwo.length; i++) {
        tabcontentTwo[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(type).style.display = "block";
    evt.currentTarget.className += " active";
  }