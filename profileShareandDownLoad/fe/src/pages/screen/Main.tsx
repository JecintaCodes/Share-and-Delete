import { AiOutlineClockCircle, AiOutlineHeart } from "react-icons/ai";
import pix from "../../assets/373.jpg"
import { useState } from "react";


const Main = () => {
    const [state, setState] = useState<number>(0);

    // const countState = () =>{
    //     setState((el)=>{
    //         return el+1;
    //     });
    // };
    const countState = () =>{
        setState((el)=>{
            return el + 1;
        });
    };

    return (
        <div className="w-[100%] h-[100Vh] flex justify-center ">
            <div className="w-[95%] ">

                {/* card */}
             <div className="flex flex-wrap" >
        
                <div className=" h-[500px] w-[300px] border border-[silver] mt-[20px] rounded-md  ">
              <div>
                  {/* image part */}
                  <div className="w-[100%] h-[300px]  ">
                            <img src={pix} alt={pix}
                            className="relative w-[100%] h-[300px] object-cover rounded-md overflow-hidden "
                            />
                        </div>
                         {/* end image part */}
                        {/* love icon */}
                        <div className="w-[30px] rounded-[50%] h-[30px] border-[2px] border-red-500 flex justify-center items-center absolute  top-[130px] right-[1030px] bg-[whitesmoke] "
                        onClick={countState}
                        >
                            <AiOutlineHeart className="text-[15px] bg-[#e7e2e2] rounded-[50%] "
                            
                            />
                        </div>
                         {/* end love icon */}
                        {/* project */}
                        <div className="w-[200px] h-[50px] bg-yellow-500 rounded-sm flex justify-center items-center absolute top-[400px] right-[1070px] ">
                            <div className="text-[17px] font-semibold text-white ">Project Manager</div>
                        </div>
                          {/* end project */}
                                  {/* title/name */}
                        <div className=" mt-[30px] " >
                            <div className="text-[18px] font-semibold w- full h-[50px] p-2">Jecinta Ugochi</div>
                            <div className="text-[14px] font-medium w-full h-[50px] p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </div>
                            {/* days */}
                            <div className="text-[11px] font-medium  flex  justify-between w-full h-[50px] items-center bg-yellow-50 rounded p-2 ">
                                <div className="flex gap-[10px]">
                                <AiOutlineClockCircle className="text-yellow-500 text-[14px]" 
                                
                                />
                                <div>7 days ago</div>
                                </div>
                            
                        <div className="flex gap-[6px]  items-center ">
                        <div className=" ">
                                <AiOutlineHeart
                                 className=" text-[14px] cursor-pointer"
                                //  onClick={()=>{
                                //     setState(countState)
                                //  }}
                                 />
                            </div>
                            <div className="font-semibold text-[13px] ">5</div>
                        </div>
                        </div>
                        </div>
              </div>
                         {/*end title */}
                </div>
             
             </div>

            </div>
        </div>
      )
}

export default Main
