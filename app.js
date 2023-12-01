const exp = require('constants')
const express = require('express')

const app = express()
const PORT = 4004



app.listen(PORT, ()=>{
    console.log('Server running on port:',PORT);
})

app.use(globalErrorHandler);