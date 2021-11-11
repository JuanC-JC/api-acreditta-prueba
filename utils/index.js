import fetch from 'node-fetch'
import fs from 'fs'
import path from 'path'

import { fileURLToPath } from 'url'

const token = 2376169992528422	


// const {pathname: root} = new URL('../utils/data.json', import.meta.url)

// console.log(root)

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dataPath = path.resolve(__dirname,'data.json')

export const getAll = async ()=>{

  let counter = 1

  const data = await fs.promises.readFile(path.resolve(__dirname,'data.json'),'utf-8')

  const list = [...JSON.parse(data)]

  while (counter){
    
    try{
      
      const data = await  fetch(`https://superheroapi.com/api/${token}/${counter}`)
    
      const response = await data.json()

      if(response.response === 'success'){
        counter++
        list.push(response)
      }else{
        counter = false
      }
    
      console.log(counter)

    }catch(error){
      counter = false
    }

  }

  fs.writeFileSync(path.resolve(__dirname,'data.json'),JSON.stringify(list), { encoding: "utf8", flag: "w" })

}

export const getData = async () =>{

  const file = await fs.promises.readFile('./utils/data.json','utf-8')

  const data = JSON.parse(file)
  
  return data

}