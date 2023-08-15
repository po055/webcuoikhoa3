const products8 = {
    data: [
        {

            image: "/image/sanpham_hinh_1.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Dép lông con sóc siêu cute xả khokho85k-85k sập giá",
            text: "đ",
            text2: "72.000",
            text3: "Đã bán 9,8k"
        },
        {
            image: "/image/sanpham_hinh_2.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Tai nghe bluetooth 5.0 True Wireless Amoi F9 Pro bản quốc tế cao cấp cảm biến vân tay , kiêm sạc dự phòng",
            text: "đ",
            text2: "85.000",
            text3: "Đã bán 6k"
        },
        {
            image: "/image/sanpham_hinh_3.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "COMBO 2 áo thun tay lỡ form rộng sadtagram tee và eighteen studio",
            text: "đ",
            text2: "62.000",
            text3: "Đã bán 947"
        },
        {
            image: "/image/sanpham_hinh_4.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "COMBO siêu rẻ bánh tráng phơi sương muối tép hành NHỎ (Tặng bơ)",
            text: "đ",
            text2: "38.000",
            text3: "Đã bán 25,3k"
        },
        {
            image: "/image/sanpham_hinh_5.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Vỏ bảo vệ hộp tai nghe bằng silicon dẻo cao cấp cho AirPods Pro 2nd Airpods pro / Airpod 3 / Airpod 1/2（Not Airpods）",
            text: "đ",
            text2: "10.000",
            text3: "Đã bán 2,4k"
        },
        {
            image: "/image/sanpham_hinh_6.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Túi xách nữ đeo chéo thời trang đi chơi giá rẻ phong cách Hàn Quốc Ms01",
            text: "đ",
            text2: "66.000",
            text3: "Đã bán 2,9k"
        },
        {
            image: "/image/sanpham_hinh_7.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Mũ lưỡi trai nam nữ form mềm đa dạng họa tiết thêu chữ, Nón kết phong cách hàn quốc M08",
            text: "đ",
            text2: "27.000",
            text3: "Đã bán 12k"
        },
        {
            image: "/image/sanpham_hinh_8.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Loa bluetooth mini không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH",
            text: "đ",
            text2: "39.000",
            text3: "Đã bán 9,2k"
        },
        {
            image: "/image/sanpham_hinh_9.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Dép Quai Ngang Đế Bánh Mì Tăng Chiều Cao Họa Tiết Quả Trám",
            text: "đ",
            text2: "69.500",
            text3: "Đã bán 2,3k"
        },
        {
            image: "/image/sanpham_hinh_10.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Thùng 200 chiếc khẩu trang 5d Thịnh Phát 3 lớp kháng khuẩn [SHIP 2H HOẢ TỐC HCM]",
            text: "đ",
            text2: "17.000",
            text3: "Đã bán 23,4k"
        },
        {
            image: "/image/sanpham_hinh_11.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Máy sấy tóc công suất 3500w làm tóc nhanh khô có 2 chế độ nóng lanh kèm ống tạo kiểu -- Hàng Loại 1--QDShop",
            text: "đ",
            text2: "52.000",
            text3: "Đã bán 6,8k"
        },
        {
            image: "/image/sanpham_hinh_12.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "[HOT HOT] Điện thoại gập Oppo Find N2 HÀNG NHẬP KHẨU/bảo hành 12 tháng/1 đổi 1trong 7 ngày",
            text: "đ",
            text2: "3.290.000",
            text3: "Đã bán 26"
        },
    ]
} 

for (let item of products8.data) {
    let card8 = document.createElement("div")
    card8.classList.add("container-products")

    let text40 = document.createElement("a")
    text40.setAttribute("href", [""])
    card8.appendChild(text40)

    let text11 = document.createElement("div")
    text11.classList.add("container-prodcuts2")
    text40.appendChild(text11)

    let text30 = document.createElement("div")
    text30.classList.add("text-container")
    text40.appendChild(text30)

    let text31 = document.createElement("span")
    text31.classList.add("text-container-span")
    text31.innerHTML = "Tìm sản phẩm tương tự"
    text30.appendChild(text31)

    let text41 = document.createElement("div")
    text41.classList.add("products-img")
    text11.appendChild(text41)

    let text90 = document.createElement("div")
    text90.classList.add("products-img-2")
    text41.appendChild(text90)

    let text42 = document.createElement("img")
    text42.setAttribute("src", item["image"])
    text90.appendChild(text42)

    let text92 = document.createElement("div")
    text92.classList.add("products-img-4")
    text90.appendChild(text92)

    let text60 = document.createElement("div")
    text60.classList.add("style-img-1")
    text92.appendChild(text60)

    let text50 = document.createElement("span")
    text50.innerText = "Yêu thích"
    text60.appendChild(text50)
    
    let text93 = document.createElement("div")
    text93.classList.add("products-img-5")
    text90.appendChild(text93)

    let text61 = document.createElement("div")
    text61.classList.add("style-img-2")
    text93.appendChild(text61)

    let text51 = document.createElement("span")
    text51.innerText = "50%"
    text61.appendChild(text51)

    let text52 = document.createElement("span")
    text52.innerText = "GIẢM"
    text52.classList.add("style-img-span-2")
    text61.appendChild(text52)

    let text94 = document.createElement("div")
    text94.classList.add("products-img-6")
    text90.appendChild(text94)

    let text62 = document.createElement("div")
    text62.classList.add("style-img-3")
    text94.appendChild(text62)

    let text53 = document.createElement("ion-icon")
    text53.name = "caret-forward-outline"
    text53.classList.add("style-img-icon")
    text62.appendChild(text53)

    let text91 = document.createElement("div")
    text91.classList.add("products-img-7")
    text90.appendChild(text91)

    let text63 = document.createElement("div")
    text63.classList.add("style-img-4")
    text91.appendChild(text63)

    let text54 = document.createElement("img")
    text54.setAttribute("src", item["image2"])
    text63.appendChild(text54)

    let text80 = document.createElement("div")
    text80.classList.add("chitiet")
    text11.appendChild(text80)

    let text43 = document.createElement("div")
    text43.classList.add("title-products")
    text80.appendChild(text43)

    let text44 = document.createElement("div")
    text44.innerText = item["title"]
    text44.classList.add("div-title")
    text43.appendChild(text44)

    let text81 = document.createElement("div")
    text81.classList.add("title-products-2")
    text80.appendChild(text81)

    let text82 = document.createElement("div")
    text82.classList.add("title-products-3")
    text81.appendChild(text82)

    let text70 = document.createElement("span")
    text70.innerText = item["text"]
    text70.classList.add("products-span-1")
    text82.appendChild(text70)

    let text71 = document.createElement("span")
    text71.innerText = item["text2"]
    text71.classList.add("products-span-2")
    text82.appendChild(text71)

    let text72 = document.createElement("div")
    text72.innerText = item["text3"]
    text72.classList.add("products-span-3")
    text81.appendChild(text72)


    document.getElementById("products8").appendChild(card8)
}

const products28= {
    data: [
        {
            title: "Trung Tâm Trợ Giúp",
        },
        {
            title: "Shopee Blog",
        },
        {
            title: "Shopee Mall",
        },
        {
            title: "Hướng Dẫn Mua Hàng",
        },
        {
            title: "Hướng Dẫn Bán Hàng",
        },
        {
            title: "Thanh Toán",
        },
        {
            title: "Shopee Xu",
        },
        {
            title: "Vận Chuyển",
        },
        {
            title: "Trả Hàng & Hoàn Tiền",
        },
        {
            title: "Chăm Sóc Khách Hàng",
        },
        {
            title: "Chính Sách Bảo Hành",
        },
    ]
}

for (let item of products28.data) {
    let card28 = document.createElement("ul")
    card28.classList.add("text-63-5")

    let text3 = document.createElement("li")
    text3.classList.add("text-63-6")
    card28.appendChild(text3)

    let text1 = document.createElement("a")
    text1.classList.add("text-63-7")
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerText = item["title"]
    text2.classList.add("text-63-8")
    text3.appendChild(text2)

    document.getElementById("products28").appendChild(card28)
}


const products29= {
    data: [
        {
            title: "Giới Thiệu Về Shopee Việt Nam",
        },
        {
            title: "Tuyển Dụng",
        },
        {
            title: "Điều Khoản Shopee",
        },
        {
            title: "Chính Sách Bảo Mật",
        },
        {
            title: "Chính Hãng",
        },
        {
            title: "Kênh Người Bán",
        },
        {
            title: "Flash Sales",
        },
        {
            title: "Chương Trình Tiếp Thị Liên Kết Shopee",
        },
        {
            title: "Liên Hệ Với Truyền Thông",
        },
    ]
}

for (let item of products29.data) {
    let card29 = document.createElement("ul")
    card29.classList.add("text-63-5")

    let text3 = document.createElement("li")
    text3.classList.add("text-63-6")
    card29.appendChild(text3)

    let text1 = document.createElement("a")
    text1.classList.add("text-63-7")
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerText = item["title"]
    text2.classList.add("text-63-8")
    text3.appendChild(text2)

    document.getElementById("products29").appendChild(card29)
}

const products30= {
    data: [
        {
            image: "/image/thanhtoan_hinh1.png",
        },
        {
            image: "/image/thanhtoan_hinh2.png",
        },
        {
            image: "/image/thanhtoan_hinh3.png",
        },
        {
            image: "/image/thanhtoan_hinh4.png",
        },
        {
            image: "/image/thanhtoan_hinh5.png",
        },
        {
            image: "/image/thanhtoan_hinh6.png",
        },
        {
            image: "/image/thanhtoan_hinh7.png",
        },
        {
            image: "/image/thanhtoan_hinh8.png",
        },
    ]
}

for (let item of products30.data) {

    let card30 = document.createElement("li")
    card30.classList.add("text-63-10")

    let text1 = document.createElement("div")
    text1.classList.add("text-63-11")
    card30.appendChild(text1)


    let text2 = document.createElement("img")
    text2.setAttribute("src", item["image"])
    text1.appendChild(text2)

    document.getElementById("products30").appendChild(card30)
}

const products31 = {
    data: [
        {
            image: "/image/dvthanhtoan_hinh1.png",
        },
        {
            image: "/image/dvthanhtoan_hinh2.png",
        },
        {
            image: "/image/dvthanhtoan_hinh3.jpeg",
        },
        {
            image: "/image/dvthanhtoan_hinh4.png",
        },
        {
            image: "/image/dvthanhtoan_hinh5.png",
        },
        {
            image: "/image/dvthanhtoan_hinh6.png",
        },
        {
            image: "/image/dvthanhtoan_hinh7.png",
        },
        {
            image: "/image/dvthanhtoan_hinh8.png",
        },
        {
            image: "/image/dvthanhtoan_hinh9.png",
        },
        {
            image: "/image/dvthanhtoan_hinh10.png",
        },
        {
            image: "/image/dvthanhtoan_hinh11.png",
        },
    ]
}

for (let item of products31.data) {

    let card31 = document.createElement("li")
    card31.classList.add("text-63-10")

    let text1 = document.createElement("div")
    text1.classList.add("text-63-11")
    card31.appendChild(text1)


    let text2 = document.createElement("img")
    text2.setAttribute("src", item["image"])
    text1.appendChild(text2)

    document.getElementById("products31").appendChild(card31)
}

const products32= {
    data: [
        {
            title: "Facebook",
            name: "logo-facebook",
        },
        {
            title: "Instagram",
            name: "logo-instagram",
        },
        {
            title: "LinkedIn",
            name: "logo-linkedin",
        },
    ]
}

for (let item of products32.data) {

    let card32 = document.createElement("li")
    card32.classList.add("text-63-6")

    let text1 = document.createElement("a")
    text1.classList.add("text-63-14")
    card32.appendChild(text1)

    let text3 = document.createElement("ion-icon")
    text3.setAttribute("name", item["name"])
    text3.classList.add("ionicon")
    text1.appendChild(text3)

    let text2 = document.createElement("span")
    text2.innerText = item["title"]
    text2.classList.add("text-63-13")
    text1.appendChild(text2)

    document.getElementById("products32").appendChild(card32)
}

const products33 = {
    data: [
        {
            image: "/image/hinhapp_hinh1.png",
        },
        {
            image: "/image/hinhapp_hinh2.png",
        },
        {
            image: "/image/hinhapp_hinh3.png",
        },
    ]
}

for (let item of products33.data) {

    let card33 = document.createElement("a")
    card33.classList.add("text-63-17-100")

    let text2 = document.createElement("img")
    text2.setAttribute("src", item["image"])
    card33.appendChild(text2)

    document.getElementById("products33").appendChild(card33)
}

const products34= {
    data: [
        {
            title: "Singapore",
        },
        {
            title: "Indonesia",
        },
        {
            title: "Đài Loan",
        },
        {
            title: "Thái Lan",
        },
        {
            title: "Malaysia",
        },
        {
            title: "Việt Nam",
        },
        {
            title: "Philippines",
        },
        {
            title: "Brazil",
        },
        {
            title: "México",
        },
        {
            title: "Colombia",
        },
        {
            title: "Chile",
        },
    ]
}

for (let item of products34.data) {
    let card34 = document.createElement("div")
    card34.classList.add("text-64-4")

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text1.classList.add("text-64-5")
    card34.appendChild(text1)


    document.getElementById("products34").appendChild(card34)
}

const products35= {
    data: [
        {
            title: "Chính sách bảo mật",
        },
        {
            title: "Quy chế hoạt động",
        },
        {
            title: "Chính sách vận chuyển",
        },
        {
            title: "CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN",
        },
    ]
}

for (let item of products35.data) {
    let card35 = document.createElement("div")
    card35.classList.add("text-65-3")

    let text1 = document.createElement("a")
    text1.classList.add("text-65-4")
    card35.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerText = item["title"]
    text1.appendChild(text2)

    document.getElementById("products35").appendChild(card35)
}


// document.querySelectorAll(".text-2-8").forEach((item) => {
//     item.addEventListener("click", () => {
//         document.querySelectorAll(".text-2-10").forEach((item) => {
//             item.hidden = true
//         })
//         item.querySelector(".text-2-10").hidden = false
//     })
// })

document.querySelectorAll(".text-2-8").forEach((item) => {
    item.addEventListener("click", (e) => {
        item.querySelectorAll(".text-2-10").forEach((item) => {
            item.hidden = !item.hidden
        })
    })
})
