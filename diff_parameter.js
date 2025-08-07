function evenSizedString(str){
    const size = str.length;
    if(size %2 === 0){
        console.log("Even Size");
        return true;
    }
    else{
        console.log("Odd Size");
        return false;
    }
    console.log(str, size);
}
evenSizedString("Dhaka");