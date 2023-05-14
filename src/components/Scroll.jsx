function Scroll({ children }) {
    return (
        <div
            style={{
                height: '800px',
            }}
            className="overflow-y-scroll ba bw3"
        >
            {children}
        </div>
    )
}

export default Scroll
