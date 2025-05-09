 const currentDate = new Date();

 const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
 const currentMonth = monthNames[currentDate.getMonth()];
 const currentDay = currentDate.getDate();

 document.getElementById("month").innerHTML = currentMonth.toUpperCase();
 document.getElementById("day").innerHTML = currentDay;