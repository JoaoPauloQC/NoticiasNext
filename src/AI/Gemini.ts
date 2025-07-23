import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey:  "AIzaSyARvRcP6bNEWli5YRZLNKPXb-OagJsqEbU" })

export default async function Gemini (){
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Você precisa buscar uma noticia recente em algum site e retornar um texto contendo o titulo, categoria, link dela e link da imagem dela. Então o retorno esperado deverá ser algo do tipo: Presidente faz isso; geral; link ; link da img. Não retorne qualquer outra informação"
    })
    console.log(response.text)
    return (await response.text)

    }
    