const jsdom = require("jsdom");
const {JSDOM} = jsdom;
var xml;
async function GetDocuments (){
    if(xml == undefined){
        let url ="https://www.torontopubliclibrary.ca/data/library-data.kml";
    let response = await fetch(url,{
        method:"GET",
        headers:{
            "Content-Type" : "application/xml"
        }
    }
    );
        data = new JSDOM(await response.text(), {contentType :"application/xml"});
        xml = data.window.document;
    }
    return xml;
}

async function GetPlaceMark(){
    xml = await GetDocuments();
    return xml.querySelectorAll("Placemark");
}


module.exports= {
    GetDocuments,
    GetPlaceMark
}