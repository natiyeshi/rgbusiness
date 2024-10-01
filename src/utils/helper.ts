import * as FaIcons from 'react-icons/fa';

export const allIconsArray = Object.values(FaIcons);

export function formatDate(date : Date): string {

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = String(date.getDate()).padStart(2, '0');
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();


    return `${month}-${day}-${year}`;
}

 
export const uploadImage = async (image: any) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "mymymy");
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME??"");
    data.append("folder", "Cloudinary-React");
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/`,
        {
          method: "POST",
          body: data,
        },
      );
      const res = await response.json();
      if(response.ok){
        return {error : null, url : res.url}
      }
      return {error : res.error.message, url : null};
    } catch (e : any) {
      return {error : e.toString(), url : null};
    }
};

export const getMaxString = (str : string, max = 60) => {
  if(str.length > max){
    return str.substring(0, max) + "...";
  }
  return str;
}