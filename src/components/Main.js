import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import houseActions from '../redux/actions/HouseActions';

const Main = ({ userLogged, houses, myFavorites }) => {
  const dispatch = useDispatch();

  const addToFavorites = (houseId, e) => {
    e.preventDefault();
    dispatch(houseActions.addToFavorites(userLogged.id, houseId));
  };

  const checkIfFavorite = (id) => {
    const found = myFavorites.some(item => item.id === id);
    return found;
  };

  return (
    <div>
      <div className="col-lg-8 offset-lg-2">
        {houses.loading && <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center p-10"><span className="w-20 h-20"><svg width="25" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2d3748" className="w-full h-full"><g fill="none" fillRule="evenodd" strokeWidth="4"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g></svg></span><div className="text-center text-xs mt-2">Loading...</div></div>
        }
        {houses.error && <span className="text-danger">ERROR: {houses.error}</span>}
        {houses.houses &&
          <div className="intro-y grid grid-cols-12 gap-6 mt-5 p-5">
            {houses.houses.map(house =>
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
                {!checkIfFavorite(house.id) ?
                  <Link to='/favorites' onClick={e => addToFavorites(house.id, e)} className='bg-primary py-3 mt-3 px-6 text-white block font-semibold rounded focus:outline-none'>Add to favorites</Link>
                  : <span className='bg-black bg-opacity-40 py-3 mt-3 px-6 text-white block font-semibold rounded focus:outline-none block'>Added to favorite</span>
                }
              </div>,
            )}
          </div>
        }
        <p>
        </p>
      </div>
    </div>
  );
};

Main.propTypes = {
  userLogged: PropTypes.object.isRequired,
  houses: PropTypes.object.isRequired,
  myFavorites: PropTypes.array.isRequired,
};

export default Main;
