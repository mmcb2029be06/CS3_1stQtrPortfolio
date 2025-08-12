//no script tag needed!!!



//ar age = window.prompt("What is your age? ", "0");
//var maxAge = window.prompt("Until how long will you live? ", "0");
//var numPerDay = window.prompt("How many bowls of tsamporado will you eat per day? ", "0")

if (confirm("Are you sure you're good with the values?")){
    var totalRequired = (parseInt(perday) * 365) * (parseInt(mxage) - parseInt(age));
    document.write("You will need " + totalRequired + " bowls of tsamporado to last until you turn the ripe old age of " + maxAge);
} else {
    alert("Run the code again. ");
}

//var age = 14;
//var maxAge = 120;
//var numPerDay = 3;




