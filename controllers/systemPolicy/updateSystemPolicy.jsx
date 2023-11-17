import axios from "axios";

export const updatePermittedFileType = async (newPermittedFileType) => {
  console.log("NEW LIST " + newPermittedFileType);
  axios
    .put(`http://localhost:3001/systemPolicy/permittedFileType`, {
      permittedFileType: newPermittedFileType,
    })
    .then((response) => {
      console.log("Printer status updated:");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

export const updateAllocatedDate = async (newAllocatedDate) => {
  console.log("NEW DATA " + newAllocatedDate);
  axios
    .put(`http://localhost:3001/systemPolicy/allocatedDate`, {
      allocatedDate: newAllocatedDate,
    })
    .then((response) => {
      console.log("Printer status updated:");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

export const updateMaximumFileSize = async (newMaximumFileSize) => {
  console.log("NEW MAX " + newMaximumFileSize);
  axios
    .put(`http://localhost:3001/systemPolicy/maximumFileSize`, {
      maximumFileSize: newMaximumFileSize,
    })
    .then((response) => {
      console.log("Printer status updated:");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

export const updateDefaultPage = async (newDefaultPage) => {
  console.log("NEW DP " + newDefaultPage);
  axios
    .put(`http://localhost:3001/systemPolicy/defaultPage`, {
      defaultPage: newDefaultPage,
    })
    .then((response) => {
      console.log("Printer status updated:");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
