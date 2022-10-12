// function createlabels(tagname,attrname,attrvalue,content){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.innerHTML=content;
//     return ele;
//     }
    
//     function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//         var ele=document.createElement(tagname);
//         ele.setAttribute(attrname,attrvalue);
//         ele.setAttribute(attrname1,attrvalue1);
//         return ele;
//     }
//     function createlinebreak(tagname){
//     var ele=document.createElement(tagname);
//     return ele;
//     }
//     var label=createlabels("label","for","firstname","firstname");
//     var br1=createlinebreak("br");
//     var input=createinput("input","type","firstname","firstname");
//     var br2=createlinebreak("br");

//     var label=createlabels("label","for","middlename","middlename");
//     var br3=createlinebreak("br");
//     var input=createinput("input","type","middlename","middlename");
//     var br4=createlinebreak("br");

//     var label=createlabels("label","for","lastname","lastname");
//     var br5=createlinebreak("br");
//     var input=createinput("input","type","lastname","lastname");
//     var br6=createlinebreak("br");

//     var label=createlabels("label","for","phone","phone");
//     var br7=createlinebreak("br");
//     var input=createinput("input","type","phone","phone");
//     var br8=createlinebreak("br");

//     document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,label3,br7,input3,br8);
    function foo() {
        var res1=document.getElementById("firstname").value;
        var res2=document.getElementById("middlename").value;
        var res3=document.getElementById("lastname").value;
        var res4=document.getElementById("phone").value;
        var res5=document.getElementById("email").value;
        var res6=document.getElementById("pass").value;
        console.log(res1,res2,res3,res4,res5,res6);






    }