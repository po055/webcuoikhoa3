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
            title: "Sóc ghi",
        },
        {
            title: "Sóc  nâu",
        },
        {
            title: "Bánh bao hồng",
        },
        {
            title: "Bánh bao trắng",
        },
        {
            title: "Bánh bao đen",
        },
    ]
}

for (let item of products3.data) {
    let card3 = document.createElement("button")
    card3.innerText = item["title"]
    card3.classList.add("text-2-49")

    let text3 = document.createElement("div")
    text3.classList.add("text-2-50")
    text3.hidden = true
    card3.appendChild(text3)

    let text2 = document.createElement("ion-icon")
    text2.name = "checkmark-outline"
    text2.classList.add("text-2-51")
    text3.appendChild(text2)

    document.getElementById("products3").appendChild(card3)
}

const products4 = {
    data: [
        {
            title: "36",
        },
        {
            title: "37",
        },
        {
            title: "38",
        },
        {
            title: "39",
        },
        {
            title: "40",
        },
    ]
}

for (let item of products4.data) {
    let card4 = document.createElement("button")
    card4.innerText = item["title"]
    card4.classList.add("text-2-68")

    let text3 = document.createElement("div")
    text3.classList.add("text-2-69")
    text3.hidden = true
    card4.appendChild(text3)

    let text2 = document.createElement("ion-icon")
    text2.name = "checkmark-outline"
    text2.classList.add("text-2-51")
    text3.appendChild(text2)

    document.getElementById("products4").appendChild(card4)
}

let amountElement = document.getElementById("amount");
let amount = amountElement.value;

let render = (amount) => {
    amountElement.value = amount
}

let handlePlus = () => {
    amount++
    render(amount);
}

let handleMinus = () => {
    if (amount > 1)
        amount--;
    render(amount);
}

amountElement.addEventListener("input", () => {
    amount = amountElement.value;
    amount = parseInt(amount);
    amount = (isNaN(amount) || amount == 0) ? 1 : amount;
    render(amount);
});

document.querySelectorAll(".text-2-49").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".text-2-50").forEach((item) => {
            item.hidden = true;
        });
        item.querySelector(".text-2-50").hidden = false;
    });
});

document.querySelectorAll(".text-2-68").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".text-2-69").forEach((item) => {
            item.hidden = true;
        });
        item.querySelector(".text-2-69").hidden = false;
    });
});

