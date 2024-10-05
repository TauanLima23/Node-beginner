import {createServer} from 'node:http'
const server = createServer ((request, response)=>{
    console.log('Olá')
    response.write('Tauan123')
    return response.end()
})
server.listen(3333)