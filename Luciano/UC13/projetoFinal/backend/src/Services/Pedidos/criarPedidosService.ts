import prismaClient from "../../prisma";

interface criar {
    clienteId: string
}

export class criarPedidosService {
    async execute({ clienteId }: criar) {
        
        const repostaClienteId = await prismaClient.pedidos.findFirst({
            where:{
                clienteId:clienteId
            } 
        })
        if(repostaClienteId){
            return {dados:'Cliente esta com um pedido em aberto'}
        }
        
        const resposta = await prismaClient.pedidos.create({
            
                data: {
                    clienteId: clienteId,
                }, 
                
                select: {
                    id: true,
                    num: true
                }
            })
            return resposta
    }
}