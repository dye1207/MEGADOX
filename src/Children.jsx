import PropTypes from 'prop-types'

function Children({name, path, number}) {


    return (
        <div>
            <h3>그룹명: {name} </h3>
            <img src={path} width="100%" alt="error" />
            <h5>인원수: {number}</h5>
        </div>
    )
}

Children.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    number: PropTypes.array.isRequired,
}

export default Children;