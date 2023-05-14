import { useEffect, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import ErrorBoundry from '../components/ErrorBoundry'
import { requestRobots, setSearchField } from '../redux/searchRobots/actions'
import Loading from '../components/Loading'
import Header from '../components/Header'

// add delay of 2000ms for lazy import

const delay = async (promise) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
    return promise
}

const CardList = lazy(() => delay(import('../components/CardList')))

const mapStateToProps = (state) => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
})

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
})

function App(props) {
    const { searchField, onSearchChange, robots, onRequestRobots } = props

    useEffect(() => {
        onRequestRobots()
    }, [onRequestRobots])

    const filteredRobots = robots.filter((robot) =>
        robot.name.toLowerCase().startsWith(searchField.toLowerCase())
    )

    return (
        <div className="tc">
            <div>
                <Header />
                <SearchBox onSearchChange={onSearchChange} />
                <Suspense fallback={<Loading />}>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </Suspense>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
