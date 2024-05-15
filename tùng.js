<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table Reservation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 300px;
            margin: 0 auto;
            padding-top: 50px;
            display: flex;
            justify-content: center;
        }
        input, textarea, button {
            width: 100%;
            padding: 10px;
            margin: 5px 0;       
            box-sizing: border-box;
        }
    </style>
</head>
<body>
    <div class="container">
        <form id="reservationForm">
            <h2>Table Reservation</h2>
            <input type="text" id="name" placeholder="Your Name*" required>
            <input type="email" id="email" placeholder="Your Email Address">
            <input type="tel" id="phone" placeholder="Phone Number*" required>
            <input type="number" id="guests" placeholder="Number Of Guests" required>
            <input type="text" id="date" placeholder="dd/mm/yyyy" required>
            <input type="time" id="time" placeholder="Time" required>
            <textarea id="message" placeholder="Message"></textarea>
            <button type="submit">Make A Reservation</button>
        </form>
    </div>

    <script>
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
    </script>
</body>
</html>