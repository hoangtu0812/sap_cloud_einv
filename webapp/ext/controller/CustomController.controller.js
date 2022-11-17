sap.ui.define([], function() {
    return {
        onIssue : function(oEvent) {
            console.log(this)
            // issueEinv(oEvent)
            callApi()
         }
    }
  })


var userName = "ct.abap"
var password = "123456zZ@#"
// var base64 = require('base-64')
var headers = new Headers()

//headers.append('Content-Type', 'text/json');
// headers.append('Authorization', 'Basic' + base64.encode(userName + ":" + password));
// function authenticateUser(user, password) {
//     var token = user + ":" + password
//     var hash = btoa(token)
//     return "Basic" + hash
// }
// function issueEinv(oEvent) {
//     console.log(oEvent)
//     callOdataApi()
//     // var accountAuth = btoa("ct.abap:123456zZ@#")
//     // var auth = {"Authorization" : `Basic${accountAuth}`}
//     // fetch("http://s4training.citek.vn:8085/sap/opu/odata/sap/ZUI_EINV/" , {header : auth})
//     // .then((response) => response.json)
//     // .then((data) => console.log(data))
// }

// function callOdataApi() {
//     // var request = new XMLHttpRequest()
//     // request.open("GET", "http://s4training.citek.vn:8085/sap/opu/odata/sap/ZUI_EINV/" ,false)
//     // request.setRequestHeader("Authorization", authenticateUser(userName, password))
//     // request.send()
//     // request.status
//     // console(request.responseText)
//     var url = "http://s4training.citek.vn:8085/sap/opu/odata/sap/ZUI_EINV/"
//     fetch(url, {method : 'GET' , headers : headers})
//     .then(response => response.json())
//     .then((data) => console.log(data))
// }

function callApi() {
    console.log("Call API")
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic Q1QuYWJhcDoxMjM0NTZ6WkAj");
myHeaders.append("Cookie", "SAP_SESSIONID_S19_100=-938PQ8wcbXxra39iMLmEDBKaPdmoxHthd8AUFaALcc%3d; sap-usercontext=sap-client=100");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://s4training.citek.vn:8085/sap/opu/odata/sap/ZUI_EINV/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}