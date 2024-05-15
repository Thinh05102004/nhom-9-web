
        document.getElementById('reservationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Lấy giá trị từ các ô nhập liệu
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const guests = document.getElementById('guests').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const message = document.getElementById('message').value;

            // Kiểm tra các giá trị
            if (name === '' || phone === '' || guests === '' || date === '' || time === '') {
                alert('Please fill in all required fields.');
                return;
            }

            // Kiểm tra định dạng ngày
            const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
            if (!datePattern.test(date)) {
                alert('Please enter a valid date in the format dd/mm/yyyy.');
                return;
            }

            // Nếu mọi thứ đều ổn, tiến hành xử lý đặt bàn
            alert('Reservation submitted successfully!');

            // Ở đây, bạn có thể gửi dữ liệu đến máy chủ hoặc xử lý theo nhu cầu của bạn
        });







        const buttons = document.querySelectorAll('.bua');

        // Xử lý sự kiện khi nhấp vào các nút
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Đặt màu đen cho nút được nhấp
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });



        // Lấy URL hiện tại của trang
        const pageUrl = window.location.href;

        // Xử lý sự kiện khi nhấp vào biểu tượng Facebook
        document.getElementById("facebookShare").addEventListener("click", function() {
            const url = "https://www.facebook.com/sharer.php?u=" + encodeURIComponent(pageUrl);
            window.open(url, "_blank");
        });

        // Xử lý sự kiện khi nhấp vào biểu tượng Twitter
        document.getElementById("twitterShare").addEventListener("click", function() {
            const url = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(pageUrl);
            window.open(url, "_blank");
        });

        // Xử lý sự kiện khi nhấp vào biểu tượng LinkedIn
        document.getElementById("linkedinShare").addEventListener("click", function() {
            const url = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(pageUrl);
            window.open(url, "_blank");
        });

        // Xử lý sự kiện khi nhấp vào biểu tượng Instagram
        document.getElementById("instagramShare").addEventListener("click", function() {
            const url = "https://www.instagram.com/";
            window.open(url, "_blank");
        });

        // Lấy biểu tượng logo
        const logoLink = document.getElementById("logoLink");

        // Xử lý sự kiện khi nhấp vào biểu tượng logo
        logoLink.addEventListener("click", function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
            window.scrollTo({ top: 0, behavior: "smooth" }); // Lăn lên đầu trang một cách mượt mà
        });

        const breakfastItems = [
            { name:'Fresh Chicken Salad', price: '20k', imgSrc: '648400de6f089b0dadcba2bb19d4c7df.png' },
            { name: 'Fruit Salad', price: '15k', imgSrc: '464948be3c6fc0d22c67deec92d67904.png' },
            { name: 'Dollma Pire', price: '10k', imgSrc: 'assets/images/tab-item-05.png' },
            { name: 'Orange Juice', price: '10k', imgSrc: 'assets/images/tab-item-02.png' },
            { name: 'Eggs Omelette', price: '10k', imgSrc: 'assets/images/tab-item-04.png' },
            { name: 'Omelette & Cheese', price: '15k', imgSrc: 'assets/images/tab-item-06.png' },
        ];

        const lunchItems = [
            { name: 'Omelette & Cheese', price: '15k', imgSrc: 'assets/images/tab-item-06.png' },
            { name: 'Omelette & Cheese', price: '15k', imgSrc: 'assets/images/tab-item-06.png' },
            { name: 'Omelette & Cheese', price: '15k', imgSrc: 'assets/images/tab-item-06.png' },
            { name: 'Omelette & Cheese', price: '15k', imgSrc: 'assets/images/tab-item-06.png' },
            { name: 'Omelette & Cheese', price: '15k', imgSrc: 'assets/images/tab-item-06.png' },
            { name: 'Omelette & Cheese', price: '15k', imgSrc: 'assets/images/tab-item-06.png' },
        ];

        const dinnerItems = [
            { name: 'Fruit Salad', price: '15k', imgSrc: 'assets/images/tab-item-03.png' },
            { name: 'Fruit Salad', price: '15k', imgSrc: 'assets/images/tab-item-03.png' },
            { name: 'Fruit Salad', price: '15k', imgSrc: 'assets/images/tab-item-03.png' },
            { name: 'Fruit Salad', price: '15k', imgSrc: 'assets/images/tab-item-03.png' },
            { name: 'Fruit Salad', price: '15k', imgSrc: 'assets/images/tab-item-03.png' },
            { name: 'Fruit Salad', price: '15k', imgSrc: 'assets/images/tab-item-03.png' },
        ];

        // Hiển thị danh sách ban đầu (Breakfast)
        updateList(breakfastItems);

        // Xử lý sự kiện khi nhấp vào các nút
        document.getElementById("breakfast-btn").addEventListener("click", () => updateList(breakfastItems));
        document.getElementById("lunch-btn").addEventListener("click", () => updateList(lunchItems));
        document.getElementById("dinner-btn").addEventListener("click", () => updateList(dinnerItems));

        // Hàm cập nhật danh sách
        function updateList(items) {
            const foodList = document.getElementById("food-list");
            foodList.innerHTML = ""; // Xóa danh sách hiện tại

            items.forEach(item => {
                const li = document.createElement("div");
                li.className = "list";
                li.innerHTML = `
                    <div class="Heading_6">${item.price}</div>
                    <div class="Heading_4">${item.name}</div>
                    <div class="tab-item">
                        <img src="${item.imgSrc}" class="food-image" alt="${item.name}">
                    </div>
                `;
                foodList.appendChild(li);
            });
        }