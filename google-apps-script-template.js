// Google Apps Script for StudyVerse Contact Form
// Deploy as Web App: https://script.google.com/home

function doGet(e) {
  return HtmlService.createHtmlOutput("StudyVerse Contact Form API");
}

function doPost(e) {
  try {
    // Get the Google Sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Responses");
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Responses");
      const headers = ["Timestamp", "Name", "City", "Email", "Mobile", "Country", "Message"];
      newSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      newSheet.autoResizeColumns();
    }
    
    // Get form data
    const data = e.parameter;
    const timestamp = new Date().toLocaleString();
    
    // Prepare row data
    const rowData = [
      timestamp,
      data.Name || "",
      data.City || "",
      data.Email || "",
      data.Mobile || "",
      data.Country || "",
      data.Message || ""
    ];
    
    // Append data to sheet
    const responseSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Responses");
    responseSheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Form submitted successfully"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to set up the sheet with headers (run this manually once)
function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Responses");
  const headers = ["Timestamp", "Name", "City", "Email", "Mobile", "Country", "Message"];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.autoResizeColumns();
  Logger.log("Sheet setup complete!");
}
