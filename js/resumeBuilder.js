/*
//$("#main").append("Bob Sinatra");
var awesomeThoughts = "My name is bob and I am awesome!";
var funThoughts = awesomeThoughts.replace("awesome","fun");
$("#main").append(funThoughts); //jquery main id
*/


//L1 q3 replace
var name = "Bob B Burger";
var formattedName = HTMLheaderName.replace("%data%",name);

var role = "Burger Flipper";
var formattedRole = HTMLheaderRole.replace("%data%",role);

var skills = ["awesomeness", "Deep Fryer", "Grease Fires" ];

$("#header").prepend(formattedRole); //jquery main id
$("#header").prepend(formattedName); //jquery main id


//$("#main").append(skills);
$("#main").append(skills[0]);
$("#main").append(skills.lengt);


