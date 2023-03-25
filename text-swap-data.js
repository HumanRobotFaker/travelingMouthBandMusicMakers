const ahuramazdaLink = document.createElement('a')
ahuramazdaLink.innerText = 'A H U R A__M A Z D A'
ahuramazdaLink.setAttribute('href', '003.html')

const ahrimanLink = document.createElement('a')
ahrimanLink.innerText = 'A H R I M A N'
ahrimanLink.setAttribute('href', '007.html')

const textSwapData = {
    "ahuramazda": {
        type: "sequenced",
        index: 0,
        texts: [
            "Ahuramazda",
            "Ahura Mazda",
            "Ah Ur A Ma Z Da",
            "A H U R A M A Z D A",
            ahuramazdaLink
        ]
    },
    "ahriman": {
        type: "sequenced",
        index: 0,
        texts: [
            "Ahriman",
            "Ahri Man",
            "Ah Ri Ma N",
            ahrimanLink
        ]
    },
}