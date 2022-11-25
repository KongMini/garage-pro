const CheckLogic = {
  No_internet: 'Network request failed',
  Unexpected_json: 'Unexpected end of JSON input',
  Parse_error: 'JSON Parse error: Unexpected end of input',
  Unexpected_end: 'Unexpected end of input',

  Language_code: {
    english: 'en',
    vietnamese: 'vi',
  },
  Theme: {
    base_device: 'base_device',
    light: 'light',
    dark: 'dark',
  },
  Click_notification_action: {
    detail_page: 'DETAIL_PAGE',
    url: 'URL',
    browser: 'URL_BROWSER',
  },
  Noti_type: {
    All_new: 'ALL',
    Only_metion: 'MENTION',
    None: 'NONE',
  },
  Storage_key: {
    app_intro: 'app-intro',
  },
  Football: {
    get_events: 'get_events',
    get_standings: 'get_standings',
    get_teams: 'get_teams',
    get_topscorers: 'get_topscorers',
  },
  Screen_code: {
    datlich: 'Booking',
    luudong: 'HomeService',
    baohiem: 'BuyInsurance',
    baogia: 'AnnouncePriceServices',
    tintuc: 'NewAndBlog',
    choxe: 'CarMarket',
    khuyenmai: 'Promotion',
    home: 'TopPage',
    thongtin: 'UserInfoDetail',
    lichsu: 'History',
    dinhgia: 'CarAppraisal',
    xecuatoi: 'MyCar',
    muabaohiem: 'BuyInsurance',
    cuuho: 'Rescue',
    phutung: 'FindAccessory',
    camnang: 'FindTrafficViolation',
    kinhnghiem: 'Experience',
    gioithieu: 'Introduction',
    danhsachcaron: 'CaronGarages',
  },
};
const StringsEnglish = {
  AppIntro_next: 'Next',
  App_name: 'demo',
  Error_title: {
    No_data: 'No Data',
  },
  Menu: 'Menu',
  Language: 'Language',
  Mode: 'Mode',
  Current_version: 'Current version',
  English: 'English',
  Japanese: '日本語',
  Vietnamese: 'Tiếng Việt',
  French: 'French',
  Portuguese: 'português',
  Italiano: 'Italiano',
  Light_mode: 'Light mode',
  Dark_mode: 'Dark mode',
  Base_device: 'Based on my phone',
  Appintro_des_1: 'Appintro_des_1',
  Appintro_des_2: 'Appintro_des_2',
  Appintro_des_3: 'Appintro_des_3',
  Login: 'Login',
  Logout: 'Logout',
  Home: 'Home',
  Settings: 'Setting',
  Phone_is_not_empty: 'Phone is required',

  //Validate
  This_field_is_required: 'Vui lòng nhập trường này',
  Wrong_login: 'Tài khoản hoặc mật khẩu không chính xác. Vui lòng nhập lại.',
  OTP_code_wrong: 'OTP code is not correct',
  Not_update_yet: 'Chưa cập nhật',
  Is_not_same_password: 'Mật khẩu chưa trùng nhau',
  Email_is_not_valid: 'Email không đúng định dạng',
  Just_contain_number: 'Mã giới thiệu chỉ bao gồm số',
  Phone_is_not_valid: 'Số điện thoại không đúng định dạng',
  Please_wait: 'Vui lòng đợi 30s để gửi lại mã OTP',
  Data_is_not_correct: 'Dữ liệu đã nhập xảy ra lỗi. Vui lòng thử lại.',
  Password_failed:
    'Mật khẩu phải bao gồm 8 kí tự, số, ký tự in thường và in hoa',

  //User Process
  Phone_number: 'Phone Number',
  Affiliate: 'Mã giới thiệu',
  Password: 'Password',
  Login: 'Login',
  Forgot_password: 'Forgot password?',
  Create_new_account_caron: 'Create new account caron',
  Description_bottom_login: 'Hệ thống chăm sóc ô tô toàn diện, đạt chuẩn',
  Register: 'Register',
  OTP_description:
    'Hệ thống sẽ gửi mã OTP đến số điện thoại của bạn, vui lòng nhập mã OTP để đăng ký',
  Register_by_phone: 'Register by phone number',
  Send_otp_code: 'Send OTP code',
  register_successful: 'Đăng ký thành công. Vui lòng đăng nhập lại',
  Error: 'Lỗi',
  Network_request_fail: 'Kết nối mạng không ổn định, vui lòng thử lại',
  something_wrong: 'Một lỗi đã xảy ra. Vui lòng thử lại sau',
  Car_existed: 'Thông tin xe đã tồn tại và thuộc quyền sở hữu của bạn.',

  Confirm_password: 'Xác nhận mật khẩu',
  Name: 'Họ và tên',
  DOB: 'Ngày sinh',
  Gender: 'Giới tính',
  City: 'Khu vực',
  Address: 'Địa chỉ',
  Email: 'Email',
  Confirm: 'Xác nhận',
  Fill_new_password: 'Mật khẩu mới',
  Confirm_new_password: 'Xác nhận mật khẩu mới',

  //TopPage
  Caron_wallet: 'Ví CarOn',
  Point: 'Điểm',
  Favorite_service: 'Dịch vụ yêu thích',
  Choose: 'Chọn',
  Remind_mantain: 'Nhắc bảo dưỡng',
  Remind_accreditation: 'Hạn kiểm định',
  Remind_insurance: 'Hạn bảo hiểm',
  Traffic_sanction: 'Phạt nguội',
  Find_rescue: 'Cứu hộ',
  Experience: 'Experience',
  Find_traffic_violation: 'Cẩm nang',
  Incident_consulting: 'Tư vấn sự cố',
  Cancel: 'Huỷ',

  Caron_services: 'Dịch vụ Caron',
  My_car: 'Xe của tôi',
  CsBaoHanh: 'C/s Bảo Hành',
  Find_accessary: 'Phụ tùng',
  Buy_sell_old: 'Chợ xe',
  Announce_service_price: 'Báo giá dịch vụ',
  Promotions: 'Khuyến mại',
  Promotion_cards: 'Thẻ Khuyến mại',
  Vehicle_inspection: 'Định giá xe',
  Service_at_home: 'Dịch vụ tại nhà',
  Buy_insurance: 'Mua bảo hiểm',
  News_and_blog: 'Tin tức',

  Maybe_you_like: 'Có thể bạn thích',
  Has: 'Còn',
  Have_an_error: 'Có một lỗi xảy ra',
  Server_error: 'Lỗi kết nối đến server',

  //BottomMenu
  Gift: 'Quà tặng',
  Booking: 'Đặt hẹn',
  History: 'Lịch sử',
  Introduce: 'Giới thiệu',
  Save: 'Save',
  Choose_service: 'Choose services',

  //My Car
  Manage_my_car: 'Quản lý xe của tôi',
  Add_car_success: 'Thêm xe thành công',
  Edit_success: 'Chỉnh sửa thành công',
  Save_success: 'Lưu thành công',
  License_plates: 'Biển số xe',
  Manufacturer: 'Hãng xe',
  Type_car: 'Loại xe',
  Year_of_manufacture: 'Năm sản xuất',
  Car_color: 'Màu xe',
  Image: 'Hình ảnh',
  Registry_deadline: 'Hạn đăng kiểm',
  Civil_liability_insurance_deadline: 'Hạn bảo hiểm TNDS',
  Physical_insurance_deadline: 'Hạn bảo hiểm thân vỏ',
  Previous_maintenance_time: 'Lần bảo dưỡng trước',
  Km_previous_maintenance_time: 'Số km lần bảo dưỡng trước',
  Update_car: 'Cập nhật xe',
  Create_new_car: 'Tạo mới xe',

  //C/s Bảo hành
  Manage_cs_BaoHanh: 'Quản lý Chính sách bảo hành',

  //Đặt hẹn
  Services_booking: 'Đặt hẹn dịch vụ',
  Information: 'Thông tin',
  Booking_2: 'Đặt lịch',
  Service: 'Dịch vụ',
  Cost: 'Chi phí',
  Add_services: 'Thêm dịch vụ',
  Next: 'Tiếp tục',
  Who_bring_car: 'Người mang xe đến',
  Me: 'Tôi',
  Phone: 'Điện thoại',
  Another_car: 'Xe khác',
  Xe: 'Xe',
  Note: 'Ghi chú',
  Comment: 'Bình luận',
  Accept_services: 'Đồng ý dịch vụ',
  Where: 'Nơi làm dịch vụ',
  Caron_gara: 'Caron Gara',
  At_home: 'Tại nhà riêng',
  Choose_gara: 'Chọn Gara',
  Choose_advisor: 'Chọn cố vấn',
  Expected_time: 'Thời gian dự kiến',

  washByDryTech: 'Rửa xe khô công nghệ',
  washByWater: 'Rửa xe nước',
  glassStickers3M: 'Dán kính 3M',
  maintenance50000Km: 'Bảo dưỡng 50000km',
  maintenance100000Km: 'Bảo dưỡng 100000km',
  changeFrontWheelBearing: 'Thay bạc đạn bánh trước',
  changeFrontBumper: 'Thay cản trước',
  paint10cm2: 'Sơn 10cm2',
  cleaning: 'Vệ sinh xe',
  price: 'Giá',
  All_pricce_of_services: 'Tổng công dịch vụ',
  Sales_by_voucher: 'Giảm giá Voucher',
  Use_caron_wallet: 'Dùng ví Caron',
  Exchange_caron_point: 'Đổi điểm Caron',
  All_point_caron: 'Tổng điểm CarOn',
  Expected_cost: 'Chi phí dự kiến',
  Note_Cost:
    'Ghi chú: Tổng thanh toán thực tế sẽ tính theo khối lượng dịch vụ thực tế tại Caron',
  Request_announce_service: 'Yêu cầu báo giá dịch vụ',
  Request_announce_price: 'Yêu cầu báo giá',
  Announce_price: 'Báo giá',
  Time: 'Thời gian',
  Time_create: 'Thời gian tạo',
  Seen: 'Xem',
  Not_have: 'Chưa có',
  Cancel: 'Huỷ',
  Create_request_announce_price: 'Tạo yêu cầu báo giá',
  Content_request_announce_price: 'Nội dung yêu cầu báo giá',
  Send_request_announce_price: 'Gửi yêu cầu báo giá',
  See_request_announce_price: 'Xem yêu cầu báo giá',
  Announce_price_service: 'Báo giá dịch vụ sửa chữa',
  Service_advisor: 'Cố vấn dịch vụ',
  Estimated_total_cost: 'Tổng chi phí dự kiến ',
  Choose_car: 'Chọn xe',

  //
  Appraisal_car_title: 'Tư vấn thẩm định xe cũ',
  Appraisal_car_des: 'Xem tiêu chuẩn thẩm định xe cũ của Caron',
  Owner_car_name: 'Tên chủ xe',
  Place_action: 'Địa điểm thực hiện',
  At_Caron: 'Tại Caron',
  Estimated_vehicle_value: 'Giá trị xe ước tính',
  Provisional_appraisal_fee: 'Phí thẩm định tạm tính',
  Appointment_appraisal: 'Hẹn lịch thẩm định',
  Han_kiem_dinh: 'Hạn kiểm định',
  Update: 'Cập nhật',
  Appraisal: 'Thẩm định',

  //
  Receive_noti: 'Nhận thông báo',
  Noti_by_app: 'Thông báo kiểm định qua App',
  Noti_by_email: 'Thông báo kiểm định qua Email',
  Noti_by_sms: 'Thông báo kiểm định qua SMS',
  Noti_by_zalo: 'Thông báo kiểm định qua Zalo',
  Notification: 'Thông báo',
  Notification_detail: 'Chi tiết thông báo',
  //
  Type_code_promotion: 'Nhập mã thẻ khuyến mãi',
  Use_now: 'Dùng ngay',
  Condition: 'Điều kiện',
  Effect: 'Hiệu lực',
  Due_date: 'Hạn dùng',
  Max: 'Tối đa',
  Received_promotion: 'Nhận khuyến mại',
  Make_appointment_to_use_service: 'Hẹn lịch sử dụng dịch vụ',

  //Kinh nghiem
  All: 'Tất cả',
  Resovle_problem: 'Xử lý sự cố',
  Drive_experience: 'Kinh nghiệm lái xe',
  Custom_car: 'Độ xe',
  Search: 'Tìm kiếm',

  //gt
  Introduction: 'Giới thiệu',
  Introduction_title:
    'CARON GARAGE - HỆ THÓNG SỬA CHỮA, CHĂM SÓC Ô TÔ ĐẠT CHUÁN 5S !',
  Introduction_title_des:
    'CarOn - Hệ thống. dịch vụ ô tô tiêu chuẩn 5S được thành lập và chính thức hoạt động vào tháng. 07/2019, kết quả sau những trăn trở và tâm huyết của ban lãnh đạo. công ty Cô Phần Thương Mại và Dịch Vụ ô tô Minh Việt, về mong muốn mang đến thị trường một chuỗi các hệ thống dịch vụ bảo dưỡng sửa chữa ô tô chất lượng cao. Nhằm đáp ứng nhu cầu ngày càng tăng của quý khách hàng sử dụng xe ô tô với tâm lý luôn mong muốn tìm được cho mình một đơn vị cung cáp dịch vụ bảo dưỡng sửa chữa, chăm sóc xe ô tô uy tín chuyên nghiệp.',
  Find_caron_gara: 'Tìm Caron gara',
  Caron_garages: 'Các gara Caron',
  northSide: 'Miền Bắc',
  middleSide: 'Miền Trung',
  southSide: 'Miền Nam',
  Facilities: 'Cơ sở',
  Contact: 'Liên hệ',
  Guide: 'Dẫn đường',

  //hítory
  History_service: 'Lịch sử dịch vụ',
  Information_services: 'Thông tin dịch vụ',
  Accessary: 'Phụ tùng',
  All_accessary: 'Tổng phụ tùng',
  Total_cost: 'Tổng chi phí',
  Cash: 'Tiền mặt',
  Payment_method: 'Phương thức thanh toán',
  Code_orders: 'Mã đơn hàng',
  Service_use_time: 'Thời gian sử dụng dịch vụ',
  Payment_time: 'Thời gian thanh toán',
  Qa: 'Hỏi đáp',
  See_review: 'Xem đánh giá',
  Service_review: 'Đánh giá dịch vụ',
  All_cost: 'Tổng tiền',
  Detail: 'Chi tiết',
  Product: 'Sản phẩm',
  Date: 'Ngày',
  transferMoney: 'Chuyển khoản',
  Copy: 'Sao chép',
  Coppied: 'Đã sao chép mã đơn hàng',

  //mua bao hiem
  Person_buy_insurance: 'Người mua bảo hiểm',
  Intended_use: 'Mục đích sử dụng',
  Number_of_seats: 'Số chỗ ngồi',
  Car_pickup_minivan: 'Xe pickup, minivan',
  Yes: 'Có',
  No: 'Không',
  Duration_of_insurance: 'Thời hạn bảo hiểm',
  Accident_insurance_for_drivers_and_occupants:
    'Bảo hiểm tai nạn lái xe và người ngồi trên xe',
  Cost_of_delivery: 'Chi phí giao nhận',
  VAT: 'Thuế VAT',
  Sum: 'Tổng',
  Provisional_cost: 'Chi phí tạm tính',
  Insurance_start_time: 'Thời gian bắt đầu bảo hiểm',
  Insurance_end_time: 'Thời gian kết thúc bảo hiểm',
  Ordered: 'Đặt mua',
  Ordered_success: 'Đặt mua thành công',
  Booking_accessory_selected: 'Đặt hẹn dịch vụ đã chọn',
  Regular_violation: 'Cẩm nang',
  Table_code_violation: 'Bảng mã lỗi',
  See_violation: 'Xem lỗi',
  Find_traffic_sanction: 'Tra cứu phạt nguội',
  Find_traffic_sanction_des:
    'Nguồn: Cổng thông tin điện tử Cục Cảnh sát giao thông',
  Find_traffic_sanction_note:
    'Ghi chú: Chọn hoặc nhập biển số xe không dấu "-" hay ".", VD: 30E82748',
  Search_2: 'Tra cứu',
  License_plates_2: 'Biển kiểm soát',
  License_plates_color: 'Màu biển',
  Transportation: 'Loại phương tiện',
  Time_of_violation: 'Thời gian vi phạm',
  Place_of_violation: 'Địa điểm vi phạm',
  Status: 'Trạng thái',
  Violation_detection_unit: 'Đơn vị phát hiện vi phạm',
  Phone_contact: 'Số điện thoại liên hệ',
  Check_on_website: 'Kiểm tra trên website của CSGT.VN',

  Care_car: 'Chăm sóc xe',
  About_caron: 'Về Caron',

  My_gift: 'Quà của tôi',
  Type_code: 'Nhập mã',
  Introduce_endow: 'Giới thiệu, ưu đãi',
  Car_name: 'Tên xe',
  User_info: 'Thông tin người dùng',
  Change_pass: 'Đổi mật khẩu',
  Booking_history: 'Lịch sử đặt lịch',
  Current_password: 'Mật khẩu hiện tại',
  New_password: 'Mật khẩu mới',
  Confirm_new_password: 'Xác nhận mật khẩu mới',
  Change_pass_success: 'Đổi mật khẩu thành công',
  Lich_hen: 'Lịch hẹn',
  List_rescue: 'Các trung tâm cứu hộ',
  Filter_city: 'Lọc tỉnh thành',
  Booking_home_service: 'Đặt hẹn dịch vụ lưu động',
  Person_booking: 'Người đặt hẹn',
  Nha_san_xuat: 'Nhà sản xuất',
  Home_address: 'Địa chỉ lưu động',
  Home_service_des:
    'CarOn sẽ liên hệ lại với quý khách để tư vấn ngay sau khi Quý khách đặt hẹn. Trân trọng cảm ơn Quý khách',
  Key_word: 'Từ khóa',
  Nam_dang_ky: 'Năm đăng ký',
  Chua_ban: 'Chưa bán',
  Thong_tin_xe: 'Thông tin xe',
  DV_sua_chua: 'DV sửa chữa',
  DV_tai_nha: 'DV tại nhà',
  DV_tham_dinh: 'DV thẩm định',
  Placeholder_thamdinh:
    'Tình trạng xe đã va quyệt hay chưa, sửa chữa động cơ hay chưa,...',
};

const StringsVietnamese = {
  AppIntro_next: 'Next',
  App_name: 'demo',
  Menu: 'Menu',
  Language: 'Ngôn ngữ',
  Mode: 'Chế độ',
  User_feedback: 'Phản hồi ứng dụng',
  About_us: 'About us',
  Current_version: 'Phiên bản hiện tại',
  English: 'English',
  Japanese: '日本語',
  Vietnamese: 'Tiếng Việt',
  Light_mode: 'Chế độ ban ngày',
  Dark_mode: 'Chế độ ban đêm',
  Base_device: 'Dựa theo điện thoại của bạn.',
  Now: 'Vừa xong',
  Bookmark: 'Yêu thích',
  Error_title: {
    No_data: 'No Data',
  },
  Settings: 'Cài đặt',
  Login: 'Đăng nhập',
  Logout: 'Đăng xuất',
  Home: 'Trang chủ',

  //Validate
  This_field_is_required: 'Vui lòng nhập trường này',
  Wrong_login: 'Tài khoản hoặc mật khẩu không chính xác. Vui lòng nhập lại.',
  OTP_code_wrong: 'Mã OTP không chính xác',
  Not_update_yet: 'Chưa cập nhật',
  Is_not_same_password: 'Mật khẩu chưa trùng nhau',
  Email_is_not_valid: 'Email không đúng định dạng',
  Just_contain_number: 'Mã giới thiệu chỉ bao gồm số',
  Phone_is_not_valid: 'Số điện thoại không đúng định dạng',
  Please_wait: 'Vui lòng đợi 30s để gửi lại mã OTP',
  Data_is_not_correct: 'Dữ liệu đã nhập xảy ra lỗi. Vui lòng thử lại',
  Password_failed:
    'Mật khẩu phải bao gồm 8 kí tự, số, ký tự in thường và in hoa',
  Error: 'Lỗi',
  Network_request_fail: 'Kết nối mạng không ổn định, vui lòng thử lại',
  something_wrong: 'Một lỗi đã xảy ra. Vui lòng thử lại sau',
  Car_existed: 'Thông tin xe đã tồn tại và thuộc quyền sở hữu của bạn.',

  //User Process
  Phone_number: 'Số điện thoại',
  Affiliate: 'Mã giới thiệu',
  Password: 'Mật khẩu',
  Login: 'Đăng nhập',
  Forgot_password: 'Quên mật khẩu?',
  Create_new_account_caron: 'Tạo tài khoản Caron mới',
  Description_bottom_login: 'Hệ thống chăm sóc ô tô toàn diện, đạt chuẩn',
  Register: 'Đăng ký',
  OTP_description:
    'Hệ thống sẽ gửi mã OTP đến số điện thoại của bạn, vui lòng nhập mã OTP để đăng ký',
  Register_by_phone: 'Đăng ký bằng điện thoại',
  Send_otp_code: 'Gửi mã OTP',
  register_successful: 'Đăng ký thành công. Vui lòng đăng nhập lại',

  Confirm_password: 'Xác nhận mật khẩu',
  Name: 'Họ và tên',
  DOB: 'Ngày sinh',
  Gender: 'Giới tính',
  City: 'Khu vực',
  Address: 'Địa chỉ',
  Email: 'Email',
  Confirm: 'Xác nhận',
  Fill_new_password: 'Mật khẩu mới',
  Confirm_new_password: 'Xác nhận mật khẩu mới',

  //TopPage
  Caron_wallet: 'Ví CarOn',
  Point: 'Điểm',
  Favorite_service: 'Dịch vụ yêu thích',
  Choose: 'Chọn',
  Remind_mantain: 'Nhắc bảo dưỡng',
  Remind_accreditation: 'Hạn kiểm định',
  Remind_insurance: 'Hạn bảo hiểm',
  Traffic_sanction: 'Phạt nguội',
  Find_rescue: 'Cứu hộ',
  Experience: 'Kinh nghiệm',
  Find_traffic_violation: 'Cẩm nang',
  Incident_consulting: 'Tư vấn sự cố',
  Cancel: 'Huỷ',

  Caron_services: 'Dịch vụ Caron',
  My_car: 'Xe của tôi',
  CsBaoHanh: 'C/s Bảo Hành',
  Find_accessary: 'Phụ tùng',
  Buy_sell_old: 'Chợ xe',
  Announce_service_price: 'Báo giá dịch vụ',
  Promotions: 'Khuyến mại',
  Promotion_cards: 'Thẻ Khuyến mại',
  Vehicle_inspection: 'Định giá xe',
  Service_at_home: 'Gara lưu động',
  Buy_insurance: 'Mua bảo hiểm',
  News_and_blog: 'Tin tức',

  Maybe_you_like: 'Có thể bạn thích',
  Has: 'Còn',
  Have_an_error: 'Có một lỗi xảy ra',
  Server_error: 'Lỗi kết nối đến server',

  //BottomMenu
  Gift: 'Quà tặng',
  Booking: 'Đặt hẹn',
  History: 'Lịch sử',
  Introduce: 'Giới thiệu',
  Save: 'Lưu',
  Choose_service: 'Chọn dịch vụ',

  //My Car
  Manage_my_car: 'Quản lý xe của tôi',
  Add_car_success: 'Thêm xe thành công',
  Edit_success: 'Chỉnh sửa thành công',
  Save_success: 'Lưu thành công',
  License_plates: 'Biển số xe',
  Manufacturer: 'Hãng xe',
  Type_car: 'Loại xe',
  Year_of_manufacture: 'Năm sản xuất',
  Car_color: 'Màu xe',
  Image: 'Hình ảnh',
  Registry_deadline: 'Hạn đăng kiểm',
  Civil_liability_insurance_deadline: 'Hạn bảo hiểm TNDS',
  Civil_liability_insurance_deadline_2: 'Bảo hiểm TNDS',
  Physical_insurance_deadline: 'Hạn bảo hiểm thân vỏ',
  Physical_insurance_deadline_2: 'Bảo hiểm thân vỏ',
  Previous_maintenance_time: 'Lần bảo dưỡng trước',
  Km_previous_maintenance_time: 'Số km lần bảo dưỡng trước',
  Update_car: 'Cập nhật xe',
  Create_new_car: 'Tạo Xe của tôi',

  //C/s Bảo hành
  Manage_cs_BaoHanh: 'Quản lý Chính sách bảo hành',

  //Đặt hẹn
  Services_booking: 'Đặt hẹn dịch vụ',
  Information: 'Thông tin',
  Booking_2: 'Đặt lịch',
  Service: 'Dịch vụ',
  Cost: 'Chi phí',
  Add_services: 'Thêm dịch vụ',
  Next: 'Tiếp tục',
  Who_bring_car: 'Người mang xe đến',
  Me: 'Tôi',
  Phone: 'Điện thoại',
  Another_car: 'Xe khác',
  Xe: 'Xe',
  Note: 'Ghi chú',
  Comment: 'Bình luận',
  Accept_services: 'Đồng ý dịch vụ',
  Where: 'Nơi làm dịch vụ',
  Caron_gara: 'Caron Gara',
  At_home: 'Tại nhà riêng',
  Choose_gara: 'Chọn Gara',
  Choose_advisor: 'Chọn cố vấn',
  Expected_time: 'Thời gian dự kiến',

  washByDryTech: 'Rửa xe khô công nghệ',
  washByWater: 'Rửa xe nước',
  glassStickers3M: 'Dán kính 3M',
  maintenance50000Km: 'Bảo dưỡng 50000km',
  maintenance100000Km: 'Bảo dưỡng 100000km',
  changeFrontWheelBearing: 'Thay bạc đạn bánh trước',
  changeFrontBumper: 'Thay cản trước',
  paint10cm2: 'Sơn 10cm2',
  cleaning: 'Vệ sinh xe',
  price: 'Giá',
  All_pricce_of_services: 'Tổng công dịch vụ',
  Sales_by_voucher: 'Giảm giá Voucher',
  Use_caron_wallet: 'Dùng ví Caron',
  Exchange_caron_point: 'Đổi điểm Caron',
  All_point_caron: 'Tổng điểm CarOn',
  Expected_cost: 'Chi phí dự kiến',
  Note_Cost:
    'Ghi chú: Tổng thanh toán thực tế sẽ tính theo khối lượng dịch vụ thực tế tại Caron',

  Request_announce_service: 'Yêu cầu báo giá dịch vụ',
  Request_announce_price: 'Yêu cầu báo giá',
  Announce_price: 'Báo giá',
  Time: 'Thời gian',
  Time_create: 'Thời gian tạo',
  Seen: 'Xem',
  Not_have: 'Chưa có',
  Cancel: 'Huỷ',
  Create_request_announce_price: 'Tạo yêu cầu báo giá',
  Content_request_announce_price: 'Nội dung yêu cầu báo giá',
  Send_request_announce_price: 'Gửi yêu cầu báo giá',
  See_request_announce_price: 'Xem yêu cầu báo giá',
  Announce_price_service: 'Báo giá dịch vụ sửa chữa',
  Service_advisor: 'Cố vấn dịch vụ',
  Choose_car: 'Chọn xe',
  Estimated_total_cost: 'Tổng chi phí dự kiến ',

  //
  Appraisal_car_title: 'Tư vấn thẩm định xe cũ',
  Appraisal_car_des: 'Xem tiêu chuẩn thẩm định xe cũ của Caron',
  Owner_car_name: 'Tên chủ xe',
  Place_action: 'Địa điểm thực hiện',
  At_Caron: 'Tại Caron',
  Estimated_vehicle_value: 'Giá trị xe ước tính',
  Provisional_appraisal_fee: 'Phí thẩm định tạm tính',
  Appointment_appraisal: 'Hẹn lịch thẩm định',
  Han_kiem_dinh: 'Hạn kiểm định',
  Update: 'Cập nhật',
  Appraisal: 'Thẩm định',

  //
  Receive_noti: 'Nhận thông báo',
  Noti_by_app: 'Thông báo kiểm định qua App',
  Noti_by_email: 'Thông báo kiểm định qua Email',
  Noti_by_sms: 'Thông báo kiểm định qua SMS',
  Noti_by_zalo: 'Thông báo kiểm định qua Zalo',
  Notification: 'Thông báo',
  Notification_detail: 'Chi tiết thông báo',

  //
  Type_code_promotion: 'Nhập mã thẻ khuyến mãi',
  Use_now: 'Dùng ngay',
  Condition: 'Điều kiện',
  Effect: 'Hiệu lực',
  Due_date: 'Hạn dùng',
  Max: 'Tối đa',
  Received_promotion: 'Nhận khuyến mại',
  Make_appointment_to_use_service: 'Hẹn lịch sử dụng dịch vụ',

  //Kinh nghiem
  All: 'Tất cả',
  Resovle_problem: 'Xử lý sự cố',
  Drive_experience: 'Kinh nghiệm lái xe',
  Custom_car: 'Độ xe',
  Search: 'Tìm kiếm',

  //gt
  Introduction: 'Giới thiệu',
  Introduction_title:
    'CARON GARAGE - HỆ THÓNG SỬA CHỮA, CHĂM SÓC Ô TÔ ĐẠT CHUÁN 5S !',
  Introduction_title_des:
    'CarOn - Hệ thống. dịch vụ ô tô tiêu chuẩn 5S được thành lập và chính thức hoạt động vào tháng. 07/2019, kết quả sau những trăn trở và tâm huyết của ban lãnh đạo. công ty Cô Phần Thương Mại và Dịch Vụ ô tô Minh Việt, về mong muốn mang đến thị trường một chuỗi các hệ thống dịch vụ bảo dưỡng sửa chữa ô tô chất lượng cao. Nhằm đáp ứng nhu cầu ngày càng tăng của quý khách hàng sử dụng xe ô tô với tâm lý luôn mong muốn tìm được cho mình một đơn vị cung cáp dịch vụ bảo dưỡng sửa chữa, chăm sóc xe ô tô uy tín chuyên nghiệp.',
  Find_caron_gara: 'Tìm Caron gara',
  Caron_garages: 'Các gara Caron',
  northSide: 'Miền Bắc',
  middleSide: 'Miền Trung',
  southSide: 'Miền Nam',
  Facilities: 'Cơ sở',
  Contact: 'Liên hệ',
  Guide: 'Dẫn đường',

  //hítory
  History_service: 'Lịch sử dịch vụ',
  Information_services: 'Thông tin dịch vụ',
  Accessary: 'Phụ tùng',
  All_accessary: 'Tổng phụ tùng',
  Total_cost: 'Tổng chi phí',
  Cash: 'Tiền mặt',
  Payment_method: 'Phương thức thanh toán',
  Code_orders: 'Mã đơn hàng',
  Service_use_time: 'Thời gian sử dụng dịch vụ',
  Payment_time: 'Thời gian thanh toán',
  Qa: 'Hỏi đáp',
  See_review: 'Xem đánh giá',
  Service_review: 'Đánh giá dịch vụ',
  All_cost: 'Tổng tiền',
  Detail: 'Chi tiết',
  Product: 'Sản phẩm',
  Date: 'Ngày',
  transferMoney: 'Chuyển khoản',
  Copy: 'Sao chép',
  Coppied: 'Đã sao chép mã đơn hàng',

  //mua bao hiem
  Person_buy_insurance: 'Người mua bảo hiểm',
  Intended_use: 'Mục đích sử dụng',
  Number_of_seats: 'Số chỗ ngồi',
  Car_pickup_minivan: 'Xe pickup, minivan',
  Yes: 'Có',
  No: 'Không',
  Duration_of_insurance: 'Thời hạn bảo hiểm',
  Accident_insurance_for_drivers_and_occupants:
    'Bảo hiểm tai nạn lái xe và người ngồi trên xe',
  Cost_of_delivery: 'Chi phí giao nhận',
  VAT: 'Thuế VAT',
  Sum: 'Tổng',
  Provisional_cost: 'Chi phí tạm tính',
  Insurance_start_time: 'Thời gian bắt đầu bảo hiểm',
  Insurance_end_time: 'Thời gian kết thúc bảo hiểm',
  Ordered: 'Đặt mua',
  Ordered_success: 'Đặt mua thành công',
  Booking_accessory_selected: 'Đặt hẹn dịch vụ đã chọn',
  Regular_violation: 'Cẩm nang',
  Table_code_violation: 'Bảng mã lỗi',
  See_violation: 'Xem lỗi',
  Find_traffic_sanction: 'Tra cứu phạt nguội',
  Find_traffic_sanction_des:
    'Nguồn: Cổng thông tin điện tử Cục Cảnh sát giao thông',
  Find_traffic_sanction_note:
    'Ghi chú: Chọn hoặc nhập biển số xe không dấu "-" hay ".", VD: 30E82748',
  Search_2: 'Tra cứu',
  License_plates_2: 'Biển kiểm soát',
  License_plates_color: 'Màu biển',
  Transportation: 'Loại phương tiện',
  Time_of_violation: 'Thời gian vi phạm',
  Place_of_violation: 'Địa điểm vi phạm',
  Status: 'Trạng thái',
  Violation_detection_unit: 'Đơn vị phát hiện vi phạm',
  Phone_contact: 'Số điện thoại liên hệ',
  Check_on_website: 'Kiểm tra trên website của CSGT.VN',

  Care_car: 'Chăm sóc xe',
  About_caron: 'Về Caron',

  My_gift: 'Quà của tôi',
  Type_code: 'Nhập mã',
  Introduce_endow: 'Giới thiệu, ưu đãi',
  Car_name: 'Tên xe',
  User_info: 'Thông tin người dùng',
  Change_pass: 'Đổi mật khẩu',
  Booking_history: 'Lịch sử đặt lịch',
  Current_password: 'Mật khẩu hiện tại',
  New_password: 'Mật khẩu mới',
  Confirm_new_password: 'Xác nhận mật khẩu mới',
  Change_pass_success: 'Đổi mật khẩu thành công',
  Lich_hen: 'Lịch hẹn',
  List_rescue: 'Các trung tâm cứu hộ',
  Filter_city: 'Lọc tỉnh thành',
  Booking_home_service: 'Đặt hẹn dịch vụ lưu động',
  Person_booking: 'Người đặt hẹn',
  Nha_san_xuat: 'Nhà sản xuất',
  Home_address: 'Địa chỉ lưu động',
  Home_service_des:
    'CarOn sẽ liên hệ lại với quý khách để tư vấn ngay sau khi Quý khách đặt hẹn. Trân trọng cảm ơn Quý khách',
  Key_word: 'Từ khóa',
  Nam_dang_ky: 'Năm đăng ký',
  Chua_ban: 'Chưa bán',
  Thong_tin_xe: 'Thông tin xe',
  DV_sua_chua: 'DV sửa chữa',
  DV_tai_nha: 'DV tại nhà',
  DV_tham_dinh: 'DV thẩm định',
  Placeholder_thamdinh:
    'Tình trạng xe đã va quyệt hay chưa, sửa chữa động cơ hay chưa,...',
};

export {StringsEnglish, StringsVietnamese, CheckLogic};
