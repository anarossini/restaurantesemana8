const http = require('http')

const servidor = http.createServer((request,response)=>{
    if (request.url === '/'){
        response.end('Salve mundinho')
    }else if(request.url ==='/comidas'){
        
        if (request.method === 'GET'){
            request.setEncoding('utf8')
            response.writeHead(200, 
                {"Content-Type":"text/html;charset=utf-8"
            });
            response.end('<h1>Respostão do mundão</h1>')
            
        }else if(request.method === 'POST'){
            response.writeHead(200, 
                {"Content-Type":"text/html;charset=utf-8"
            })
            response.end('<h2>RESPOSTECA DO POST</h2>')
        }
    }
});

servidor.listen(3000);
console.log('Servidor rodando na porta 3000');