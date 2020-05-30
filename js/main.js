// $.getJSON("../data.json", function(data) {
//     console.log(data);
// });
'use strict'
// $(document).ready(function() {
// 'esversion: 6';
// let records = [];

function getData() {
    $.ajax({
        dataType: 'json',
        url: "../data.json",
        type: 'get',
        success: function(data) {
            $(data).each(function(index, value) {
                // records.push(data);
                let logoUrl = value.logo;
                let companyName = value.company;
                let newValue = value.new;
                let featured = value.featured;
                let position = value.position;
                let role = value.role;
                let level = value.level;
                let postedAt = value.postedAt;
                let contract = value.contract;
                let location = value.location;
                let languages = value.languages;
                let tools = value.tools;


                $('.container').append('<div class="container-layout">  <div class="container-logo"><img src="' + logoUrl + '"/></div> <div class="container-content"> <p class="con-word"><span class="company-name">' + companyName + '</span> </p>  <p class="position">' + position + '</p> <p class="job-update"> ' + postedAt + ', ' + contract + '   ' + location + '</p></div><div class="container-list"> <ul class="li-list"><li>' + role + '</li> <li>' + level + '</li> <li>' + languages + '</li>   <li>' + tools + '</li> </ul></div> </div> ');

                if (newValue === true) {
                    $('.con-word').append('<span class= "new">New!</span>');
                }
                if (featured === true) {
                    $('.con-word').append('<span class= "feat">featured!</span>');
                    $(".container-layout").css("border-left", "5px solid hsl(180, 29%, 50%)");
                    // document.getElementsByClassName("container-layout").style.borderRight = "5px solid green";
                }

            });


        }
    });
}
getData();






document.addEventListener('DOMContentLoaded', function(event) {
    let containerList = document.getElementsByTagName("li");
    const sideBar = document.getElementsByClassName("sidebar");
    // let p = document.createElement('p');
    console.log(clickedRole);

    function clickedRole() {
        sideBar.textContent = "God is awesome!!!, I was clicked";
        console.log(sideBar);
        console.log("Button clicked");
    }

    for (var i = 0; i < containerList.length; i++) {
        containerList[i].addEventListener('click', clickedRole, false);
        sideBar.textContent = "God is awesome!!!, I was clicked";
        console.log("Button clicked, Okay");
    }
    console.log(containerList);
    console.info(sideBar);
    console.log(addEventListener);

});

//     (event) => {