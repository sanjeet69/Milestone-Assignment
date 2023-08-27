function vCount(sm)
{
    let vlist = 'aeiouAEIOU';
    let vscount = 0;

for( let i = 0;  i < sm.length; i++)
{
    if(vlist.indexOf(sm[i]) !== -1)
    {
    vscount += 1;
    }
}
return vscount;
}
console.log ( vCount("sanjeetkumar ranjeet kumar"));