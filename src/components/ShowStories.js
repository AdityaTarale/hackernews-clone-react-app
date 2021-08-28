import React from "react";
import useDataFetcher from "../hooks/useDataFetcher";
import Loader from "./Loader";
import Story from "./Story";

const ShowStories = (props) => {
  const { isLoading, stories } = useDataFetcher(props.type);

  return (
    <React.Fragment>
      <Loader show={isLoading}>Loading...</Loader>
      <React.Fragment>
        {stories?.map((story, index) => (
          <Story key={index} story={story} />
        ))}
      </React.Fragment>
    </React.Fragment>
  );
};

export default ShowStories;
