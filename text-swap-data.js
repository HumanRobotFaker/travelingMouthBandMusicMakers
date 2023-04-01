function createLink (text, url) {
    const link = document.createElement('a')
    link.innerText = text
    link.setAttribute('href', url)
    return link
}

const textSwapData = {
    "ahuramazda": {
        type: "sequenced",
        index: 0,
        texts: [
            "Ahuramazda",
            "Ahura Mazda",
            "Ah Ur A Ma Z Da",
            "A H U R A M A Z D A",
            createLink('A H U R A__M A Z D A', 'retired_pages/newspaperhell.html')
        ]
    },
    "ahriman": {
        type: "sequenced",
        index: 0,
        texts: [
            "Ahriman",
            "Ahri Man",
            "Ah Ri Ma N",
            createLink('A H R I M A N', 'images/Author-Devolve-AI.gif')
        ]
    },

"angramainya": {
    type: "sequenced",
    index: 0,
    texts: [
        "[Angramainya]",
        "Angra Mainya",
        "Ahriman",
        createLink('A H R I M A N', 'images/Author-Devolve-AI.gif')
    ]
},
    
"10megaStars" {
    type: "sequenced",
    index: 0,
    texts: [
        "10 megaStars",
        "10 million stars",
        "10,000,000 stars",
    ]



}


