import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordwordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");

    if (passwords) {
      setPasswordwordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icons/eyecrossed.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/eyecrossed.png";
      passwordRef.current.type = "password";
    }
    
  };

  const savePassword = () => {
    if(form.site.length > 3 && form.username.length > 3 && form.username.length > 3) {
        setPasswordwordArray([...passwordArray, { ...form, id: uuidv4() }]);
        localStorage.setItem(
          "password",
          JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
        );
        setform({site:"",username:"",password:""})
        toast("Password saved successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
    }else {
        toast("Error : Invalid length", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    }
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete?");
    if (c) {
      setPasswordwordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "password",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
    toast("Password deleted successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const editPassword = (id) => {
    console.log("Deleting password with id", id);
    setform(passwordArray.filter((i) => id === id)[0]);
    setPasswordwordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (e) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    navigator.clipboard.writeText(e);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div class="fixed inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-30 blur-[100px]"></div>
      </div>

      <div className="p-2 md:p-0 md:mycontainer">
        <div className="logo font-bold h-8 text-center text-2xl">
          <span className="text-green-400">&lt;</span>
          Pass
          <span className=" text-green-500">Lock/&gt;</span>
        </div>

        <p className="text-green-900 text-lg">Your own password manager</p>

        <div className=" flex flex-col p-4 text-black gap-5 items-center">
          <input
            name="site"
            value={form.site}
            placeholder="Enter website URL"
            onChange={handleChange}
            type="text"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            id="site"
          />
          <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="User-name"
              type="text"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              id="username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter-Password"
                type="password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                id="password"
              />
              <span
                className="absolute top-[9px] right-[6px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  src="/icons/eye.png"
                  className="w-4 h-4 rounded-full"
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-400 rounded-full px-6 py-2 w-fit hover:bg-green-300 hover:border border-green-800 gap-2 "
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Add Passowrd
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4 ">Your Passwords</h2>
          {passwordArray.length === 0 && <div> No passwords to show</div>}
          {passwordArray.length != 0 && (
            <table class="table-auto w-full overflow-hidden rounded-xl mb-2">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-200">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-1 border border-white">
                        <div className="flex items-center justify-center ">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/jectmwqf.json"
                              trigger="hover"
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-1 border border-white">
                        <div
                          className="flex items-center justify-center"
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          <span>{item.username}</span>
                          <div className="size-7 cursor-pointer">
                            <lord-icon
                              src="https://cdn.lordicon.com/jectmwqf.json"
                              trigger="hover"
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-1 border border-white">
                        <div
                          className="flex items-center justify-center"
                          onClick={() => {
                            copyText(item.password);
                          }}
                        >
                          <span>{item.password}</span>
                          <div className="size-7 cursor-pointer">
                            <lord-icon
                              src="https://cdn.lordicon.com/jectmwqf.json"
                              trigger="hover"
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="justify-center text-center py-1 border border-white">
                        <span
                          className=" cursor-pointer mx-1"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/xyfswyxf.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className=" cursor-pointer mx-1"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/meaqueth.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;

//1 hour 33 min pr github button
