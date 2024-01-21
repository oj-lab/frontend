import React, { useCallback, useRef } from "react";

const FileUploader: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        // Handle the files
        console.log(files);
      }
    },
    [],
  );

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      // Handle the files
      console.log(files);
    }
  }, []);

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const onClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return (
    <div
      className="flex h-36 cursor-pointer items-center 
        justify-center rounded-xl border-1.5 border-dashed 
        border-gray-400 bg-gray-100 p-4 text-center"
      onDrop={onDrop}
      onDragOver={onDragOver}
      onClick={onClick}
    >
      <input
        type="file"
        className="hidden"
        onChange={onFileChange}
        ref={fileInputRef}
        accept=".zip"
        multiple={false}
      />
      <p className="text-lg text-gray-500 after:ml-0.5 after:text-xs after:text-danger after:content-['*']">
        Drop some files here, or click to select file
      </p>
    </div>
  );
};

export default FileUploader;
