import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import MyLayout from "@/pages/component/layout"

export default function AddAdmin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('address', data.address);
        formData.append('myfile', data.myfile[0]);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/admin/insertadmin",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
          

            setSuccess('Admin add successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Admin add unsuccessfull ' + error.response.data.message);

        }


    };

    return (
        <>
            <MyLayout title="Add Admin" />
            <h1>Add Admin</h1>
            {success}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <p>Name is required</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                    {errors.email && (
                        <p>
                            {errors.email.type === 'required'
                                ? 'Email is required'
                                : 'Invalid email address'}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="email">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: true, pattern: /^\d+$/, minLength: 5 })}
                    />
                    {errors.password && (
                        <p>
                            {errors.password.type === 'required'
                                ? 'password is required'
                                : 'Invalid password address'}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="address">address</label>
                    <textarea id="address" {...register('address', { required: true })} />
                    {errors.address && <p>address is required</p>}
                </div>
                <div>
                    <label htmlFor="file">File</label>
                    <input
                        type="file"
                        id="myfile"
                        {...register('myfile', { required: true })}
                    />
                    {errors.myfile && <p>File is required</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
