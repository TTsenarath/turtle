$(document).ready(function () {
    $("form").submit(function (event) {
      event.preventDefault(); // Prevent form submission
      localStorage.setItem("fullname", $("#fullname").val());
      localStorage.setItem("mobilenumber", $("#phone").val());
      localStorage.setItem("email", $("#emailadress").val());
      localStorage.setItem("cemail", $("#ceadress").val());
      localStorage.setItem("gender", $("#gender").val());
  
      // Display values in the table
      document.getElementById("nameview").innerHTML =
        localStorage.getItem("fullname");
      document.getElementById("mobilenumberview").innerHTML =
        localStorage.getItem("mobilenumber");
      document.getElementById("emailadressview").innerHTML =
        localStorage.getItem("email");
      document.getElementById("cemailadress").innerHTML =
        localStorage.getItem("cemail");
      document.getElementById("genderview").innerHTML =
        localStorage.getItem("gender");
    });
  
    // Display values on page load
    document.getElementById("nameview").innerHTML =
      localStorage.getItem("fullname");
    document.getElementById("mobilenumberview").innerHTML =
      localStorage.getItem("mobilenumber");
    document.getElementById("emailadressview").innerHTML =
      localStorage.getItem("email");
    document.getElementById("cemailadress").innerHTML =
      localStorage.getItem("cemail");
    document.getElementById("genderview").innerHTML =
      localStorage.getItem("gender");
  
    //   document.getElementById("dateview").innerHTML = localStorage.getItem("date");
    //   document.getElementById("fchildview").innerHTML =
    //     localStorage.getItem("fChild");
    //   document.getElementById("fadultview").innerHTML =
    //     localStorage.getItem("fAdults");
    //   document.getElementById("infantsview").innerHTML =
    //     localStorage.getItem("infants");
    //   document.getElementById("sladultview").innerHTML =
    //     localStorage.getItem("slAdults");
    //   document.getElementById("slchildview").innerHTML =
    //     localStorage.getItem("slChild");
    //   document.getElementById("durationview").innerHTML =
    //     localStorage.getItem("duration");
  
    // view data ---------------------------------------------------------------------------------------------------
  
    var booking_data = JSON.parse(localStorage.getItem("booking") || "[]");
  
    document.getElementById("dateview").innerHTML = booking_data.visit_date;
    document.getElementById("sladultview").innerHTML =
      "$" + booking_data.sl_adult_cost;
    document.getElementById("slchildview").innerHTML =
      "$" + booking_data.sl_child_cost;
    document.getElementById("fadultview").innerHTML =
      "$" + booking_data.fr_adult_cost;
    document.getElementById("fchildview").innerHTML =
      "$" + booking_data.fr_child_cost;
    document.getElementById("infantsview").innerHTML = "Free";
    document.getElementById("durationview").innerHTML =
      booking_data.selected_slots.length +
      " hrs (" +
      booking_data.normal_hours +
      " Normal : " +
      booking_data.peek_hours +
      " Peak )";
  
    var slots = "";
    booking_data.selected_slots.forEach((e) => {
      slots += e + ",";
    });
  
    document.getElementById("timeview").innerHTML = slots;
    document.getElementById("totalpayableview").innerHTML =
      "$" + booking_data.total_payble;
  });