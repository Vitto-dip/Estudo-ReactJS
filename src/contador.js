


function contador(props) {
    const resetar = props.onResetar;
    return (
        <div>
            <h1> Contador </h1>
            <div style={{ cursor: 'pointer' }} onClick={resetar}> {props.value} </div>
        </div>
    )
}

export default contador;