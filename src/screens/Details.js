import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import houseActions from '../redux/actions/HouseActions';

const Details = () => {
  const { id, favorite } = useParams();

  const dispatch = useDispatch();
  const userLogged = JSON.parse(localStorage.getItem('user'));

  const addToFavorites = (houseId, e) => {
    e.preventDefault();
    dispatch(houseActions.addToFavorites(userLogged.id, houseId));
  };

  const houses = useSelector(state => state.houseReducer);
  let myHouse = {};

  if (houses.houses !== undefined) {
    myHouse = houses.houses.find(house => house.id.toString() === id);
    myHouse.favorite = favorite === 'true';
  }

  useEffect(() => {
    dispatch(houseActions.getAllHouses());
  }, []);

  return (
    <div className="mb-5">
      <Header user={userLogged} />
      <h2 className="text-center font-bold text-3xl xl:text-5xl text-left p-5">{myHouse.about}</h2>
      {houses.loading && (
      <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center p-10">
        <span className="w-20 h-20">
          <svg width="25" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2d3748" className="w-full h-full">
            <g fill="none" fillRule="evenodd" strokeWidth="4">
              <circle cx="22" cy="22" r="1">
                <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
              </circle>
              <circle cx="22" cy="22" r="1">
                <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </span>
        <div className="text-center text-xs mt-2">Loading...</div>
      </div>
      )}
      {houses.error && (
      <span className="text-danger">
        ERROR:
        {houses.error}
      </span>
      )}
      <div>
        {houses.houses
        && (
        <div className="intro-y m-auto w-3/4 shadow-2xl">
          <div className="relative image-fit block">
            <img className="rounded-t-md" src={myHouse.picture} alt={myHouse.owner} />
            <div className="absolute bottom-0 text-white px-5 pb-6 z-10">
              <span className="px-2 py-1 rounded bg-primary font-bold">
                $
                {myHouse.price}
                {' '}
                / Month
              </span>
              <span className="block font-medium text-xl mt-3">{myHouse.about}</span>
            </div>
          </div>
          <div className="p-5 text-gray-700 dark:text-gray-600">
            Picture bys
            {' '}
            {myHouse.owner}
            .
            <span className="block">{myHouse.details}</span>
          </div>
          {!myHouse.favorite
            ? <Link to="/favorites" onClick={e => addToFavorites(myHouse.id, e)} className="bg-primary py-3 mt-3 px-6 text-white block font-semibold rounded focus:outline-none">Add to favorites</Link>
            : <span className="bg-black bg-opacity-40 py-3 mt-3 px-6 text-white block font-semibold rounded focus:outline-none block">Added to favorite</span>}
        </div>
        )}
      </div>
    </div>
  );
};

export default Details;
