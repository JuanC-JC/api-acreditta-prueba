import cors from 'cors'
import express from 'express'
import routes from './views/index.js'

const app = express()
const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(routes)


app.get('/',(req,res)=>{
  res.json({version:'1.0'})
})


app.listen(port,()=>{
  console.log(`escuchando puerto ${port}`);
})