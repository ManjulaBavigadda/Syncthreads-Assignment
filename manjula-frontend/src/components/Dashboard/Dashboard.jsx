import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setdata } from "../Redux/action";
import "./Dashboard.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Dashboard = () => {
  const cityname = [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Delhi",
    "Hydrabad",
    "Chennai",
    "Wardha",
    "Bhusawal",
    "Yavatmal",
  ];
  const scrarr = [
    "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg",
    "https://pebblespune.com/images/Shaniwar-Wada-Fort.jpg",
    "https://images.thrillophilia.com/image/upload/s--HNdC4af7--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/194/303/original/1582874121_nagpur1.jpg.jpg?1582874121",
    "https://static.trip101.com/paragraph_media/pictures/001/817/876/large/travel-4813658_1280.jpg?1583142928",
    "https://cdn.theculturetrip.com/wp-content/uploads/2016/06/24498998325_f451c67aae_o.jpg",
    "https://www.holidify.com/images/bgImages/CHENNAI%20.jpg",
    "https://content.jdmagicbox.com/comp/wardha/l7/9999p7152.7152.140219074527.y1l7/catalogue/sevagram-ashram-wardha-ho-wardha-tourist-attraction-aw6dy4a.jpg",
    "https://pbs.twimg.com/media/DkpIfxLXcAIz35N.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/82/Yavatmal_Municipal_Council.JPG"

  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  let key = "84e270f970a83172aa187868316821fa";
  const name = useSelector((state) => state.Map.userId);
  const getMap = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      )
      .then((res) => {
        console.log(res.data);
        dispatch(setdata(res.data));
        navigate("/map");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMap(city);
  }, [city]);
  return (
    <div className="div1">
     

      {cityname.map((e,index) => {
        console.log(e);
        return (
          <div className="div2" >
            <div  >
              {name == null ? (
                <div
                  onClick={() => {
                    toast(`You Have Not Logged In, Please Login`,{
                      type:"error"
                    })
                  }}
                >
               <h1 className="h1" >{e}</h1>
               <img className="img" src={scrarr[index]}  />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setCity(e);
                  }}
                >
               <h1 className="h1" >{e}</h1>
               <img className="img" src={scrarr[index]}  />

                </div>
              )}
            </div>
          </div>
        );
      })}
       <ToastContainer />
    </div>
  );
};
