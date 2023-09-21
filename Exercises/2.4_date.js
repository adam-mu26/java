function dates(){
    const dayNames = ["Sunday", "Monday", "Tuesday","Wendneday","Thursday","Friday","Saturday"];
    const monthNames = ['January','February','March','April','May','June','July','August','September','Octuber','November','December']
  
   const date = new Date()
   console.log(`Today is ${dayNames[date.getDay()]} the ${date.getDate()} of ${monthNames[date.getMonth()]} ${date.getFullYear()}`)
  }
  
  dates()
  