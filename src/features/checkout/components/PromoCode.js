import PropTypes from 'prop-types';

export default function PromoCode(props){
    return (<>
        {props.promoCode?
            <h1>{props.promoCode}</h1>
        :
        <form onSubmit={props.onSubmit}>
            <input name="code" />
            <button type="submit">Apply Code</button>
        </form>
        }
        </>
    )

}

PromoCode.propTypes = {
    onSubmit: PropTypes.func,
    promoCode: PropTypes.string
}