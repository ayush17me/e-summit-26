import React, { useState, useRef } from "react";
import { uploadToCloudinary, UploadResult } from "@/lib/cloudinary";
import { UploadCloud, CheckCircle, X, Loader2 } from "lucide-react";

interface ImageUploadProps {
  /** Called when an image is successfully uploaded to Cloudinary */
  onUploadSuccess: (result: UploadResult) => void;
  /** Cloudinary folder path. Default is "e-summit" */
  folder?: string;
  className?: string;
}

export function ImageUpload({ onUploadSuccess, folder = "Speakers", className = "" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }

    try {
      setIsUploading(true);
      setError(null);
      
      const result = await uploadToCloudinary(file, {
        folder,
        onProgress: (p) => setProgress(p),
      });
      
      onUploadSuccess(result);
    } catch (err: any) {
      setError(err.message || "Failed to upload image");
    } finally {
      setIsUploading(false);
      setProgress(0);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
        className={`w-full flex flex-col items-center justify-center gap-2 px-6 py-6 border-2 border-dashed rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50
          ${isUploading ? "bg-white/5 border-primary/50 text-white/70 cursor-not-allowed" : "border-white/20 hover:border-primary border-primary/30 bg-primary/5 hover:bg-primary/10 text-white"}
        `}
      >
        {isUploading ? (
          <>
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="font-medium">Uploading... {progress}%</span>
          </>
        ) : (
          <>
            <div className="p-3 bg-primary/20 rounded-full mb-2">
              <UploadCloud className="w-6 h-6 text-primary" />
            </div>
            <span className="font-medium">Click to upload image</span>
            <span className="text-xs text-white/50">Supports JPG, PNG, WEBP</span>
          </>
        )}
      </button>

      {error && (
        <p className="mt-2 text-sm text-destructive flex items-center justify-center gap-1">
          <X className="w-4 h-4" /> {error}
        </p>
      )}
    </div>
  );
}
