import React from 'react'
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import { RiAttachmentLine } from "react-icons/ri";
const urlEndpoint = "https://ik.imagekit.io/wvihthnsz";
const publicKey = "public_qPBFUkilWUEuIkCVi4N3hnGcdbw="; 
import { useRef } from 'react';
const authenticator =  async () => {
    try {
        const response = await fetch('http://localhost:106/api/upload');

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const Upload = ({setImg}) => {
    console.log("sam" + publicKey)
    const onError = err => {
        console.log("Error", err);
      };
      
      const onSuccess = res => {
        console.log("Success", res);
        setImg(prev=>({
          ...prev, isLoading:false, dbData:res
        }))
      };
      
      const onUploadProgress = progress => {
        console.log("Progress", progress);
        
      };
      
      const onUploadStart = evt => {
        console.log("Start", evt);
        setImg(prev=>({...prev, isLoading:true}))
      };
      const uploadref = useRef(null)
  return (
    <div>
       <IKContext
        urlEndpoint={urlEndpoint}
        publicKey={publicKey}
        authenticator={authenticator}
      >
          <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
          useUniqueFileName={true}
          onUploadProgress={onUploadProgress}
          onUploadStart={onUploadStart}
          style={{display:'none'}}
          ref={uploadref}
        />
        {/* attachement btn  click hone par upload btn click hogi */}
        <label onClick={()=>uploadref.current.click()} > <button className='attach'><RiAttachmentLine style={{ backgroundColor: "rgb(130,130,130)", width: "30px", height: "30px", borderRadius: "50%", padding: "5px" }} /></button></label>
      </IKContext>
    </div>
  )
}

export default Upload
