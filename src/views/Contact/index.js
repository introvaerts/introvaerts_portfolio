import ViewContainer from '../../shared/components/ViewContainer';
import SecondaryTitle from '../../shared/components/SecondaryTitle';
import { Label } from './Style';

const Contact = ({
  firstName,
  lastName,
  contactTagline,
  address,
  phoneNumber,
  businessEmail,
  page_title,
}) => {
  const { street_and_number, postalcode, city, country } = address;
  return (
    <>
      <SecondaryTitle text={page_title} />
      <ViewContainer>
        {contactTagline ? <h3>{contactTagline}</h3> : null}
        <Label>Name:</Label>
        <p>
          {firstName} {lastName}
        </p>
        {address ? (
          <div>
            <Label>Address</Label>
            <p>{street_and_number}</p>
            <p>
              {postalcode} {city}
            </p>
            <p>{country}</p>
          </div>
        ) : null}
        {phoneNumber ? (
          <div>
            <Label>Phone Number:</Label>
            <p>{phoneNumber}</p>
          </div>
        ) : null}
        {businessEmail ? (
          <div>
            <Label>Email:</Label>
            <p>{businessEmail}</p>
          </div>
        ) : null}
      </ViewContainer>
    </>
  );
};

export default Contact;
