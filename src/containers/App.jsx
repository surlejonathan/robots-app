import { useState, useEffect } from "react";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import ErrorBoundry from "../components/ErrorBoundry";
import { connect } from "react-redux";
import { requestRobots, setSearchField } from "../redux/searchRobots/actions";

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

const App = (props) => {
  const { searchField, onSearchChange, robots, onRequestRobots, isPending } =
    props;

  useEffect(() => {
    onRequestRobots();
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().startsWith(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <div>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox onSearchChange={onSearchChange} />
        {isPending ? (
          <h1>Loading...</h1>
        ) : (
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
