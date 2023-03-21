
function getFormValues(){

        var first = document.getElementById("numb1").value
        var second = document.getElementById("numb2").value
        var equation = document.getElementById("Opearator").value
        console.log(first,second,equation)
        var out = result (first,second,equation)
        document.getElementById("output").innerHTML = out

}

function result(a,b,c){

    var final = eval(a+c+b)

    return final
}


function getFormExpressionValues(){

    var expression = document.getElementById("expression").value

    console.log(expression)

    try {
        var outExp = eval(expression)
        console.log("evaluated output", outExp)
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert(e.message+ ": So, please enter valid Expression");
        }
        else if(outExp===undefined){
            alert("enter valid expression")
        }

        outExp = "Sorry, No answer"

    }

    console.log("output from the expression",outExp)


    document.getElementById("expOutput").innerHTML = outExp


}