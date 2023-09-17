import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
        .then((res) =>{
            setData([...res.data])
        })
        .catch((error) =>{

        })
    },[])
    console.log(data)
    function formatRupiah(angka, prefix = 'Rp. ') {
        if (typeof angka !== 'string') {
          angka = angka.toString();
        } 
      
        var number_string = angka.replace(/[^,\d]/g, ''),
          split = number_string.split(','),
          sisa = split[0].length % 3,
          rupiah = split[0].substr(0, sisa),
          ribuan = split[0].substr(sisa).match(/\d{3}/g),
          separator = '';
      
        if (ribuan) {
          separator = sisa ? '.' : '';
          rupiah += separator + ribuan.join('.');
        }
      
        rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix + rupiah;
      }
    
    function handlePrice (price){
        if(price === 0){
            return "FREE"
        } else {
            return formatRupiah(price)
        }
    }

    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    function convertMBToGB(sizeInMB) {
        const sizeInGB = sizeInMB / 1024;
        return sizeInGB.toFixed(2) + ' GB';
      }
    
    function handleSoftware(android, ios){
        if(android === 1 && ios === 0){
            return"Android"
        }else if(android === 0 && ios === 1){
            return"Ios"
        }else if(android === 1 && ios === 1){
            return"Android & Ios"
        }
    }
    
      

    return(
        <>
  {/* batas awal Content Section */}
  <section className="bg-gray-200 p-5">
    <div className="container mx-auto mt-10">
      <h1 className="text-xl font-bold ">Find your data that you need!</h1>
    </div>
    <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
      {/* Batas awal Card section */}
      {data !== null && data.map((res)=>{
        return(
            <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={res.image_url}
          alt=""
          className="w-1/3 bg-cover bg-center bg-landscape"
        />
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl">
            {res.name}
          </h1>
          <small>{res.release_year}</small>
          <p className="mt-2 text-gray-600 text-sm">
            {truncateText(res.description, 150)}
          </p>
          <div className=" item-center mt-2 text-gray-500">
            <span>{res.category}</span>
            <span>, {convertMBToGB(res.size)}</span>
            <span>, {handleSoftware(res.is_android_app , res.is_ios_app)}</span>
          </div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">{handlePrice(res.price)}</h1>
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
            Rating ⭐{res.rating}
            </button>
          </div>
        </div>
      </div>
        )
      })}
      
      {/* Batas akhir Card section */}
    </div>
  </section>
  {/* batas akhir Content Section */}
</>

    )
}

export default Home