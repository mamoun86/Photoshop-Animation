// Copyright 2013
// Compiled (via JavascriptListener or ActionToJavascript Xtools…) by StŽphane Baril
// Modified on Mach 2014 by Clunkid (https://vimeo.com/clunkid)

// enable double clicking from the Finder or Explorer
#target photoshop

//Make Photoshop the front most application
app.bringToFront();
 
///////////////////////////////////////////////////
// SETUP
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////

///////////////////////////////////////////////////
//FUNCTIONS
///////////////////////////////////////////////////


function frameMinusOne() {

    // =======================================================

    function GetFrameRate(){
        var ref = new ActionReference();
         ref.putProperty( charIDToTypeID( 'Prpr' ), stringIDToTypeID("documentTimelineSettings") );
          ref.putClass( stringIDToTypeID( "timeline" ) );
         var desc = new ActionDescriptor();
         desc.putReference( charIDToTypeID( 'null' ), ref );
         var resultDesc = executeAction( charIDToTypeID( 'getd' ), desc, DialogModes.NO );

         return resultDesc.getDouble( stringIDToTypeID('frameRate') );
    };
        var idmoveOutTime = stringIDToTypeID( "moveOutTime" );
            var desc6 = new ActionDescriptor();
            var idtimeOffset = stringIDToTypeID( "timeOffset" );
                var desc7 = new ActionDescriptor();
                var idseconds = stringIDToTypeID( "seconds" );
                desc7.putInteger( idseconds, 0 );
                var idframe = stringIDToTypeID( "frame" );
                desc7.putInteger( idframe, -1 );
                var idframeRate = stringIDToTypeID( "frameRate" );
                desc7.putDouble( idframeRate, GetFrameRate() );
            var idtimecode = stringIDToTypeID( "timecode" );
            desc6.putObject( idtimeOffset, idtimecode, desc7 );
        executeAction( idmoveOutTime, desc6, DialogModes.NO );

    };



//=========================================
//                    frameMinusOne.main
//=========================================
//

frameMinusOne.main = function () {
  frameMinusOne();
};

app.activeDocument.suspendHistory("Expose 1 frame less", 'frameMinusOne.main()');