import React, {FormEvent, useEffect, useRef, useState} from "react";

function getApi(url: string, method: "GET") {

    return fetch(url, {method})
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
}

type PostsDataType = {id: number, title: string, body: string, userId: number};

export default function ApiTestTS() {

    const input = useRef<HTMLInputElement>(null);
    const [requestPostsData, setRequestPostsData] = useState<PostsDataType>();
    const defaultURL = 'https://jsonplaceholder.typicode.com/posts/1';
    const getData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input !== null && input.current !== null) {
            const url: string = input.current.value;
            const method = "GET";
            const request = getApi(url, method)
                // console.log(request)
                .then(data => {
                    setRequestPostsData(data);
                });
        }
    }


    const renderData = () => {
        if (requestPostsData !== undefined) {
            return (
                <div className='api-data w-50'>
                    <p><span className='text-black-50 fw-bold'>ID:</span> {requestPostsData.id}</p>
                    <p><span className='text-black-50 fw-bold'>Title:</span> {requestPostsData.title}</p>
                    <p><span className='text-black-50 fw-bold'>Body:</span> {requestPostsData.body}</p>
                    <p><span className='text-black-50 fw-bold'>UserId:</span> {requestPostsData.userId}</p>
                </div>
            );
        }
    }

    return (
        <section className='Api-testTS-app'>
            <header className='text-center'>
                <div className="header-bg header-bg--yellow">
                    <h1 className='title main-title h2'>API request <span className='text-muted small'>on TS</span> </h1>
                </div>
            </header>
            <form onSubmit={getData} action="">
                <div className='input-group'>
                    <input ref={input} className='form-control' defaultValue={defaultURL} type="url" placeholder='enter a url of resource'/>
                    <input className='form-control' type="submit"/>
                </div>
            </form>
            {renderData()}
        </section>
    );
}