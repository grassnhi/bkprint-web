# BKPrint

## Introduction

Welcome to the BKPrint - a Student Smart Printing Service website for students at Ho Chi Minh City University of Technology (HCMUT).

## Version

Current Version: v2.1.3

For a detailed history of changes and updates, please refer to the [CHANGELOG.md](https://github.com/grassnhi/bkprint-web/blob/main/CHANGELOG.md) file.

## Documents

BKPrint maintains several critical documents and diagrams that are stored within the [**documents**](https://github.com/grassnhi/bkprint-web/tree/main/documents) folder:

- [Requirement](https://github.com/grassnhi/bkprint-web/blob/main/documents/Requirement.pdf)
- [System modelling](https://github.com/grassnhi/bkprint-web/blob/main/documents/Modelling.pdf)
- [Architectural design](https://github.com/grassnhi/bkprint-web/blob/main/documents/Architecture.pdf)

## Features

### For students:

- File uploading
- Printer choosing
- Printing configuration
- Checking printing log
- Checking payment log
- Checking printing balance
- Checking printing status

### For SPSOs (Student Printing Service Officers):

- File type management
- Printer management
- System configuration management
- Viewing reports
- Viewing printing log

## Usage

### For students:

- First, navigate to the application's URL to access the homepage.
- Click the **Đăng nhập ngay** button to initiate the sign-in process.
- Choose the appropriate user type (**Sinh viên trường Đại học Bách khoa**) when prompted.
- Enter your login credentials, including your username and password, into the designated fields.
- Click the **Đăng nhập** button to log in to your account.
- Click **Tải lên và in** button to upload the documents.
- Choose an accepted file type and then click **Tải tệp lên**.
- Choose a printer from the printers' list.
- Click **Xem vị trí máy in** to see all printers' locations.
- Click **Hoàn thành** button to confirm the choice.
- Specify printing properties such as paper size, page selection, single or double-sided printing, and the number of copies.
- Click **In ngay** button for printing document.
- If the account balance is insufficient for a printing job, you will be redirected to the "buying page" to get more pages.
  - Choose the page type and the number of pages.
  - Click **Thanh toán** button to purchase.
  - Click **Hoàn thành** button agian to confirm the job.
- A window appears to inform that the document has been printed.
- Click **Tiếp tục in** to print another document or click **Về trang chủ** to navigate to the homepage.
- At homepage, click **Xem thông tin tài khoản** to view and manage your account information.

### For admins:

- First, navigate to the application's URL to access the homepage.
- Click the **Đăng nhập ngay** button to initiate the sign-in process.
- Choose the appropriate user type (**Quản trị viên BKPrint**) when prompted.
- Enter your login credentials, including your username and password, into the designated fields.
- Click the **Đăng nhập** button to log in to your account.
- Click **Quản lý người dùng** or **Quản lý hệ thống** button for navigate to the management dashboard.
- The management dashboard appears.
  - The **Quản lý người dùng - Lịch sử in** section displays the general printing history of the students. Click **Xem thêm** to view more history.
  - In **Quản lý hệ thống - Máy in** section, click **Thêm máy in** and fill in the blank to add a new printer and/ or click on the current printers' status to change their status.
  - In the **Tùy chỉnh** section, click **Cập nhật** to change the number of pages given to each student and/ or click on the file types' status to change the permission of each file type.
  - In the **Báo cáo** section, click **Xem kho lưu trũ báo cáo** to view or download the reports that are automatically generated.
