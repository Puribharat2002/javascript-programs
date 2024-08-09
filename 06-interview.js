

var interview = function(gradScore, hscScore, sscScore, candidateName){

    if (gradScore>=70 || hscScore>=80 || sscScore>90) {

        console.log(` Congrats ${candidateName} you are eligible for TCS interview.`);

    } else {

        console.log(` Unfortunately ${candidateName} are not eligible for interview.`);

    }

}
interview(80, 86, 90, "Bharat ");
interview(70, 65, 55,  "Shiva ");
interview(60, 79, 88,  "Om ");

