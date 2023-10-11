//o nome da pasta config não é reservado

//O crypto ira gerar um codigo único para o arquivo enviado, se assemelhando muito com um ID
import crypto from "crypto"
//Cria o caminho pelo qual os arquivos seram transportados
import multer from "multer"
import { extname, resolve } from "path"


export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex")
                    const fileName = `${fileHash}-${file.originalname}`

                    /*callback tem função semelhante ao return porém funciona como um "ciclo de vida", que fica constantemente retornando valores*/
                    return callback(null, fileName)
                }
            })
        }
    }
}