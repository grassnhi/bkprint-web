import React, { useState } from "react";
import { Button, Form, Upload } from "antd";
import cloudicon from "../assets/Upload icon.png";
import "./uploadtable.css";

const Uploadtable = () => {
  const [fileList, setFileList] = useState([]);

  return (
    <div className="upTable">
      <h2 className="tableTitle">Tải tệp lên</h2>
      <p className="intruc">(Chỉ tải lên MỘT tệp)</p>
      <div className="iconBox">
        <img className="cloud" src={cloudicon} alt="icon" />
        <span className="text1">
          Tải tài liệu hoặc
          <span> </span>
          <span className="dtext">duyệt</span>
        </span>
        <div className="text2">
          Định dạng hỗ trợ: PDF, Word, Excel, PPT, JPEG, PNG
        </div>
      </div>

      <Form
        className="form"
        onFinish={(values) => {
          console.log({ values });
        }}
      >
        <span className="loading">
          Tệp chọn tải lên (Nhấn vào ô bên dưới để tải tệp)
        </span>

        <Form.Item
          name={"Upload file"}
          valuePropName="fileList"
          getValueFromEvent={(event) => {
            return event?.fileList;
          }}
          rules={[
            { required: true, message: "Please upload your file" },
            {
              validator(_, fileList) {
                return new Promise((resolve, reject) => {
                  if (fileList && fileList[0].size > 2000000) {
                    reject("File size exceeded");
                  } else {
                    resolve("Success");
                  }
                });
              },
            },
          ]}
        >
          <Upload
            accept=".pdf, .doc, .docx, .xlsx, .pptx, .JPEG, .PNG"
            maxCount={1}
            beforeUpload={(file) => {
              return new Promise((resolve, reject) => {
                if (file.size > 2000000) {
                  reject("File size exceeded");
                } else {
                  resolve("Success");
                }
              });
            }}
            customRequest={(info) => {
              setFileList([info.file]);
            }}
            showUploadList={false}
          >
            <Button className="oneBtn">{fileList[0]?.name}</Button>
          </Upload>
        </Form.Item>

        <span className="complete">Tệp đã tải lên</span>
        <Button className="c1">{fileList[0]?.name}</Button>

        <Button id="finish" htmlType="submit" block>
          HOÀN THÀNH
        </Button>
      </Form>
    </div>
  );
};

export default Uploadtable;
