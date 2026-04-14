// ─── Config ────────────────────────────────────────────────────────────────
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string;
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;

// ─── Types ──────────────────────────────────────────────────────────────────
export interface UploadResult {
  publicId: string;   // e.g. "Speakers/abc123"
  url: string;        // secure HTTPS URL
  width: number;
  height: number;
  format: string;
  bytes: number;
}

export interface UploadOptions {
  /** Cloudinary folder path, e.g. "Speakers" */
  folder?: string;
  /** Called periodically with 0–100 progress */
  onProgress?: (percent: number) => void;
}

// ─── Upload Function ────────────────────────────────────────────────────────
/**
 * Upload a File to Cloudinary using an unsigned upload preset.
 * No backend required - uses the unsigned upload API.
 */
export async function uploadToCloudinary(
  file: File,
  options: UploadOptions = {}
): Promise<UploadResult> {
  const { folder = "e-summit", onProgress } = options;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", folder);

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // Track upload progress
    if (onProgress) {
      xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
          onProgress(Math.round((e.loaded / e.total) * 100));
        }
      });
    }

    xhr.open("POST", UPLOAD_URL);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        resolve({
          publicId: data.public_id,
          url: data.secure_url,
          width: data.width,
          height: data.height,
          format: data.format,
          bytes: data.bytes,
        });
      } else {
        reject(new Error(`Cloudinary upload failed: ${xhr.statusText}`));
      }
    };

    xhr.onerror = () => reject(new Error("Network error during upload"));
    xhr.send(formData);
  });
}

// ─── URL Helpers ────────────────────────────────────────────────────────────
/**
 * Get an optimised, auto-cropped thumbnail URL for a given public ID.
 * Uses Cloudinary URL-based transformations - no SDK imports needed.
 */
export function getThumbnailUrl(
  publicId: string,
  width: number,
  height: number
): string {
  const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  return `https://res.cloudinary.com/${CLOUD}/image/upload/q_auto,f_auto,c_fill,g_auto,w_${width},h_${height}/${publicId}`;
}

/**
 * Get a full-size optimised URL for a given public ID.
 */
export function getOptimisedUrl(publicId: string): string {
  const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  return `https://res.cloudinary.com/${CLOUD}/image/upload/q_auto,f_auto/${publicId}`;
}
