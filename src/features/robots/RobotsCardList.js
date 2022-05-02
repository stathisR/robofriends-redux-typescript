import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RobotsCard from "./RobotsCard";
import { selectSearchField } from "../search/searchSlice";
import { selectRobots, fetchRobots } from "./robotsSlice";

const RobotsCardList = () => {
  const dispatch = useDispatch();
  const robots = useSelector(selectRobots);
  const robotsFetchStatus = useSelector((state) => state.robots.status);
  const robotsFetchError = useSelector((state) => state.robots.error);
  const searchField = useSelector(selectSearchField);
  const [robotsFiltered, setRobotsFiltered] = useState([]);

  useEffect(() => {
    dispatch(fetchRobots());
  }, [dispatch]);

  useEffect(() => {
    if (robots) {
      setRobotsFiltered(robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField);
      }));
    }
  }, [searchField, robots]);

  let listContent = '';
  switch (robotsFetchStatus) {
    case 'loading':
      listContent = <h2>Loading...</h2>
      break;
    case 'succeeded':
      listContent = robotsFiltered.map(robot => {
        const { id, name, email } = robot;
        return <RobotsCard key={id} id={id} name={name} email={email} />;
      });
      break;
    default:
      listContent = <h2>Error loading robots! {robotsFetchError}</h2>
  }

  return (
    <div>
      {listContent}
    </div>
  );
}

export default RobotsCardList;