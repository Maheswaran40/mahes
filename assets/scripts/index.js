// document.title="class 1"
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.forms);
// console.log(document.images);
// console.log(document.links);



// document.getElementById("head").style.color="red"
// document.getElementsByClassName("head")[3].style.color="red"
// document.getElementsByTagName("h1")[4].style.backgroundColor="blue"
// document.querySelector(".head").style.color="red"
// document.querySelectorAll(".head")[1].style.color="red"


// let h1tag=document.getElementById("head")
// h1tag.style.color="red"
// h1tag.style.backgroundColor="red"
// h1tag.innerText="jeswanth"

// document.getElementById("para").innerHTML="<h1> jeswanth </h1>"
// document.getElementById("para").style.color="blue"

// let data=document.createElement("div")
// data.innerText="hi"
// document.body.appendChild(data)


// let data = document.createElement("div");

// data.innerText = "hi";

// document.body.appendChild(data);


// let data = document.createElement("div")
// data.innerText = "hi"
// document.body.appendChild(data)




// function fun_name(parameters){
//     statement1()
//     statement2()
//     statement3()
// }

// fun_name(arguments) // function calling


// function loginFun() {
//     console.log("hi");
//     let h1tag = document.getElementById("head")
//     h1tag.style.color = "red"

// }
// loginFun() 


function formSub(event){
    event.preventDefault()
    let inputData=document.getElementById("inputdata").value
    console.log(inputData);

    document.getElementById("head").innerText=inputData
    
}