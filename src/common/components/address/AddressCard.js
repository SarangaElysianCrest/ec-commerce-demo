import PropTypes from 'prop-types';

export default function AddressCard(props){
  
    return <div><ul >
        {props.showName&&
            <>
                <li>{props.firstName}</li>
                <li>{props.lastName}</li>
            </>
        }
        <li>{props.addressLine1}</li>
        <li>{props.addressLine2}</li>
        <li>{props.city}</li>
        <li>{props.province}</li>
        <li>{props.postalCode}</li>
        <li>{props.postalCode}</li>
        <li>{props.country}</li>
        {props.showEmail&&
            <li>{props.email}</li>
        }
        {props.showPhone&&
            <li>{props.phone}</li>
        }
    </ul></div>

}

AddressCard.propTypes = {
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired,
    city: PropTypes.string,
    province: PropTypes.string,
    postalCode: PropTypes.string,
    country: PropTypes.string,
    showEmail: PropTypes.bool,
    email: PropTypes.string,
    showPhone: PropTypes.bool,
    phone: PropTypes.number,
    showName: PropTypes.bool,
    firstName: PropTypes.string,
    lastName: PropTypes.string
}