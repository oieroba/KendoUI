$(document).ready(function() {
    var treeview = $("#treeview").kendoTreeView({
        dataSource: {
            data: [
                { text: "Item 1", expanded: true, items: [
                    { text: "Item 1.1" },
                    { text: "Item 1.2" },
                    { text: "Item 1.3" }
                ] },
                { text: "Item 2", items: [
                    { text: "Item 2.1" },
                    { text: "Item 2.2" },
                    { text: "Item 2.3" }
                ] },
                { text: "Item 3" }
            ]
        },
        loadOnDemand: false
    }).data("kendoTreeView"),

    handleTextBox = function(callback) {
        return function(e) {
            if (e.type != "keypress" || kendo.keys.ENTER == e.keyCode) {
                callback(e);
            }
        };
    };


    
});