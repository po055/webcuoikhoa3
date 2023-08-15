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
    text10.setAttribute("href", item["hi"])
    text10.innerText = item["title"]
    text10.classList.add("text122")
    card.appendChild(text10)

    document.getElementById("products").appendChild(card)
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

const products4 = {
    data: [
        {
            image: "/image/image_hinh1.png",
            title: "Thời Trang Nam",
        },
        {
            image: "/image/image_hinh2.png",
            title: "Điện Thoại & Phụ Kiện",
        },
        {
            image: "/image/image_hinh3.png",
            title: "Thiết Bị Điện Tử ",
        },
        {
            image: "/image/image_hinh4.png",
            title: "Máy Tính & Laptop",
        },

        {
            image: "/image/image_hinh5.png",
            title: "Máy Ảnh & Máy Quay Phim",
        },
        {
            image: "/image/image_hinh6.png",
            title: "Đồng Hồ",
        },
        {
            image: "/image/image_hinh7.png",
            title: "Giày Dép Nam",
        },
        {
            image: "/image/image_hinh8.png",
            title: "Thiết Bị Điện Gia Dụng",
        },
        {
            image: "/image/image_hinh9.png",
            title: "Thể thao & Du Lịch",
        },
        {
            image: "/image/image_hinh10.png",
            title: "Ô Tô & Xe Máy & Xe Đạp",
        },
        {
            image: "/image/image_hinh11.png",
            title: "Balo & Túi Ví Nam",
        },
        {
            image: "/image/image_hinh12.png",
            title: "Đồ Chơi",
        },
        {
            image: "/image/image_hinh13.png",
            title: "Chăm Sóc Thú Cưng",
        },
        {
            image: "/image/image_hinh14.png",
            title: "Dụng Cụ Và Thiết Bị Tiện Ích",
        },
        {
            image: "/image/image_hinh15.png",
            title: "Thời Trang Nữ",
        },
        {
            image: "/image/image_hinh16.png",
            title: "Mẹ & Bé",
        },{
            image: "/image/image_hinh17.png",
            title: "Nhà Cửa & Đời Sống",
        },
        {
            image: "/image/image_hinh18.png",
            title: "Sắc Đẹp",
        },
        {
            image: "/image/image_hinh19.png",
            title: "Giày Dép Nữ",
        },
        {
            image: "/image/image_hinh20.png",
            title: "Túi Ví Nữ",
        },
        {
            image: "/image/ịmage_hinh21.png",
            title: "Phụ Kiện & Trang Sức Nữ",
        },
        {
            image: "/image/image_hinh22.png",
            title: "Bách Hoá Online",
        },
        {
            image: "/image/image_hinh23.png",
            title: "Nhà Sách Online",
        },
        {
            image: "/image/image_hinh24.png",
            title: "Giặt Giũ & Chăm Sóc Nhà Cửa",
        },
        {
            image: "/image/image_hinh25.png",
            title: "Voucher & Du Lịch",
        },
    ]
}

for (let item of products4.data) {
    let card4 = document.createElement("div")
    card4.classList.add("container-service")

    let text40 = document.createElement("a")
    text40.setAttribute("href", [""])
    card4.appendChild(text40)

    let text41 = document.createElement("div")
    text41.classList.add("service-img")
    text40.appendChild(text41)

    let text42 = document.createElement("img")
    text42.setAttribute("src", item["image"])
    text41.appendChild(text42)

    let text43 = document.createElement("div")
    text43.classList.add("title-service")
    text40.appendChild(text43)

    let text44 = document.createElement("p")
    text44.innerText = item["title"]
    text43.appendChild(text44)

    document.getElementById("products4").appendChild(card4)
}

const products5 = {
    data: [
        {
            image: "/image/3caihinh_hinh1.png"
        },
    ]
}

for (let item of products5.data) {
    let card5 = document.createElement("div")
    card5.classList.add("slider-item")
    
    let image = document.createElement("img")
    image.setAttribute("src", item["image"])
    card5.appendChild(image)

    let aSliderItem = document.createElement("div")
    aSliderItem.classList.add("slider-a")
    card5.appendChild(aSliderItem)

    let a1 = document.createElement("a")
    a1.href = "#"
    aSliderItem.appendChild(a1)

    let a2 = document.createElement("a")
    a2.href = "#"
    aSliderItem.appendChild(a2)   
    
    let a3 = document.createElement("a")
    a3.href = "#"
    aSliderItem.appendChild(a3)

    document.getElementById("products5").appendChild(card5)
}

const products6 = {
    data: [
        {

            image: "/image/sanpham_hinh_1.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Dép lông con sóc siêu cute xả khokho85k-85k sập giá",
            text: "đ",
            text2: "72.000",
            text3: "Đã bán 9,8k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_2.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Tai nghe bluetooth 5.0 True Wireless Amoi F9 Pro bản quốc tế cao cấp cảm biến vân tay , kiêm sạc dự phòng",
            text: "đ",
            text2: "85.000",
            text3: "Đã bán 6k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_3.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "COMBO 2 áo thun tay lỡ form rộng sadtagram tee và eighteen studio",
            text: "đ",
            text2: "62.000",
            text3: "Đã bán 947",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_4.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "COMBO siêu rẻ bánh tráng phơi sương muối tép hành NHỎ (Tặng bơ)",
            text: "đ",
            text2: "38.000",
            text3: "Đã bán 25,3k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_5.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Vỏ bảo vệ hộp tai nghe bằng silicon dẻo cao cấp cho AirPods Pro 2nd Airpods pro / Airpod 3 / Airpod 1/2（Not Airpods）",
            text: "đ",
            text2: "10.000",
            text3: "Đã bán 2,4k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_6.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Túi xách nữ đeo chéo thời trang đi chơi giá rẻ phong cách Hàn Quốc Ms01",
            text: "đ",
            text2: "66.000",
            text3: "Đã bán 2,9k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_7.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Mũ lưỡi trai nam nữ form mềm đa dạng họa tiết thêu chữ, Nón kết phong cách hàn quốc M08",
            text: "đ",
            text2: "27.000",
            text3: "Đã bán 12k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_8.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Loa bluetooth mini không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH",
            text: "đ",
            text2: "39.000",
            text3: "Đã bán 9,2k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_9.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Dép Quai Ngang Đế Bánh Mì Tăng Chiều Cao Họa Tiết Quả Trám",
            text: "đ",
            text2: "69.500",
            text3: "Đã bán 2,3k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_10.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Thùng 200 chiếc khẩu trang 5d Thịnh Phát 3 lớp kháng khuẩn [SHIP 2H HOẢ TỐC HCM]",
            text: "đ",
            text2: "17.000",
            text3: "Đã bán 23,4k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_11.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Máy sấy tóc công suất 3500w làm tóc nhanh khô có 2 chế độ nóng lanh kèm ống tạo kiểu -- Hàng Loại 1--QDShop",
            text: "đ",
            text2: "52.000",
            text3: "Đã bán 6,8k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_12.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "[HOT HOT] Điện thoại gập Oppo Find N2 HÀNG NHẬP KHẨU/bảo hành 12 tháng/1 đổi 1trong 7 ngày",
            text: "đ",
            text2: "3.290.000",
            text3: "Đã bán 26",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_13.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Áo Thun Form Fit FEARLESSLY. Áo Baby Tee Phối Tay Sọc Chất Cotton Co Giãn",
            text: "đ",
            text2: "65.000",
            text3: "Đã bán 6,9k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_14.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Tai Nghe Bluetooth M10 Pro Tai Nghe Không M10 Pro Phiên Bản Nâng Cấp Pin Trâu, Nút Cảm Ứng Tự Động Kết Nối - BINTECH",
            text: "đ",
            text2: "89.000",
            text3: "Đã bán 5,8k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_15.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Dép quai ngang chữ S nam nữ chữ nổi chống nước,chống hôi chân",
            text: "đ",
            text2: "61.000",
            text3: "Đã bán 3,9k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_16.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Áo Khoác Bomber Siêu Dày Bo Viền Siêu Đẹp  - Áo Bomber Chất Gió 2 Lớp Form Unisex Nam Nữ Siêu Đẹp (ảnh thật)",
            text: "đ",
            text2: "63.000",
            text3: "Đã bán 2,1k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_17.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Túi xách nữ đeo chéo thời trang đi chơi giá rẻ phong cách Hàn Quốc Ms01",
            text: "đ",
            text2: "66.000",
            text3: "Đã bán 2,9k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_18.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "[HÀNG LOẠI 1] DÉP KHỦNG LONG CỔ DÀI SIÊU DỄ THƯƠNG CHẤT LIỆU EVA ĐÀN HỒI ÊM CHÂN_RUBISHOES",
            text: "đ",
            text2: "89.000",
            text3: "Đã bán 983",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_19.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Bộ ga gối 3 món poly coton 1m6x2m và 1m8x2m hàng loại 1",
            text: "đ",
            text2: "11.000",
            text3: "Đã bán 88,4k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_20.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Bộ ga gối 3 món poly coton 1m6x2m và 1m8x2m hàng loại 1",
            text: "đ",
            text2: "47.000",
            text3: "Đã bán 5,5k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_21.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "[Fom nhỏ] Dép quai ngang,Dép lê HM da quai dán đế 3cm cực hot-Dép nữ cao cấp 2023",
            text: "đ",
            text2: "49.000",
            text3: "Đã bán 1,9k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_22.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Kệ sách để bàn bằng gỗ đa năng Béo shop màu trắng tháo rời lắp ghép dễ dàng tiện lợi",
            text: "đ",
            text2: "65.000",
            text3: "Đã bán 11,7k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_23.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Kìm Bóp Tập Cơ Tay, Dụng Cụ Tập Cơ Tay Kìm R Xịn 5-60KG, Găng Tay Tập Thể Thao",
            text: "đ",
            text2: "22.000",
            text3: "Đã bán 6,8k",
            text22: "sp_1.html",
        },
        {
            image: "/image/sanpham_hinh_24.jpeg",
            image2: "/image/sanpham_hinhdacbiet.png",
            title: "Tai nghe không dây Bluetooth TWS AMoi F9 Pro - Chống nước IP67 - Pin 2000maH - Dùng 600 tiếng",
            text: "đ",
            text2: "79.000",
            text3: "Đã bán 9,3k",
            text22: "sp_1.html",
        },
    ]
}


for (let item of products6.data) {
    let card6 = document.createElement("div")
    card6.classList.add("container-products")

    let text40 = document.createElement("a")
    text40.setAttribute("href", item["text22"])
    card6.appendChild(text40)

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


    document.getElementById("products6").appendChild(card6)
}

const products7 = {
    data: [
        {
            title: "Quần",
        },
        {
            title: "Quần đùi",
        },
        {
            title: "Chân váy",
        },
        {
            title: "Quần jean",
        },
        {
            title: "Quần đùi",
        },
        {
            title: "Váy cưới",
        },
        {
            title: "Đồ liền thân",
        },
        {
            title: "Áo khoác, Áo choàng & Vest",
        },
        {
            title: "Áo len & Cardigan",
        },
        {
            title: "Hoodie và Áo nỉ",
        },
        {
            title: "Bộ",
        },
        {
            title: "Đồ lót",
        },
        {
            title: "Đồ ngủ",
        },
        {
            title: "Áo",
        },
        {
            title: "Độ tập",
        },{
            title: "Đồ bầu",
        },
        {
            title: "Đồ truyền thống",
        },
        {
            title: "Đồ hóa trang",
        },
        {
            title: "Vải",
        },
        {
            title: "Vớ/Tất",
        },
    ]
}

for (let item of products7.data) {
    let card7 = document.createElement("div")

    let text3 = document.createElement("div")
    card7.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products7").appendChild(card7,)
}


const products8 = {
    data: [
        {
            title: "Máy Tính Bàn",
        },
        {
            title: "Màn hình",
        },
        {
            title: "Linh Kiện Máy Tính",
        },
        {
            title: "Thiết Bị Lưu Trữ",
        },
        {
            title: "Thiết Bị Mạng",
        },
        {
            title: "Máy In, Máy Scan & Máy Chiếu",
        },
        {
            title: "Phụ Kiện Máy Tính",
        },
        {
            title: "Laptop",
        },
        {
            title: "Khác",
        },
        {
            title: "Gaming",
        },
    ]
}

for (let item of products8.data) {
    let card8 = document.createElement("div")

    let text3 = document.createElement("div")
    card8.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products8").appendChild(card8)
}

const products9 = {
    data: [
        {
            title: "Bốt",
        },
        {
            title: "Giày Thể Thao/ Sneaker",
        },
        {
            title: "Giày Đế Bằng",
        },
        {
            title: "Giày Cao Gót",
        },
        {
            title: "Giày Đế Xuồng",
        },
        {
            title: "Xăng-đan Và Dép",
        },
        {
            title: "Phụ Kiện Giày",
        },
        {
            title: "Giày Khác",
        },
    ]
}

for (let item of products9.data) {
    let card9 = document.createElement("div")

    let text3 = document.createElement("div")
    card9.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products9").appendChild(card9)
}

const products10 = {
    data: [
        {
            title: "Vali",
        },
        {
            title: "Túi du lịch",
        },
        {
            title: "Phụ kiện du lịch",
        },
        {
            title: "Dụng Cụ Thể Thao & Dã Ngoại",
        },
        {
            title: "Giày Thể Thao",
        },
        {
            title: "Thời Trang Thể Thao & Dã Ngoại",
        },
        {
            title: "Phụ Kiện Thể Thao & Dã Ngoại",
        },
        {
            title: "Khác",
        },
    ]
}

for (let item of products10.data) {
    let card10 = document.createElement("div")

    let text3 = document.createElement("div")
    card10.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products10").appendChild(card10)
}

const products11 = {
    data: [
        {
            title: "Trang phục bé trai",
        },
        {
            title: "Trang phục bé gái",
        },
        {
            title: "Giày dép bé trai",
        },
        {
            title: "Giày dép bé gái",
        },
        {
            title: "Khác",
        },
        {
            title: "Quần áo em bé",
        },
        {
            title: "Giày tập đi & Tất sơ sinh",
        },
        {
            title: "Phụ kiện trẻ em",
        },
    ]
}

for (let item of products11.data) {
    let card11 = document.createElement("div")

    let text3 = document.createElement("div")
    card11.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products11").appendChild(card11)
}


const products12 = {
    data: [
        {
            title: "Dụng cụ cầm tay",
        },
        {
            title: "Dụng cụ điện và thiết bị lớn",
        },
        {
            title: "Thiết bị mạch điện",
        },
        {
            title: "Vật liệu xây dựng",
        },
        {
            title: "Thiết bị và phụ kiện xây dựng",
        },
    ]
}

for (let item of products12.data) {
    let card12 = document.createElement("div")

    let text3 = document.createElement("div")
    card12.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products12").appendChild(card12)
}


const products13 = {
    data: [
        {
            title: "Điện thoại",
        },
        {
            title: "Máy tính bảng",
        },
        {
            title: "Pin Dự Phòng",
        },
        {
            title: "Pin Gắn Trong, Cáp và Bộ Sạc",
        },
        {
            title: "Ốp lưng, bao da, Miếng dán điện thoại",
        },
        {
            title: "Bảo vệ màn hình",
        },
        {
            title: "Đế giữ điện thoại",
        },
        {
            title: "Thẻ nhớ",
        },
        {
            title: "Sim",
        },
        {
            title: "Phụ kiện khác",
        },
        {
            title: "Thiết bị khác",
        },
    ]
}

for (let item of products13.data) {
    let card13 = document.createElement("div")

    let text3 = document.createElement("div")
    card13.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products13").appendChild(card13)
}


const products14 = {
    data: [
        {
            title: "Chăm sóc da mặt",
        },
        {
            title: "Tắm & chăm sóc cơ thể",
        },
        {
            title: "Trang điểm",
        },
        {
            title: "Chăm sóc tóc",
        },
        {
            title: "Dụng cụ & Phụ kiện Làm đẹp",
        },
        {
            title: "Vệ sinh răng miệng",
        },
        {
            title: "Nước hoa",
        },
        {
            title: "Chăm sóc nam giới",
        },
        {
            title: "Khác",
        },
        {
            title: "Chăm sóc phụ nữ",
        },
        {
            title: "Bộ sản phẩm làm đẹp",
        },
    ]
}

for (let item of products14.data) {
    let card14 = document.createElement("div")

    let text3 = document.createElement("div")
    card14.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products14").appendChild(card14)
}


const products15 = {
    data: [
        {
            title: "Bốt",
        },
        {
            title: "Giày Thể Thao/ Sneakers",
        },
        {
            title: "Giày Sục",
        },
        {
            title: "Giày Tây Lười",
        },
        {
            title: "Giày Oxfords & Giày Buộc Dây",
        },
        {
            title: "Xăng-đan và Dép",
        },
        {
            title: "Phụ kiện giày dép",
        },
        {
            title: "Khác",
        },
    ]
}

for (let item of products15.data) {
    let card15 = document.createElement("div")

    let text3 = document.createElement("div")
    card15.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products15").appendChild(card15)
}


const products16 = {
    data: [
        {
            title: "Đồ ăn vặt",
        },
        {
            title: "Đồ chế biến sẵn",
        },
        {
            title: "Nhu yếu phẩm",
        },
        {
            title: "Nguyên liệu nấu ăn",
        },
        {
            title: "Đồ làm bánh",
        },
        {
            title: "Sữa - trứng",
        },
        {
            title: "Đồ uống",
        },
        {
            title: "Ngũ cốc & mứt",
        },
        {
            title: "Các loại bánh",
        },
        {
            title: "Đồ uống có cồn",
        },
        {
            title: "Bộ quà tặng",
        },
        {
            title: "Thực phẩm tươi sống và thực phẩm đông lạnh",
        },
    ]
}

for (let item of products16.data) {
    let card16 = document.createElement("div")

    let text3 = document.createElement("div")
    card16.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products16").appendChild(card16)
}

const products17 = {
    data: [
        {
            title: "Sở thích & Sưu tầm",
        },
        {
            title: "Đồ chơi giải trí",
        },
        {
            title: "Đồ chơi giáo dục",
        },
        {
            title: "Đồ chơi giáo dục",
        },
        {
            title: "Đồ chơi vận động & ngoài trời",
        },
        {
            title: "Búp bê & Đồ chơi nhồi bông",
        },
    ]
}

for (let item of products17.data) {
    let card17 = document.createElement("div")

    let text3 = document.createElement("div")
    card17.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products17").appendChild(card17)
}

const products18 = {
    data: [
        {
            title: "Đồ dùng du lịch cho bé",
        },
        {
            title: "Đồ dùng ăn dặm cho bé",
        },
        {
            title: "Phụ kiện cho mẹ",
        },
        {
            title: "Chăm sóc sức khỏe mẹ",
        },
        {
            title: "Đồ dùng phòng tắm & Chăm sóc cơ thể bé",
        },
        {
            title: "Đồ dùng phòng ngủ cho bé",
        },
        {
            title: "An toàn cho bé",
        },
        {
            title: "Thực phẩm cho bé",
        },
        {
            title: "Chăm sóc sức khỏe bé",
        },
        {
            title: "Tã & bô em bé",
        },
        {
            title: "Bộ & Gói quà tặng",
        },
        {
            title: "Đồ chơi",
        },
        {
            title: "Sữa công thức trên 24 tháng",
        },
        {
            title: "Sữa công thức 0-24 tháng tuổi",
        },
    ]
}

for (let item of products18.data) {
    let card18 = document.createElement("div")

    let text3 = document.createElement("div")
    card18.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products18").appendChild(card18)
}


const products19 = {
    data: [
        {
            title: "Máy ảnh - Máy quay phim",
        },
        {
            title: "Camera giám sát & Camera hệ thống",
        },
        {
            title: "Thẻ nhớ",
        },
        {
            title: "Ống kính",
        },
        {
            title: "Phụ kiện máy ảnh",
        },
        {
            title: "Máy bay camera & Phụ kiện",
        },
    ]
}

for (let item of products19.data) {
    let card19 = document.createElement("div")

    let text3 = document.createElement("div")
    card19.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products19").appendChild(card19)
}


const products20 = {
    data: [
        {
            title: "Ba Lô Nữ",
        },
        {
            title: "Cặp Laptop",
        },
        {
            title: "Ví Dự Tiệc & Ví Cầm Tay",
        },
        {
            title: "Túi Đeo Hông & Túi Đeo Ngực",
        },
        {
            title: "Túi Tote",
        },
        {
            title: "Túi Quai Xách",
        },
        {
            title: "Túi Đeo Chéo & Túi Đeo Vai",
        },
        {
            title: "Ví/Bóp Nữ",
        },
        {
            title: "Phụ Kiện Túi",
        },
        {
            title: "Khác",
        },
    ]
}

for (let item of products20.data) {
    let card20 = document.createElement("div")

    let text3 = document.createElement("div")
    card20.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products20").appendChild(card20)
}


const products21 = {
    data: [
        {
            title: "Xe đạp, xe điện",
        },
        {
            title: "Mô tô, xe máy",
        },
        {
            title: "Xe Ô tô",
        },
        {
            title: "Mũ bảo hiểm",
        },
        {
            title: "Phụ kiện xe máy",
        },
        {
            title: "Phụ kiện xe đạp",
        },
        {
            title: "Phụ kiện bên trong ô tô",
        },
        {
            title: "Dầu nhớt & dầu nhờn",
        },
        {
            title: "Phụ tùng ô tô",
        },
        {
            title: "Phụ tùng xe máy",
        },
        {
            title: "Phụ kiện bên ngoài ô tô",
        },
        {
            title: "Chăm sóc ô tô",
        },
        {
            title: "Dịch vụ cho xe",
        },
    ]
}

for (let item of products21.data) {
    let card21 = document.createElement("div")

    let text3 = document.createElement("div")
    card21.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products21").appendChild(card21)
}


const products22 = {
    data: [
        {
            title: "Giặt giũ & Chăm sóc nhà cửa",
        },
        {
            title: "Giấy vệ sinh, khăn giấy",
        },
        {
            title: "Vệ sinh nhà cửa",
        },
        {
            title: "Vệ sinh bát đĩa",
        },
        {
            title: "Dụng cụ vệ sinh",
        },
        {
            title: "Chất khử mùi, làm thơm",
        },
        {
            title: "Thuốc diệt côn trùng",
        },
        {
            title: "Túi, màng bọc thực phẩm",
        },
        {
            title: "Bao bì, túi đựng rác",
        },
    ]
}

for (let item of products22.data) {
    let card22 = document.createElement("div")

    let text3 = document.createElement("div")
    card22.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products22").appendChild(card22)
}

const products23 = {
    data: [
        {
            title: "Thiết bị đeo thông minh",
        },
        {
            title: "Phụ kiện tivi",
        },
        {
            title: "Máy Game Console",
        },
        {
            title: "Phụ kiện Console",
        },
        {
            title: "Đĩa game",
        },
        {
            title: "Linh phụ kiện",
        },
        {
            title: "Tai nghe nhét tai",
        },
        {
            title: "Loa",
        },
        {
            title: "Tivi",
        },
        {
            title: "Tivi Box",
        },
        {
            title: "Headphones",
        },
    ]
}

for (let item of products23.data) {
    let card23 = document.createElement("div")

    let text3 = document.createElement("div")
    card23.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products23").appendChild(card23)
}


const products24 = {
    data: [
        {
            title: "Vật tư y tế",
        },
        {
            title: "Chống muỗi & xua đuổi côn trùng",
        },
        {
            title: "Thực phẩm chức năng",
        },
        {
            title: "Tã người lớn",
        },
        {
            title: "Hỗ trợ làm đẹp",
        },
        {
            title: "Hỗ trợ tình dục",
        },
        {
            title: "Dụng cụ massage và trị liệu",
        },
        {
            title: "Khác",
        },
    ]
}

for (let item of products24.data) {
    let card24 = document.createElement("div")

    let text3 = document.createElement("div")
    card24.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products24").appendChild(card24)
}


const products25 = {
    data: [
        {
            title: "Đồ gia dụng nhà bếp",
        },
        {
            title: "Đồ gia dụng lớn",
        },
        {
            title: "Máy hút bụi & Thiết bị làm sạch",
        },
        {
            title: "Quạt & Máy nóng lạnh",
        },
        {
            title: "Thiết bị chăm sóc quần áo",
        },
        {
            title: "Khác",
        },
        {
            title: "Thiết bị chăm sóc quần áo",
        },
        {
            title: "Bếp điện",
        },
    ]
}

for (let item of products25.data) {
    let card25 = document.createElement("div")

    let text3 = document.createElement("div")
    card25.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products25").appendChild(card25)
}


const products26= {
    data: [
        {
            title: "Sách Tiếng Việt",
        },
        {
            title: "Sách ngoại văn",
        },
        {
            title: "Gói Quà",
        },
        {
            title: "Bút viết",
        },
        {
            title: "Dụng cụ học sinh & văn phòng",
        },
        {
            title: "Màu, Họa Cụ và Đồ Thủ Công",
        },
        {
            title: "Sổ và Giấy Các Loại",
        },
        {
            title: "Quà Lưu Niệm",
        },
        {
            title: "Nhạc cụ và phụ kiện âm nhạc",
        },
    ]
}

for (let item of products26.data) {
    let card26 = document.createElement("div")

    let text3 = document.createElement("div")
    card26.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products26").appendChild(card26)
}


const products27= {
    data: [
        {
            title: "Thức ăn cho thú cưng",
        },
        {
            title: "Phụ kiện cho thú cưng",
        },
        {
            title: "Vệ sinh cho thú cưng",
        },
        {
            title: "Quần áo thú cưng",
        },
        {
            title: "Chăm sóc sức khỏe",
        },
        {
            title: "Làm đẹp cho thú cưng",
        },
        {
            title: "khác",
        },
    ]
}

for (let item of products27.data) {
    let card27 = document.createElement("div")

    let text3 = document.createElement("div")
    card27.appendChild(text3)

    let text1 = document.createElement("a")
    text1.innerText = item["title"]
    text3.appendChild(text1)

    let text2 = document.createElement("span")
    text2.innerHTML = "&nbsp|&nbsp"
    text3.appendChild(text2)

    document.getElementById("products27").appendChild(card27)
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
    card33.classList.add("text-63-17")

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