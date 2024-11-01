import { useRef } from "react"
import video from "../../assets/video (2160p).mp4"
import html2canvas from "html2canvas"
import { FacebookShareButton } from "react-share"

const HomePage = () => {

  const printRef = useRef()

  // const handleClick = async()=>{
   
  //     const element = printRef.current;
  //     const canvas = await html2canvas(element)

  //     const data = canvas.toDataURL("image/jpg");
  //     const link = document.createElement("a");

      // if (typeof link.download === "string") {
      //   link.href = data;
      //   link.download = "image.jpg";

      //   document.appendChild(link);
      //   link.click();

      //   document.body.removeChild(link);
        
      // } else {
      //   window.open(data)
      // }

  // }

    const handleClick = async()=>{
      const element = printRef.current;
      const canvas = await html2canvas(element);

      const data = canvas.toDataURL("image/jpg");
      const link = document.createElement("a");

      if (typeof link.download === "string") {
        link.href = data;
        link.download = "image.jpe";

        document.appendChild(link);
        link.click();

        document.body.removeChild(link)
        
      } else {
       window.open(data) 
      }
    }

 
  return (
    <div ref={printRef}
     className="w-[100%] h-[500px] ">
<div>
<video
      loop
      autoPlay
      muted
       className=" absolute w-[100%] h-[500px] left-0 right-0 object-cover"
      src={video}/>
</div>
      <div className="absolute top-[300px] right-[600px] flex gap-5 " >
          <button className="p-[10px] bg-[white] text-[black] m-[0 20px] text-[15px] font-semibold rounded-[50px] transition-all hover:cursor-pointer scale-[1.05]"
        onClick={handleClick}
          >DownLoad</button>

          <button className="p-[10px] bg-[white] text-[black] m-[0 20px] text-[15px] font-semibold rounded-[50px] transition-all hover:cursor-pointer scale-[1.05] ">
           <FacebookShareButton url="https://www.jumia.com.ng/catalog/?q=laptop"
           quote="Bridging the future innovation"
           hashtag="#Je Cin Ta UgochOnyemaobi"
           >share</FacebookShareButton>
          </button>
      </div>
      </div>
  
  )
}
export default HomePage