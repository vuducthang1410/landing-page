import type { ContactFormData } from "../types/ContactFormData";

export function validate(data: ContactFormData) {
  const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
  if (!data.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
  if (!data.email.trim()) newErrors.email = "Vui lòng nhập email";
  else if (!/^\S+@\S+\.\S+$/.test(data.email))
    newErrors.email = "Email không hợp lệ";
  if (!data.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
  else if (!/^(0|\+84)[0-9]{9,10}$/.test(data.phone))
    newErrors.phone = "Số điện thoại không hợp lệ";
  if (!data.province.trim())
    newErrors.province = "Vui lòng nhập tỉnh/thành phố";
  if (!data.district.trim()) newErrors.district = "Vui lòng nhập quận/huyện";
  if (!data.ward.trim()) newErrors.ward = "Vui lòng nhập phường/xã";
  if (!data.message.trim()) newErrors.message = "Vui lòng nhập nội dung";
  return newErrors;
}

export function buildHtmlEmail(formData: ContactFormData): string {
  return `
    <div style="max-width: 498px; margin: 0 auto; font-family: 'Montserrat', sans-serif; border-radius: 20px; border: 1px solid #e0e0e0; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
  <div style="background-image: url('https://cdn.kienlongbank.co/media/preview/sales-app/assets/background.png'); background-size: cover; background-position: center; border-radius: 16px 16px 0 0; padding: 24px 24px 16px 24px; color: #fff; text-align: center;height: 150px;">
    <img src="https://cdn.kienlongbank.co/media/preview/sales-app/assets/logo.png" alt="KienlongBank" style="height: 48px; margin-bottom: 4px;">
    <div style="font-size: 24px; font-weight: bold; margin-bottom: 6px;">MEGASALE SINH NHẬT 30 NĂM</div>
    <div style="font-size: 14px; margin-bottom: 2px;font-weight:400">KienlongBank xin trân trọng thông báo,</div>
    <div style="font-size: 14px;font-weight:400">Thông tin khách hàng đăng ký tư vấn<br>Chương trình MegaSale Sinh nhật 30 năm</div>
  </div>
  <div style="padding: 24px;background-color:#F9F9F9;font-size: 16px">
    <div style="margin-bottom: 15px;color: #333333;"><b>Họ và tên:</b> ${formData.name}</div>
    <div style="margin-bottom: 15px;color: #333333;"><b>Số điện thoại:</b> ${formData.phone}</div>
    <div style="margin-bottom: 15px;color: #333333;"><b>Email:</b> ${formData.email}</div>
    <div style="margin-bottom: 15px;color: #333333;"><b>Nơi ở hiện tại:</b> ${formData.ward}, ${formData.district}, ${formData.province}</div>
    <div style="margin-bottom: 18px;color: #333333;"><b>Nội dung cần tư vấn:</b> ${formData.message}</div>
    <div style="font-style: italic; color: #333333;margin-bottom: 35px;">
      Kính chuyển thông tin đăng ký đến Trung tâm Dịch vụ Khách hàng để xử lý các bước tư vấn tiếp theo!
    </div>
  </div>
</div>
    `;
}

export function encodeHtmlToBase64(html: string): string {
  return btoa(unescape(encodeURIComponent(html)));
}
