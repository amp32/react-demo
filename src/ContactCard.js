let ContactCard = (props) => {
    return (
        <div className="contact-card">
            <img src={props.contact[1]} />
            <h3>{props.contact[0]}</h3>
            <p>Phone: {props.contact[2]}</p>
            <p>Email: {props.contact[3]}</p>
        </div>
    )
};

export default ContactCard;
