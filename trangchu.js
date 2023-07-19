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

const products3 = {
    data: [
        {
            image: "/image/icon_hinh2.png",
            title: "Miễn Phí Ship - Có Shopee", 
        },
        {
            image: "/image/icon_hinh3.png",
            title: "Voucher Giảm Đến 200.000Đ", 
        },
        {
            image: "/image/icon_hinh4.png",
            title: "Hàng Hiệu Outlet Giảm 50%", 
        },
        {
            image: "/image/icon_hinh5.png",
            title: "Mã Giảm Giá", 
        },
        {
            image: "/image/icon_hinh6.png",
            title: "Bắt Trend - Giá Sốc", 
        },
        {
            image: "/image/icon_hinh7.png",
            title: "Nạp Thẻ, Dịch Vụ & Khách Sạn", 
        },
        {
            image: "/image/icon_hinh8.png",
            title: "Chọn Số Trúng 25.000 Xu", 
        },
        {
            image: "/image/icon_hinh9.png",
            title: "Hàng Quốc Tế", 
        },
        {
            image: "/image/icon_hinh10.png",
            title: "Gì Cũng Rẻ - Mua Là Freeship", 
        },
    ]
}

for (let item of products3.data) {
    let card3 = document.createElement("div")
    card3.classList.add("container-icon")

    let text30 = document.createElement("a")
    text30.setAttribute("href", [""])
    card3.appendChild(text30)

    let text31 = document.createElement("div")
    text31.classList.add("icon-img")
    text30.appendChild(text31)

    let text32 = document.createElement("img")
    text32.setAttribute("src", item["image"])
    text31.appendChild(text32)

    let text33 = document.createElement("div")
    text33.classList.add("title-icon")
    text30.appendChild(text33)

    let text34 = document.createElement("p")
    text34.innerText = item["title"]
    text33.appendChild(text34)

    document.getElementById("products3").appendChild(card3)
}
