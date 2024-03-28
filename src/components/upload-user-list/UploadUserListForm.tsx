"use client"
import React, { useState } from 'react'
import DargAndDrop from './drag-and-drop/DargAndDrop'

import { useRouter } from 'next/navigation';
import ThreeDotsLoadingAnimation from '../loaders/TreeDotsLoading';
import Image from 'next/image';
import importFileIcon from "../../../public/images/importFile.png"
import { APIURL } from '@/lib/url';

const UploadUserListForm = () => {
    const [files, setFiles] = useState([]);
    console.log("........", files)
    const router = useRouter (); 
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = async (event: any) => {
      event.preventDefault()
      setIsLoading(true);

      console.log("data", files[0])

      const formData: any = new FormData();
      formData.append('file', files[0]);

      // return;

      try {
        const result = await fetch(`${ APIURL }/contact/uploadfile`, {
          method: "POST", 
          headers: {
          }, 
          body: formData
        }); 

        console.log("..........", result)

        if (result.ok) {
          alert("Merci pour votre souscripition")
          setIsLoading(false);
          router.refresh(); 
          router.push("/"); 
        } else {
            throw new Error("Problem pour enregistrer un user. ")
        }
      } catch (error) {
        console.log(error)
      }
  };

  return (
    <form onSubmit={ (e: any) => onSubmit (e) } >
        <DargAndDrop 
            onFilesSelected={setFiles} width="300px" height='400px'
        />
        <div className="mt-4 w-full">
            
            <button
              disabled={files.length === 0 || isLoading ? true : false}
              className={` ${ files.length === 0 || isLoading ? "bg-slate-500" : "bg-black hover:bg-slate-950" } w-full flex flex-row items-center justify-center gap-3 py-4 px-4 rounded-2xl `}
            >
              <div className=' rounded-full h-[40px] w-[40px] p-1 flex justify-center items-center cursor-pointer'>
                <Image
                    // className="md:w-8 md:h-8 h-5 w-5"
                    className="h-[30px] w-[30px]"
                    src={ importFileIcon }
                    alt="icon"
                />
              </div>
              {isLoading ? <ThreeDotsLoadingAnimation color="white" /> : <>Upload file</>}
            </button>
        </div>
            
    </form>
  )
}

export default UploadUserListForm