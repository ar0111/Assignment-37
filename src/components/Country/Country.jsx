import './country.css'

const Country = (props) => {
    // eslint-disable-next-line react/prop-types
    const {population, area} = props.country;
    // eslint-disable-next-line react/prop-types
    const {png} = props.country.flags;
    return (
        <div className="country">
            <h1>Name: {props.country.name.common}</h1>
            <h2>Population: {population}</h2>
            <h2>Area: {area}</h2>
            <img src={png}/>
        </div>
    );
};

export default Country;