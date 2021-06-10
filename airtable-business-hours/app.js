const base = require("airtable").base("appVwoybPzKlAVvbN");

(async () => {
  const records = await base("Business Hours")
    .select({
      view: "Grid view",
    })
    .firstPage()
  
  for (const record of records) {
    console.log(record.fields)
  }
})()
