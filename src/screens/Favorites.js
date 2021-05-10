import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import houseActions from '../redux/actions/HouseActions';

const Favorites = () => {
  const dispatch = useDispatch();
  const userLogged = JSON.parse(localStorage.getItem('user'));

  const favorites = useSelector(state => state.favoriteReducer);

  const houses = useSelector(state => state.houseReducer);
  let myFavorites = [];

  if (houses.houses !== undefined && favorites.favorites !== undefined) {
    myFavorites = houses.houses.filter(elm1 => favorites.favorites.map(elm =>
      JSON.stringify(elm.house_id)).includes(JSON.stringify(elm1.id)));
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(houseActions.getAllFavorites(user.id));
  }, []);

  useEffect(() => {
    dispatch(houseActions.getAllHouses());
  }, []);

  return (
    <div>
      <Header user={userLogged} />
      <div className="col-lg-8 offset-lg-2">

        <h2 className='text-center font-bold text-3xl xl:text-5xl text-left pt-2'>My Favorite houses</h2>
        {favorites.loading && <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center p-10"><span className="w-20 h-20"><svg width="25" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2d3748" className="w-full h-full"><g fill="none" fillRule="evenodd" strokeWidth="4"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g></svg></span><div className="text-center text-xs mt-2">Loading...</div></div>
        }
        {favorites.error && <span className="text-danger">ERROR: {favorites.error}</span>}
        {favorites.favorites &&
          <div className="intro-y grid grid-cols-12 gap-6 mt-5 p-5">
            {myFavorites.length === 0 ? <h2 className='col-span-12 text-center font-bold text-2xl xl:text-4xl text-left pt-10'>No Favorite houses yet</h2> : ''}
            {myFavorites.map(house =>
              <div key={house.id} className="intro-y blog col-span-12 md:col-span-6 lg:col-span-4 shadow-2xl">
                <Link to={`/details/${house.id}`} className="relative image-fit block">
                  <img className="rounded-t-md" src={house.picture} alt={house.owner} />
                  <div className="absolute bottom-0 text-white px-5 pb-6 z-10">
                    <span className="px-2 py-1 rounded bg-primary font-bold">$ {house.price} / Month</span>
                    <span className="block font-medium text-xl mt-3">{house.about}</span>
                  </div>
                </Link>
                <div className="p-5 text-gray-700 dark:text-gray-600">
                Picture bys {house.owner}.
                  <span className="block truncate ...">{house.details}</span>
                </div>
                <span className='bg-black bg-opacity-40 py-3 mt-3 px-6 text-white block font-semibold rounded focus:outline-none block'>Added to favorite</span>
              </div>,
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default Favorites;
