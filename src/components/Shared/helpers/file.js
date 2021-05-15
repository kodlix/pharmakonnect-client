const fileTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];
  
  export const  validFileType = (file)=> {
    return fileTypes.includes(file.type);
  }

  export const returnFileSize = (number)=> {
    if(number < 1024) {
      return number + 'bytes';
    } else if(number >= 1024 && number < 1048576) {
      return (number/1024).toFixed(1) + 'KB';
    } else if(number >= 1048576) {
      return (number/1048576).toFixed(1) + 'MB';
    }
  }