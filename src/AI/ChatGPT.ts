import { Content } from "next/font/google"

export const ChatGPT = () => {

    const gettingResponse = async() => {
        const data = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": "Bearer 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",

            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                    role: "system",
                    content: "Você precisa buscar uma noticia recente em algum site e retornar um texto contendo o titulo, categoria, link dela e link da imagem dela. Então o retorno esperado deverá ser algo do tipo: Presidente faz isso, geral, (link) , (link da img). Não retorne qualquer outra informação"
                    }
                ]
            })
        }).then(res => res.json()).then(data => console.log(data))

        return data

    }
    return gettingResponse()


}