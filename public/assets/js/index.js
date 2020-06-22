"use strict";

$(document).ready( function() {

    getTestimonials();


});

async function getTestimonials() {
    let testimonials;
    try {
         fetch("api/v1/testimonials").then(function (response) {
                if (!response.ok) {
                    console.log("HTTPS API Error, status = " + response.status);
                }
                return response.json();
             }).then(function (json) {
                 var trial = document.getElementById("testimonial");
                 let { name, surname, review } = json[0];
                 trial.innerHTML = `${name} - ${surname} - ${review}`;
                 //testimonials = document.createElement("h1");
                 //testimonials.innerHTML = `${json.name}`;
                 console.log(json);
         });

    }
    catch (e) {
        location.replace("./404.html");
        console.log(e);
    }

}