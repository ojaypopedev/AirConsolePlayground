var airConsole = null;

var init = function()
{

    var output_log = document.getElementById('output_log');

    airconsole = new AirConsole();
    
    console.log("Screen Script Loaded");
    
    airconsole.onMessage = function(device_id, data){

        if(data.type === "Direction")
        {
            appendTextToElement(output_log, device_id+data.direction);
        }

        if(data.type === "Move"){
            appendTextToElement(output_log,device_id+": ("+data.xVel+","+data.yVel+").");
        }

    }


}

window.onload = init;
