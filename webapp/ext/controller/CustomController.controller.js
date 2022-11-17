sap.ui.define([], function() {
    return {
        onIssue : function(oEvent) {
            console.log(this)
            issueEinv(oEvent)
         }
    }
  })

function issueEinv(oEvent) {
    console.log(oEvent)
}