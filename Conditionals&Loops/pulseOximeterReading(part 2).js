function pulseOximeterReading(val){
    if((val >= 40) && (val <= 100)) console.log("Normal reading");

    else if((val >= 101) && (val <= 109)) console.log("Acceptable to continue home monitoring");

    else if((val >= 110) && (val <= 130)) console.log("Seek advice from health professionals");

    else if(val >= 131) console.log("Seek urgent medical advice");

    else console.log("Invalid")
}
pulseOximeterReading(10)