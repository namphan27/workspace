    const buttons = document.querySelectorAll(".add-to-cart");
    const cartDiv = document.getElementById("cart");
    const emptyText = document.getElementById("empty-cart");

    let cart = [];

    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const row = this.parentElement.parentElement;
        const name = row.cells[1].textContent;
        const price = Number(row.cells[2].textContent);
        const qty = Number(row.querySelector("input").value);

        const existing = cart.find((item) => item.name === name);
        if (existing) {
          existing.qty += qty;
        } else {
          cart.push({ name, price, qty });
        }

        renderCart();
      });
    });

    function renderCart() {
      if (cart.length === 0) {
        emptyText.style.display = "block";
        const oldTable = document.getElementById("cart-table");
        if (oldTable) oldTable.remove();
        return;
      }


      let total = 0;
      let html = `
        <table id="cart-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
      `;

      cart.forEach((item, index) => {
        const thanhTien = item.price * item.qty;
        total += thanhTien;
        html += `
          <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>
            <td>${thanhTien}</td>
            <td><button onclick="removeItem(${index})">Xóa</button></td>
          </tr>
        `;
      });

      html += `
          <tr>
            <td colspan="4" style="text-align:right"><b>Tổng</b></td>
            <td colspan="2"><b>${total}</b></td>
          </tr>
          </tbody>
        </table>
      `;

      const oldTable = document.getElementById("cart-table");
      if (oldTable) oldTable.remove();

      cartDiv.insertAdjacentHTML("beforeend", html);
    }

   