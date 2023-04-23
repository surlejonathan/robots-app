import Card from './Card'

function CardList({ robots }) {
    return (
        <div>
            {robots.map((robot) => (
                <Card
                    key={robot.id}
                    id={robot.id}
                    name={robot.name}
                    email={robot.email}
                />
            ))}
        </div>
    )
}

export default CardList
