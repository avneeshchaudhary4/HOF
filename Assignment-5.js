let regExone = /https:a/gi
let  ab = "https: lorem djhh bdhhdv hbhdg ";
const result =regExone.test(ab)
if(result===true){
    console.log("Match found ");
} else {
    console.log("Match not found ");
}