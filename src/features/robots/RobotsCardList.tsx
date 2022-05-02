import React from "react";
import {useState, useEffect, ReactElement} from "react";
import { useAppSelector, useAppDispatch } from "../../app/appHooks";
import RobotsCard from "./RobotsCard";
import { selectSearchField } from "../search/searchSlice";
import { selectRobots, fetchRobots } from "./robotsSlice";

const RobotsCardList = () => {
  const dispatch = useAppDispatch();
  const robots = useAppSelector(selectRobots);
  const robotsFetchStatus = useAppSelector((state) => state.robots.status);
  const robotsFetchError = useAppSelector((state) => state.robots.error);
  const searchField = useAppSelector(selectSearchField);
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

  let listContent: ReactElement | ReactElement[];
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