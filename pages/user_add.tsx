import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

const SignupPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: e.currentTarget.name.value,
      age: e.currentTarget.age.value,
    };
    const res = await fetch("/api/user/hello", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      Router.replace("/");
    }
  };

  return (
    <>
      <Head>
        <title>Add</title>
      </Head>
      <div>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input id="name" name="name" type="text" placeholder="Your name" />
          </label>
          <label htmlFor="email">
            <input id="age" name="age" type="text" placeholder="age" />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};
export default SignupPage;
