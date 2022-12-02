function pulseOximeterReading(val){
    if(val >= 95) console.log("Normal reading");
    
    else if(val == 95) console.log("Acceptable to continue home monitoring");

    else if((val >= 92) && (val <= 95)) console.log("Seek advice from health professionals");

    else if(val <= 92) console.log("Seek urgent medical advice.");
 
    else console.log("Invalid");
}
pulseOximeterReading()

