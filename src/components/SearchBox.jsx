function SearchBox({ onSearchChange }) {
    return (
        <div className="pa2">
            <input
                type="search"
                placeholder="Search a robot"
                className="pa3 ba b--green bg-lightest-blue"
                onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchBox
