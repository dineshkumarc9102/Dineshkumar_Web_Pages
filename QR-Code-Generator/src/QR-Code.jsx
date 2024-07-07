import React, { useState } from 'react'
import './QR-Code.css'
export const QRCode = () => {

    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("");
    const [qrSize, setQrSize] = useState("");

    async function generateQR() {
        setLoading(true);
        try{
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        }
        catch(error){
            console.error("Error on Generating QR code ",error);
        }
        finally{
            setLoading(false);
        }
    }

    function downloadQR() {
        fetch(img)
        .then((response) => response.blob())
        .then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error) => {
            console.error("Error on Downloading QR code ",error)
        })
    }

  return (
    <div className='container'>
        <h1>QR Code <span>Generator</span></h1>
        {loading && <p>Please Wait.......</p>}
        {img && <img src={img} className="img" alt="qr-code"/>}
        <div>
            <input type="text" value={qrData} id='input' placeholder='Enter the Data for QR Code ' onChange={(e) => setQrData(e.target.value)}/>
            <input type="text" value={qrSize}id='input' placeholder='Enter the Data for Image Size' onChange={(e) => setQrSize(e.target.value)}/>

            <button className='gen-btn' onClick={generateQR} disabled={loading}>Generate</button>
            <button className='down-btn' onClick={downloadQR}>Download</button>
        </div>
    </div>
  )
}
