const Contact = ({
  firstName,
  lastName,
  contactTagline,
  address,
  phoneNumber,
  businessEmail,
}) => {
  const { street_and_number, postalcode, city, country } = address;
  return (
    <>
      <h6>{firstName}</h6>
      <h6>{lastName}</h6>
      {contactTagline ? <h6>{contactTagline}</h6> : null}
      {address ? (
        <div>
          <h6>{street_and_number}</h6>
          <h6>
            {postalcode} {city}
          </h6>
          <h6>{country}</h6>
        </div>
      ) : null}
      {phoneNumber ? <h6>{phoneNumber}</h6> : null}
      {businessEmail ? <h6>{businessEmail}</h6> : null}
    </>
  );
};

export default Contact;
