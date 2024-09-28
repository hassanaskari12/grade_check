let obtainedScore = Number(prompt("Enter your score"));
if(obtainedScore>=90){
    alert("The Student  Grade  is A")
}else if(obtainedScore<=89 && obtainedScore>=80){
    alert("The Student  Grade  is B")
}else if(obtainedScore>=70  && obtainedScore<=79){
    alert("The Student  Grade  is C")
}else if(obtainedScore>=60 && obtainedScore<=69){
    alert("The Student  Grade  is D")
}else if(obtainedScore<60){
    alert("The Student is Failed")
}