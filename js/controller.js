var airConsole = null;

var init = function()
{

    airconsole = new AirConsole(
        {
           orientation : AirConsole.ORIENTATION_LANDSCAPE,
           device_motion : 100

        }
    );

    console.log("Screen Script Loaded");
    

}

window.onload = init;
