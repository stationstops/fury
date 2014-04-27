#!/usr/local/bin/node

function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}


console.log(process.argv);
function foobar_cont(){
    console.log("finished.");
};
sleep(3000, foobar_cont);