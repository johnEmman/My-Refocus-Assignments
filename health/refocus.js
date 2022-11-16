function  pulseOximeterReading(oxygen){
    if(oxygen >= 96){
        console.log("Normal reading.")
    }else if(oxygen == 95){
        console.log("Acceptable to continue home monitoring")
    }else if((oxygen >= 93) && (oxygen <= 94)){
        console.log("Seek advice from health professionals")
    }else if(oxygen <= 92){
        console.log("Seek urgent medical advice.")
    }else{
        console.log("Invallid")
    }
}
pulseOximeterReading(94)


function pulseOximeterReading(pulseRate){
    if((pulseRate >= 40) && (pulseRate <= 100)){
        console.log("Normal reading")
    }else if((pulseRate >= 101) && (pulseRate <= 109)){
        console.log("Acceptable to continue home monitoring")
    }else if((pulseRate >= 110) && (pulseRate <= 130)){
        console.log("Seek advice from health professionals.")
    }else if(pulseRate >= 131){
        console.log("Seek urgent medical advice")
    }else{
        console.log("Invallid")
    }
}
pulseOximeterReading(1)