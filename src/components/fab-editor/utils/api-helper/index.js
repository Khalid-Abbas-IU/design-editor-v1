import {PEXEL_API_KEY,PEXEL_API} from "@/components/fab-editor/utils/constants";
import axios from "axios";

const loadImages =async (query="people")=>{
    let payload;
    const config = {
        headers: {
            Authorization: PEXEL_API_KEY
        }
    }
    await axios.get(PEXEL_API + query,config).then((res)=>{
            if(res?.data) {
                payload = [...res.data.photos];
            }
            else payload = [];
        }).catch(error => {
            console.log(error)
            payload = [];
        })
    return payload;
}

export {
    loadImages
}