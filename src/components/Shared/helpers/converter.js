import moment from 'moment';

export const formatter = {
  toMoney: (input) =>
    "₦" +
    input
      .toLocaleString("en-US", {
        style: "currency",
        currency: "NGN",
      })
      .replace("NGN", ""),
  toDate: (date) => moment(date).format('DD-MM-YYYY')
};

export function addThreeDots(string, limit = 100)
{
  var dots = "...";
  if(string.length > limit)
  {
    string = string.substring(0,limit) + dots;
  }

    return string;
}

const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon"
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

