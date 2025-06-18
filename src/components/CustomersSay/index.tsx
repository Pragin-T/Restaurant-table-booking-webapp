import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>Our Customers Feedback!</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=687&q=80"
          customerName="Sara"
          testimonial="Absolutely fantastic! The flavors were rich and authentic. The ambiance added a special touch to the evening. Highly recommend the signature dishes."
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=687&q=80"
          customerName="Sam"
          testimonial="Loved the interior and the friendly staff. The pasta was perfectly cooked. Only thing I’d improve is the wait time, but overall a great experience!"
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=687&q=80"
          customerName="Arjun"
          testimonial="The food was decent and the presentation was clean. It's a good spot for casual dining, though nothing stood out as exceptional this time."
        />
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=687&q=80"
          customerName="Bob"
          testimonial="From the moment I walked in, everything felt perfect. Delicious dishes, fast service, and cozy vibes. Easily one of my favorite places now!"
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;
