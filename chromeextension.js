let myLeads=[]
const deleteBtn=document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const inputbtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const UlEl = document.getElementById("ul-el");
//console.log(UlEl)

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
        render(myLeads)
}



/*
let BtEl = document.getElementById("bt-el")
BtEl.innerHTML = "<button type='button' id='buy'>Buy!</button>"

let buy = document.getElementById("buy")
buy.addEventListener("click",function(){
    BtEl.innerHTML +="<p>Thank you for buying</p>"
})
*/


// tabBtn.addEventListener("click",function(){
//     //console.log(tabBtn.value)
//     // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

//     //     // since only one tab should be active and in the current window at once
//     //     // the return variable should only have one entry
//     //     var activeTab = tabs[0];
//     //     var activeTabId = activeTab.id; // or do whatever you need
   
//     //  });
  
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

//             myLeads.push(tabs[0].url);
//             localStorage.setItem("myLeads",JSON.stringify(myLeads));
//             render(myLeads);
//         });
// });

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick",function(){
      //  console.log("double clicked!");
        localStorage.clear();
        myLeads=[];
        render(myLeads);
})

//localStorage.clear()

inputbtn.addEventListener("click",function saveinput(){
    console.log("button clicked !")
    myLeads.push(inputEl.value)
    //console.log(myLeads)
    inputEl.value=""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
   // localStorage.getItem("myLeads")



})
//console.log(myLeads)


function render(leads){

let listitems =""

for(let i=0; i < leads.length; i++) {
        
    //console.log(myLeads[i])
   // listitems += "<li><a href="+myLeads[i]+" target='_blank'>" + myLeads[i] + "</a></li>"
/******template string***********/
 listitems += `
            <li>
                <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
            </li>
            ` 



//console.log(listitems)
   /*  const li = document.createElement("li")
     li.textContent = myLeads[i]
     UlEl.append(li)
*/
}   

UlEl.innerHTML = listitems
}



