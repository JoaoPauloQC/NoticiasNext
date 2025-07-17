

type thenew = {

    title : string ;
    category : string
    link : string,
    img : string ,
    

}

export type { thenew }




const noticia1: thenew = {
     title:"PSG ganha do Real Madrid no mundial de clubes" ,
     category : 'sport', 
     link :"https://ge.globo.com/futebol/mundial-de-clubes/jogo/09-07-2025/parissaintgermain-realmadrid.ghtml",
     img : "https://s2-ge.glbimg.com/b85_kU9Q-rgnmphZTQ1NmIN3pJc=/0x0:4783x2691/640x360/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/z/v/5c5UghRhuOlS7rzQtYgQ/gettyimages-2224327324.jpg"
}

const noticia2: thenew = {
    title : "Trump anuncia aumento de tarifa nas importações",
    category: "economia", 
    link : "https://g1.globo.com/economia/noticia/2025/07/12/trump-tarifas.ghtml",
    img : "https://s2-g1.glbimg.com/xDUyrY-Z2ROHumNl2zsM-wsTrhY=/0x0:5500x3697/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/q/1/MLCjh9RJ26dNJwH54OUQ/2025-06-22t022319z-1477768578-rc2e7fatvext-rtrmadp-3-iran-nuclear.jpg"
}

const noticia3: thenew = { 
    title: 'Comportamento decepcionante do Balanço Geral RJ',
    category: 'geral',
    link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://oglobo.globo.com/play/noticia/2025/07/04/nota-0-o-comportamento-do-apresentador-do-balanco-geral-rj-apos-abrir-uma-enquete.ghtml&ved=2ahUKEwjJ_960tKuOAxVmDrkGHep7NW0QxfQBKAB6BAgIEAE&usg=AOvVaw0cNT8XtyfmVmKfZxHlKlam', 
    img: 'data:image/jpeg;base64,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'
    
    
}

const noticia4: thenew = {
    title :'IA pode acabar com até 92 milhões de empregos',
    category : 'tecnologia', 
    link : 'https://g1.globo.com/trabalho-e-carreira/noticia/2025/07/13/ia-pode-eliminar-ate-92-milhoes-de-empregos-mas-essas-profissoes-devem-sobreviver.ghtml',
    img :   'https://s2-g1.glbimg.com/KGrnH-rnrj1WYMXeKVnWwxT0VmE=/0x0:1200x525/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/x/b/dWwp2RQwO4fogDeOmvSQ/72575862-1004-1-.webp',
}

let news : thenew[] = []; 

news.push(noticia1)

news.push(noticia2)

news.push(noticia3)

news.push(noticia4)

let categories: string[] = []
for (let n of news) {
    if (!categories.includes(n.category)){
        categories.push(n.category)
    }
}

export { categories }

export { news }

   