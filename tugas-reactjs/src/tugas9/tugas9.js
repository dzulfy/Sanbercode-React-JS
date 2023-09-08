import React from "react";
import { Table } from 'flowbite-react';
const Tugas9 = () => {
    return(
    <div className="mx-48 my-24 shadow-xl">    
      <Table hoverable>
        <Table.Head >
          <Table.HeadCell className="w-0 text-center">
            No
          </Table.HeadCell>
          <Table.HeadCell>
            Nama
          </Table.HeadCell>
          <Table.HeadCell>
            Mata Kuliah
          </Table.HeadCell>
          <Table.HeadCell className="text-center">
            Nilai
          </Table.HeadCell>
          <Table.HeadCell className="text-center">
            Index Nilai
          </Table.HeadCell>
          <Table.HeadCell className='text-center'>
            Action
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
              1
            </Table.Cell>
            <Table.Cell>
              Jhon
            </Table.Cell>
            <Table.Cell>
              Algoritma
            </Table.Cell>
            <Table.Cell className="text-center">
              80
            </Table.Cell>
            <Table.Cell className="text-center">
              A
            </Table.Cell>
            <Table.Cell className='text-center'>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p className='bg-sky-400 rounded-md text-white text-center py-1 p-2 ml-0 mr-1 my-0 w-16 inline-block hover:bg-sky-600'>
                  Edit
                </p>
                <p className='bg-red-500 rounded-md text-white text-center py-1 px-2 ml-0 mr-1 my-0 w-16 inline-block hover:bg-red-700'>
                  Hapus
                </p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
              <p>
                2
              </p>
            </Table.Cell>
            <Table.Cell>
              Doe
            </Table.Cell>
            <Table.Cell>
              Matematika
            </Table.Cell>
            <Table.Cell className="text-center">
              70
            </Table.Cell>
            <Table.Cell className="text-center">
              B
            </Table.Cell>
            <Table.Cell className='text-center'>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p className='bg-sky-400 rounded-md text-white text-center py-1 p-2 ml-0 mr-1 my-0 w-16 inline-block hover:bg-sky-600'>
                  Edit
                </p>
                <p className='bg-red-500 rounded-md text-white text-center py-1 px-2 ml-0 mr-1 my-0 w-16 inline-block hover:bg-red-700'>
                  Hapus
                </p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
              3
            </Table.Cell>
            <Table.Cell>
              Frank
            </Table.Cell>
            <Table.Cell>
              Kalkulus
            </Table.Cell>
            <Table.Cell className="text-center">
              60
            </Table.Cell>
            <Table.Cell className="text-center">
              C
            </Table.Cell>
            <Table.Cell className='text-center'>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p className='bg-sky-400 rounded-md text-white text-center py-1 p-2 ml-0 mr-1 my-0 w-16 inline-block hover:bg-sky-600'>
                  Edit
                </p>
                <p className='bg-red-500 rounded-md text-white text-center py-1 px-2 ml-0 mr-1 my-0 w-16 inline-block hover:bg-red-700'>
                  Hapus
                </p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
              4
            </Table.Cell>
            <Table.Cell>
              Jason
            </Table.Cell>
            <Table.Cell>
              Basis Data
            </Table.Cell>
            <Table.Cell className="text-center">
              90
            </Table.Cell>
            <Table.Cell className="text-center">
              A
            </Table.Cell>
            <Table.Cell className='text-center'>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p className='bg-sky-400 rounded-md text-white text-center py-1 p-2 ml-0 mr-1 my-0 w-16 inline-block hover:bg-sky-600'>
                  Edit
                </p>
                <p className='bg-red-500 rounded-md text-white text-center py-1 px-2 ml-0 mr-1 my-0 w-16 inline-block hover:bg-red-700'>
                  Hapus
                </p>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    )
}

export default Tugas9