function todoDescriptionWidth(element) {
    element.setStyle({
        "width": "40%"
    });
};
/*
 The method is used to handle the startup functions alone
 */
function startupFn() {
    $('addButton').observe('click', function (e) {
        alert($("todoName").value + " : " + $("todoDescription").value);
        operateLocalStore("add", $("todoName").value, $("todoDescription").value);
    });

    $('todoName').observe('click', function (e) {
        $('todoName').value = "";
    });
    $('todoName').observe('mouseleave', function (e) {
        if (e.target.value == "") {
            e.target.value = "Enter the name"
        }
    });


    $('climateMaxButton').observe('click', function (e) {
        var maxClimate = getClimateMax();
        $("climateMaxButton").value = maxClimate;
    });
};

/*
 The method will return the climate of the place
 */
function getClimateMax() {
    var url = "http://localhost:8081/webamsProject/asset/assets/I0000000001";
    var returnValue = "";
    //var transport = new XMLHttpRequest();
    var json = "";
    try {
        var ajaxCall = new Ajax.Request(url, {
            method: "get",
            //requestHeaders: {"Access-Control-Allow-Headers: Origin": "X-Requested-With, Content-Type, Accept"},
            onSuccess: function (transport,json) {
                var content = transport.responseJSON;
                alert(json ? Object.inspect(json) : "no JSON object");
            },
            onFailure: function () {
                alert("hi onFailure");
            },
            onComplete: function (response) {
                if (200 == response.status)
                    alert(response);
            }
        });
    }
    catch (e) {
        alert(e);
    }
//    returnValue = ajaxCall.
    return returnValue;
}


/*
 * The method is work with local store
 */
function operateLocalStore(operations, key, obj) {

    localStorage = Element.Storage;

    switch (operations) {
        case "add" :
        {
            // Put the object into storage
            localStorage.setItem(key, obj);
        }
            break;
        case "delete" :
        {
            // Put the object into storage
            localStorage.removeItem(key, obj);
        }
            break;
        case "retrieve" :
        {
            // Put the object into storage
            return localStorage.getItem(key, obj);
        }
            break;
        case "retrieveAll" :
        {
            var returnObject = {};
            for (var i in localStorage) {
                val = localStorage.getItem(i);
                value = val.split(",");
                //splitting string inside array to get name
                name[i] = value[1];
                // getting name from split string
            }
            return localStorage.values;
        }
            break;

    }

};
