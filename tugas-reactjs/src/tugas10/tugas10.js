import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Table } from 'flowbite-react';

const Tugas10 = () => {
    const [data, setData] = useState(null)
    useEffect( () => {

    axios.get('https://backendexample.sanbercloud.com/api/student-scores')
    .then((res) =>{
        let data = res.data
        
        let resultData = data.map((e) => {
            let {
                id,name,score,course
            } = e

            return {
                id,name,score,course
            }
    })
        setData([...resultData])
    })
    .catch(()=>{

    })

    },[ ])

    console.log(data)

    return(
        <div className="mx-48 my-24 shadow-xl">    
      <Table hoverable >
        <Table.Head className >
          <Table.HeadCell className="w-0 text-center bg-purple-500">
            No
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-500">
            Nama
          </Table.HeadCell>
          <Table.HeadCell className="bg-purple-500">
            Mata Kuliah
          </Table.HeadCell>
          <Table.HeadCell className="text-center bg-purple-500">
            Nilai
          </Table.HeadCell>
          <Table.HeadCell className="text-center bg-purple-500">
            Index Nilai
          </Table.HeadCell>
        </Table.Head>
        {data !== null && data.map((res,index) =>{
            const nilai = handleIndexScore(res.score);
            function handleIndexScore(score){
                if( score >= 80 ){
                    return "A";
                }else if( score >= 70 ) {
                    return "B";   
                }else if( score >= 60 ){
                    return "C"
                }else if (score >= 50) {
                    return "D";
                } else {
                    return "E";
                }
            }
            return (
                <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
            {index + 1}
            </Table.Cell>
            <Table.Cell>
            {res.name}
            </Table.Cell>
            <Table.Cell>
            {res.course}
            </Table.Cell>
            <Table.Cell className="text-center">
            {res.score}
            </Table.Cell>
            <Table.Cell className="text-center">
            {nilai}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
            )
        })}
      </Table>
    </div>
    )
}

export default Tugas10