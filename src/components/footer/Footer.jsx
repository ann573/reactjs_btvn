import React from "react";
import qrcode from "../../assets/image/qr.png";
import apple from "../../assets/image/apple.png";
import android from "../../assets/image/samsung.png";
import bct from "../../assets/image/bocongthuong.png"

const Footer = () => {
  return (
    <footer className="dark:bg-[#121212]">
      <hr className="my-5" />
      <div className="max-w-[1300px] mx-auto  text-text_colors dark:text-white">
        <div className="flex gap-20">
          <div className="w-[30%]">
            <h3 className="text-md font-bold mb-5">CÔNG TY CỔ PHẦN CANIFA</h3>
            <p>
              Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, <br /> Nơi cấp: Sở Kế
              hoạch và đầu tư Hà Nội
            </p>
            <p>
              Địa chỉ trụ sở tại số 688 Đường Quang Trung, Phường La Khê, Quận
              Hà Đông, Thành phố Hà Nội.
            </p>
            <p>
              Địa chỉ liên hệ: P301, tầng 3, tòa nhà GP Invest, số 170 La Thành,
              Phường Ô Chợ Dừa, Quận Đống Đa, Thành Phố Hà Nội.
            </p>
            <p>Điện thoại: +8424 - 7303.0222</p>
            <p>Fax: +8424 - 6277.6419</p>
            <p>Email: hello@canifa.com</p>
            <div className="mt-4 text-[36px] gap-10 flex">
              <i class="ri-facebook-circle-fill"></i>
              <i class="ri-instagram-fill"></i>
              <i class="ri-youtube-fill"></i>
              <i class="ri-tiktok-fill"></i>
            </div>
          </div>

          <div>
            <h3 className="text-md font-bold mb-5">Thương hiệu</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#!" className="hover:text-red-500">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-red-500">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-red-500">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-red-500">
                  Với cộng đồng
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-red-500">
                  Hệ thống cửa hàng
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold mb-5">Hỗ trợ</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#!" className="hover:text-red-500">
                  Hỏi đáp
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-red-500">
                  Chính sách KHTT
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-red-500">
                  Điều kiện - Điều khoản Chính sách KHTT
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-red-500">
                  Chính sách vận chuyển
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-red-500">
                  Gợi ý tìm size
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-red-500">
                  Kiểm tra đơn hàng
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-red-500">
                  Tra cứu điểm thẻ
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-red-500">
                  Chính sách bảo mật thông tin KH
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold mb-5">TẢI ỨNG DỤNG</h3>
            <div className="w-[70%] flex gap-1">
              <div>
                <img src={qrcode} alt="anh" />
              </div>
              <div className="flex flex-col gap-1">
                <img src={apple} alt="apple" />
                <img src={android} alt="android" />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5"/>

        <div className="flex justify-between items-center pb-5">
          <p className="text-sm font-bold">© 2023 CANIFA</p>
          <img src={bct} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
