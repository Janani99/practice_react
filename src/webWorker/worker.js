onmessage=function()

{
    //performs a complex calculation
//
    let s=0;
    for(let i=0;i<10000000000;i++)
    {
        s=s+i;
    };
    console.log("worker js ",s);
    //send the result back to the main thread
    postMessage(s);
}