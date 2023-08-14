const products = {
    data: [
        {
            title: "Áo Thun Local Brand",
            hi: "index.html",
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
    text10.setAttribute("href", item["hi"])
    text10.innerText = item["title"]
    text10.classList.add("text12")
    card.appendChild(text10)

    document.getElementById("products").appendChild(card)
}

const products2 = {
    data: [
        {
            title: "Shopee",
        },
        {
            title: "Giày Dép Nam",
        },
        {
            title: "Xăng-đan và Dép",
        },
        {
            title: "Dép Đi Trong Nhà",
        },
    ]
}

for (let item of products2.data) {
    let card2 = document.createElement("div")
    card2.classList.add("text-1-1")
    
    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text1.classList.add("text-1-2")
    card2.appendChild(text1)

    let text2 = document.createElement("ion-icon")
    text2.name = "chevron-forward-outline"
    text2.classList.add("text-1-3")
    card2.appendChild(text2)

    document.getElementById("products2").appendChild(card2)
}

const products3 = {
    data: [
        {
            title: "Shopee",
        },
        {
            title: "Giày Dép Nam",
        },
        {
            title: "Xăng-đan và Dép",
        },
        {
            title: "Dép Đi Trong Nhà",
        },
    ]
}

for (let item of products2.data) {
    let card2 = document.createElement("div")
    card2.classList.add("text-1-1")
    
    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text1.classList.add("text-1-2")
    card2.appendChild(text1)

    let text2 = document.createElement("ion-icon")
    text2.name = "chevron-forward-outline"
    text2.classList.add("text-1-3")
    card2.appendChild(text2)

    document.getElementById("products2").appendChild(card2)
}