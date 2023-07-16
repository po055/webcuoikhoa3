const products = {
    data: [
        {
            title: "Áo Thun Local Brand",
        },
        {
            title: "Điện Thoại 1k",
        },
        {
            title: "Đồ Ăn vặt",
        },
        {
            title: "Dép Nữ",
        },
        {
            title: "Iphone 14 Pro Max",
        },
        {
            title: "Áo Polo Nam",
        },
        {
            title: "Đồ Dùng Học Tập",
        },
        {
            title: "Đồng Hồ",
        },
        {
            title: "Gấu Bông",
        },
    ]
}

for (let item of products.data) {
    let card = document.createElement("div")
    card.classList.add("text11")

    let text10 = document.createElement("a")
    text10.innerText = item["title"]
    text10.classList.add("text12")
    card.appendChild(text10)

    document.getElementById("products").appendChild(card)
}

const products2 = {
    data: [
        {
            image: "/image/quangcao_hinh1.jpeg",
        },
        {
            image: "/image/quangcao_hinh9.jpeg",
        },
        {
            image: "/image/quangcao_hinh3.png",
        },
        {
            image: "/image/quangcao_hinh4.png",
        },
        {
            image: "/image/quangcao_hinh5.jpeg",
        },
        {
            image: "/image/quangcao_hinh6.jpeg",
        },
        {
            image: "/image/quangcao_hinh7.png",
        },
        {
            image: "/image/quangcao_hinh8.jpeg",
        },
    ]
}

for (let item of products2.data) {
    let card2 = document.createElement("div")
    card2.classList.add("slider-item")
    
    let image = document.createElement("img")
    image.setAttribute("src", item["image"])
    card2.appendChild(image)

    document.getElementById("products2").appendChild(card2)
}