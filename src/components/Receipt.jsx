import './Receipt.css'

const Receipt = (props) => {
    

    console.log(props.data.order.length)

    return (
        <div className="Receipt">
            <p>{props.data.id}</p>
            <h2>{props.data.person}</h2>
        </div>
    )
}

export default Receipt