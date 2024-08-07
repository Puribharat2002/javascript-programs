function interviewCheck( gradScore, hscScore, sscScore, candidateName){
   var result =  gradScore>=70 || hscScore>=80 || sscScore>90
                 ? `Congrats ${candidateName} you are eligible for TCS interview. `
                  : `Unfortunately ${candidateName} are not eligible for interview.`
    console.log(result);
    
}
interviewCheck(80, 86, 90, "Bharat ");
interviewCheck(70, 65, 55,  "Shiva "); 
interviewCheck(60, 79, 88,  "Om ");