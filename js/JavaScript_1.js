function Car_Function() {
    var Car_Output;
    var Cars = document.getElementById("Car_Input").value;
    var Car_String = " is a great Car!";
    switch(Cars) {
        case "Chevy":
            Car_Output = "Chevy" + Car_String;
            break;
        case "Ford":
            Car_Output = "Ford" + Car_String;
            break;
        case "Dodge":
            Car_Output = "Dodge" + Car_String;
            break;  
        case "Toyota":
            Car_Output = "Toyota" + Car_String;
            break; 
        case "Mazda":
            Car_Output = "Mazda" + Car_String;
            break; 
        case "Audi":
            Car_Output = "Audi" + Car_String;
            break;
        default:
            Car_Output = "Please enter a car exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Car_Output;
}