import {fastify} from 'fastify'
const server = fastify()
server.get('/', ()=>{
    return 'Hello World'
})
server.get('/hello', ()=>{
    return 'Hello Tauan'
})
server.get('/Node', ()=>{
    return 'Hello Node.JS'
})
server.listen({
    port: 3333,
})