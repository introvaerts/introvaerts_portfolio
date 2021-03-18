import ViewContainer from '../../shared/components/ViewContainer';
import SecondaryTitle from '../../shared/components/SecondaryTitle';
import { Label, ContactBox } from './Style';

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
        <ContactBox>
          <div>
            <Label>Name</Label>
            <p>
              {firstName} {lastName}
            </p>
          </div>
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
              <Label>Phone Number</Label>
              <p>{phoneNumber}</p>
            </div>
          ) : null}
          {businessEmail ? (
            <div>
              <Label>Email</Label>
              <p>{businessEmail}</p>
            </div>
          ) : null}
        </ContactBox>
      </ViewContainer>
    </>
  );
};

export default Contact;
