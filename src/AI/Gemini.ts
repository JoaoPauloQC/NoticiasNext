export const Gemini = async () =>{
    const apiKey: string = "AIzaSyARvRcP6bNEWli5YRZLNKPXb-OagJsqEbU"
    return (await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents : [
                    {
                        role: "user",
                        parts: [
                            {
                            text: "Você precisa buscar uma noticia recente em algum site e retornar um texto contendo o titulo, categoria, link dela e link da imagem dela. Então o retorno esperado deverá ser algo do tipo: Presidente faz isso; geral; (link) ; (link da img). Não retorne qualquer outra informação"
                            }
                        ]
                    }
                ]
        })
        }
        ).then(res => res.json()))
}