var airConsole = null;

var init = function()
{
    console.log("Controller Script Loaded");

    airconsole = new AirConsole(
        {
           orientation : AirConsole.ORIENTATION_LANDSCAPE,
           device_motion : 100

        }
    );

    
    function shit(x,y)
    {   
       // airconsole.message(AirConsole.SCREEN, {type : "Move", xVel : x, yVel : y});
        console.log("TOUCH");
    }

}

window.onload = init;
