function renderFooter() {
    let renderFooter = `
        <footer  class="f1">
                <div >
                        <p>© Bản quyền thuộc về Hung Shose <a class="link-footer" href="index.html">Hung Shoes</a> All right reserved.
                        <br><a class="link-footer" href="tel:123456789">Hotline: 123456789 - Hung Shoes</a>
                        thành viên thuộc Công ty CP CodeGym Việt Nam
                        </p>
                        <p>
                        Nhà số 23, Lô TT-01, Khu đô thị MonCity, P. Hàm Nghi, Hà Nội
                        </p>
                        <p>MST: 010 810 4526</p>
                        <p>
                        <a class="link-footer" href="tel:123456789">Phone:123456789</a>
                        </p>
                        <p>HƯỚNG DẪN & CHÍNH SÁCH</p>
                        <p>Hướng dẫn mua hàng</p>
                        <p>Thẻ Thành Viên</p>
                        <p>Chính sách đổi trả & hoàn tiền</p>
                        <p>Chính sách thanh toán</p>
                        <p>Chính sách vận chuyển</p>
                        <p>Chính sách bảo mật</p>
                </div>

                
        </footer>
    `

    document.getElementById("footer").innerHTML = renderFooter;
}
renderFooter();
