import axios from "axios"

export const uploadFiles = async(file)=>{
    const urlUpload = "https://api.cloudinary.com/v1_1/joseph123/upload"
    let formData = new FormData()
    formData.append("upload_preset", "social-app")
    formData.append("file", file)

    try {
        const response = await axios.post(urlUpload,formData)
    } catch (error) {
        console.error(error)
    }
    
    const data = await response.json()
    console.log (data)


}