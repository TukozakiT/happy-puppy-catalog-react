import Image from "next/image";
import pic from "../../public/profile_test_image.png";

export default function HeaderProject(){

    return(
        <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                <Image src={pic}/>
                <button style={{backgroundColor: "#ff8888", color:"#fff", padding:"8px 15px", fontSize:"20pt", borderRadius:"15px", boxShadow:"none", border:"none"}}>
                    Donate
                </button>
                
            </div>
            <h1 style={{padding:"0px 0px 0px 20px"}}>Project Name</h1>
        </div>
    );
}