var sheetName = 'Sheet1';
var scriptProp = PropertiesService.getScriptProperties();


function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function sendDupli(){
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Duplicates");
  var to = s.getLastRow();
  var mess = `Multiple Registrations have been found with this EMAIL\nYour Registration has been CANCELLED\nPlease Register again while strictly abiding the rules\nFor further information contact : medha@giet.ac.in`;
  var sub = 'Your Registration for PAPER PRESENTATION has been Cancelled!!!'
  for(i=2;i<=to;i++)
  {
    MailApp.sendEmail(s.getRange(i,1).getValue(),sub,mess);
    s.getRange(i,1).clearContent();
  }
  Logger.log(i);
}

function sendMailREG() {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var s2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Count");
  let fr = s2.getRange(s2.getLastRow(),1).getValue();
  Logger.log(fr);
  let to = s.getLastRow();
  Logger.log(to);
  const sub = "Registration Successful!";
  if((to-fr)>=100){
  let ran = fr+100;
  Logger.log(ran);
  for(i=fr;i<=ran;i++){
      assignID(i);
      let bod = message(i);
      MailApp.sendEmail(s.getRange(i,6).getValue(),sub,bod);
  };
  s2.getRange(s2.getLastRow()+1,1).setValue(ran);
  }
  else{
    let ran = ((to-fr)<=0)?(fr):(to-fr);
    Logger.log(ran);
    let fin = ((to-fr)<=0)?(fr+1):(fr+ran);
    if(to-fr==0) {fin-=1;}
    for(i=fr;i<=fin;i++){
      assignID(i);
      let bod = message(i);
      MailApp.sendEmail(s.getRange(i,6).getValue(),sub,bod);
    }
    if(to-fr==0) {fin+=1;}
    s2.getRange(s2.getLastRow()+1,1).setValue(fin);
  }
  function message(row)
      {
        var whatsapp = 'https://chat.whatsapp.com/BwbNL9ZpMQMLjMtkTm6sDV';
        var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
        mess = `Greetings ${s.getRange(row,9).getValue()},\nYou have been sucessfully registered for Paper Presentation\nYour TEAM ID :  ${s.getRange(row,13).getValue()}\nJoin the following group for further information,\nWhatsapp : ${whatsapp} \n\n\n\n\nPLEASE NOTE THAT THIS IS A COMPUTER GENERATED MESSAGE,\nFOR QUERIES AND FURTHER HELP PLEASE REFER : \nhttps://www.gietmedha.com/\nmedha@giet.ac.in`;
        return mess;
      }
}


function assignID(r){
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var man = "PAP";
  s.getRange(r,13).setValue(man+(1000+r-1));
}

function doPost (e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
