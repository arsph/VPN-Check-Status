import axios from "axios";
import { useState } from "react";
import logo from "../assets/img/logo.png";

function Inputlink() {

  const [userInfo, setUserInfo] = useState(null);
  const [err, setErr] = useState(null);

  const checkVless = async (e) => {
    e.preventDefault(); // Prevent page reload

    let link = e.target.elements.link.value;
    let user = link.substring(link.lastIndexOf("-") + 1);
    setErr(null); setUserInfo(null);

    try {
        await axios.post("/login", {
            username: "arsalan",
            password: "Arsi73Arsi73"}, 
            {
              withCredentials: true, // Allow cookies
            });

        } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
    }

    try {
        const response = await axios.get("/panel/api/inbounds/getClientTraffics/"+ user, 
            { 
                withCredentials: true });
    
        if (response.data.obj === null) {
            throw new Error("Invalid Vless link");
        }
    
        const email = response.data.obj.email;
        const enabled = response.data.obj.enabled;
        const up = response.data.obj.up;
        const down = response.data.obj.down;
        const expiryTime = response.data.obj.expiryTime;
        const total = response.data.obj.total;
        const remainedTraffic = Math.round((total - up - down) / 1024 / 1024 / 1024 * 100) / 100;
        const totalTraffic = Math.round(total / 1024 / 1024 / 1024 * 100) / 100; 
    
        const expiryTimestamp = new Date(expiryTime).getTime();
        const currentTime = new Date().getTime();
        const timeDifference = expiryTimestamp - currentTime;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
        setUserInfo({
          email,
          enabled,
          totalTraffic,
          remainedTraffic,
          expiryTime,
          days,hours
        });
    
    } catch (error) {
        // console.error("Error fetching data:", error);
        setErr("Invalid Vless link");
    }
      
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        {/* 🔹 Logo */}
        <div className="flex items-center justify-center mb-4">
          <img src={logo} alt="Logo" className="w-32 h-32"/>
        </div>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Check VPN Status
        </h2>
        <form className="space-y-8" onSubmit={checkVless}>
          {/* 🔹 Input Field */}
          <div className="grid grid-cols-3 gap-4 mt-3 items-center">
            <label
              htmlFor="link"
              className="text-end text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Paste your Vless link:
            </label>
            <input
              type="text"
              id="link"
              className="col-span-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Vless://"
              required
            />
          </div>

          {/* 🔹 Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Check
          </button>
        </form>

        {userInfo && (
          <div>
            <div className="mt-3 grid grid-cols-5 gap-1 items-center rounded-full bg-gray-500 text-blue-950 text-center py-4 px-8 mx-6">
              <span className="col-span-3 col-start-2">User: <div className="font-bold inline-block">{userInfo.email}</div></span>
              <span className="col-span-3 col-start-2">Remained Traffic: <div className="font-bold inline-block">{userInfo.remainedTraffic} of {userInfo.totalTraffic} GB</div></span>
              <span className="col-span-3 col-start-2">Expiry Time: <div className="font-bold inline-block">{userInfo.expiryTime === 0 ? "Unlimited" : userInfo.days + " Days & " + userInfo.hours + " hours"}</div></span>
            </div>
          </div>
        )}

        {err &&(
          <div>
            <div className="mt-3 grid grid-cols-6 gap-1 items-center py-4 px-8 mx-6">
              <span className="col-span-2 col-start-3 rounded-full bg-red-300 text-blue-950 text-center py-3"><div className="font-bold inline-block">{err}</div></span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Inputlink;