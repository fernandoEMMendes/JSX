function showtime (){
    data = new Date();
    hours = mydate.gethours();
    minutes = mydate.getminutes
    seconds = mydate.getseconds
    if(hours < 10) hours = 0 + hours;
    if(minutes <10) minutes = 0 + minutes;
    if(seconds <10) seconds = 0 + seconds;
    $("Horario").text(hours+ ":" +minutes+ ":" +seconds)
    setTimeout("showtime()", 1000);







}