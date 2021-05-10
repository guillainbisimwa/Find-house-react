import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import houseActions from '../redux/actions/HouseActions';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const houses = useSelector(state => state.houseReducer);
  let myHouse = {};

  if (houses.houses !== undefined) {
    myHouse = houses.houses.find(house => house.id.toString() === id);
  }

  useEffect(() => {
    dispatch(houseActions.getAllHouses());
  }, []);

  return (
    <div>
      <div>{id}</div>
      {houses.loading && <em>Loading houses...</em>}
      {houses.error && <span className="text-danger">ERROR: {houses.error}</span>}
      <div>{houses.houses && <em>All houses...</em>}</div>
      <div>{houses.houses &&
        <div>
          {myHouse.about}
          {myHouse.owner}
          <img src={myHouse.picture} alt={myHouse.owner} width='300' />
        </div>
      }
      </div>
    </div>
  );
};

export default Details;
