import express from 'express'
import {getData} from '../utils/index.js'

const routes = express.Router()

routes.get('/characters',async (req,res)=>{

  const data = await getData()

  res.json(data)
})



export default routes