'use client'
import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { API_POST_PRODUCT, API_CATEGORY } from '@/lib/api';
import * as Yup from 'yup';
import axios from 'axios';
import Image from 'next/image';
import LoadingComponents from '@/components/Loading';
const FILE_SIZE = 1024 * 1024 * 2; // 2MB
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
];
const validationChema = Yup.object().shape({
    title: Yup.string().required("title is required"),
    price: Yup.string().required("price is require"),
    description: Yup.string().required("Descriptuon is require"),
    categoryId: Yup.string().required("categoryId is require"),
    file: Yup.mixed().test("fileSize", "File too large",
        (value) => {
            if (!value) return true;
            return value.size <= FILE_SIZE;
        }).test("fileFormat", "Unsupported Format",
            (value) => {
                if (!value) { return true; }
                return SUPPORTED_FORMATS.includes(value.type);
            })
        .required("Required"),
});
export async function getCategory() {
    const res = await fetch(API_CATEGORY(8), { cache: "no-store" });
    const data = await res.json();
    return data;
}
export default async function AddProd() {
    const [isLoading, setIsLoading] = useState(false);
    const categories = await getCategory();
    const createProduct = async (user) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const { title, price, description, categoryId, images } = user;
        let raw = JSON.stringify({
            title, price, description, categoryId, images
        });
        let requestOptions = {
            method: 'post',
            headers: myHeaders,
            body: raw,
        };
        const res = await fetch("https://api.escuelajs.co/api/v1/products", requestOptions);
        const data = await res.json();
        if (data.error) {
            alert(data.message)
        } else {
            console.log(data);
            alert("user created sucessfully")
            return data;
        }
    }
    const uploadImage = async (value) => {
        try {
            const respone = await axios.post(
                "https://api.escuelajs.co/api/v1/files/upload",
                value.file
            )
            return respone?.data.location || "https://play-lh.googleusercontent.com/yqobWiIMCWcgZctnuOD9CHM6xzNx59bxYLgyxlOHhK4g_1szaZd2YqS4G4V7UoOpy30";
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <main>
                {isLoading ? <LoadingComponents /> : <Formik
                    initialValues={{
                        title: '',
                        price: '',
                        description: '',
                        categoryId: '',
                        file: undefined
                    }}
                    validationSchema={validationChema}
                    onSubmit={async (value, { setSubmitting, resetForm }) => {
                        setIsLoading(true);
                        const formData = new FormData();
                        formData.append("file", value.file);
                        const images = await uploadImage({ file: formData });
                        value.images = [images];
                        createProduct(value);
                        setIsLoading(false);
                        setSubmitting(false);
                        resetForm();
                    }}

                >
                    {({ isSubmitting, setFieldValue }) => (
                        <div className='m-auto'>
                            <Form className='flex-col justify-center items-center w-2/6 m-auto'>
                                <div>
                                    <label htmlFor='title' className='block mb-2 mt-3  text-sm font-medium text-gray-900 dark:text-white'>Name : </label>
                                    <Field
                                        type="text"
                                        name="title"
                                        className="mb-2 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <ErrorMessage
                                        name="title"
                                        className='text-red-500'
                                        component="div"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor='price'
                                        className='block mb-2 mt-3  text-sm font-medium text-gray-900 dark:text-white'>
                                        price :
                                    </label>
                                    <Field
                                        type="text"
                                        name="price"
                                        className="mb-2 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <ErrorMessage
                                        name="price"
                                        className='text-red-500'
                                        component="div"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor='description'
                                        className='block mb-2 mt-3  text-sm font-medium text-gray-900 dark:text-white'>
                                        Desciption :
                                    </label>
                                    <Field
                                        as="textarea"
                                        name="description"
                                        className="mb-2 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <ErrorMessage
                                        name="description"
                                        className='text-red-500'
                                        component="div"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='categoryId'
                                        className='block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white'>
                                        Category
                                    </label>
                                    <Field name="categoryId" as="select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="0">Select Category : </option>
                                        {
                                            categories.map((item, index) => (
                                                <option key={index} value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </Field>
                                    <ErrorMessage
                                        name="categoryId"
                                        className='text-red-500'
                                        component="div"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='file'
                                        className='block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white'>
                                        Select File :
                                    </label>
                                    <Field
                                        className="mb-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        name="file"
                                        type="file"
                                        title="Select a file"
                                        // setFieldValue={setFieldValue}
                                        isSubmitting={isSubmitting}
                                        component={CustomInput} // component prop used to render the custom input          
                                    />
                                    <ErrorMessage name="file">
                                        {(msg) => <div className="text-red-600">{msg}</div>}
                                    </ErrorMessage>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Submit
                                </button>
                            </Form>
                        </div>
                    )}
                </Formik>}
            </main>
        </ >
    )
}
function CustomInput({ field, form, isSubmitting, ...props }) {
    const [preview, setPreview] = useState(null);
    useEffect(() => {
        if (isSubmitting) {
            setPreview(null)
        }
    }, [isSubmitting])
    return (
        <div>
            <input
                type='file'
                onChange={(event) => {
                    form.setFieldValue(field.name, event.currentTarget.files[0])
                    setPreview(URL.createObjectURL(event.currentTarget.files[0]))
                }}
                {...props}
            />
            {
                preview && <Image
                    src={preview}
                    alt='upload image'
                    width={200}
                    height={200}
                    className='w-20 h-20 rounded-full object-cover'
                />
            }
        </div>
    )
}