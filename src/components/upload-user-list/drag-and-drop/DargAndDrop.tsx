import React, { useEffect, useState } from 'react'
import { DragAndDropType } from './dargAndDrop';
import Image from 'next/image';
import importFileIcon from "../.././../../public/images/importFile.png"

const DargAndDrop: React.FC <DragAndDropType> = ({
    onFilesSelected,
    width,
    height,
  }) => {

    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (event: any) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
        const newFiles = Array.from(selectedFiles);
            setFiles((prevFiles: any) => [...prevFiles, ...newFiles]);
        }
    };
    const handleDrop = (event: any) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
        const newFiles = Array.from(droppedFiles);
        setFiles((prevFiles: any) => [...prevFiles, ...newFiles]);
        }
    };

    const handleRemoveFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    useEffect(() => {
        onFilesSelected(files);
    }, [files, onFilesSelected]);
  return (
    <section className="drag-drop" style={{ width: width, height: height }}>
      <h1 className='text-black text-[2rem] text-center' style={{
        fontFamily: "visby-bold"
      }}>Drag and drop your files here</h1>
      <div
        className={`border-2 border-dashed border-blue-500 bg-blue-50 p-10 flex flex-col items-center justify-center relative rounded-2xl cursor-pointer ${
          files.length > 0 ? "border-blue-500" : "border-green-500"
        } text-black`}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className='flex justify-center flex-col'>
          <div className="flex flex-col gap-3 items-center justify-center mb-[1rem]">
            {/* <AiOutlineCloudUpload /> */}
            {/* <div className=' rounded-full h-[40px] w-[40px] p-1 flex justify-center items-center cursor-pointer'>
            </div> */}
                
            <div className='flex justify-center '>
              {/* <p>Drag and drop your files here</p> */}
              
              <p className='text-center'>
                Limit 15MB per file. Supported files:
                .XLSX
              </p>
            </div>
            {/* <div className='bg-black rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] p-[1px] md:p-1 flex justify-center items-center cursor-pointer'>
            <Image
                // className="md:w-8 md:h-8 h-5 w-5"
                className="h-[30px] w-[30px]"
                src={ importFileIcon }
                alt="icon"
            />
            </div> */}
          </div>
          <input
            type="file"
            hidden
            id="browse"
            onChange={handleFileChange}
            // accept=".pdf,.docx,.pptx,.txt,.xlsx"
            accept=".xlsx"
            multiple
          />
          <label htmlFor="browse" className="flex justify-center flex-col bg-blue-100 py-2 px-4 rounded-3xl cursor-pointer">
            <div className='w-full flex justify-center'>
              <div className='bg-black rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] p-[1px] md:p-1 flex justify-center items-center cursor-pointer'>
                <Image
                    // className="md:w-8 md:h-8 h-5 w-5"
                    className="h-[30px] w-[30px]"
                    src={ importFileIcon }
                    alt="icon"
                />

              </div>
            </div>
            <span className='text-white text-center'>
              Browse files
            </span>
          </label>
        </div>

        {files.length > 0 && (
          <div className="file-list ">
            <div className="file-list__container">
              {files.map((file, index) => (
                <div className="file-item" key={index}>
                  <div className="file-info">
                    <p>{file.name}</p>
                    {/* <p>{file.type}</p> */}
                  </div>
                  <div className="file-actions">
                    {/* <MdClear onClick={() => handleRemoveFile(index)} /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {files.length > 0 && (
          <div className="success-file">
            {/* <AiOutlineCheckCircle
              style={{ color: "#6DC24B", marginRight: 1 }}
            /> */}
            <p>{files.length} file(s) selected</p>
          </div>
        )}
      </div>
    </section>

  )
}

export default DargAndDrop