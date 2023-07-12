"use client";

export default function ErrorWrapper({ error }) {
  return <h1 className='title'>Oops...{error.message}</h1>;
}
