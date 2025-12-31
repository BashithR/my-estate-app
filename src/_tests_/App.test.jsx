import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { ChakraProvider } from "@chakra-ui/react";

// Mock property data (important!)
jest.mock("../data/properties.json", () => ({
  properties: [
    {
      id: "prop1",
      type: "House",
      title: "Semi-Detached Family Home",
      bedrooms: 3,
      price: 750000,
      tenure: "Freehold",
      description:
        "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
      location: "Petts Wood Road, Petts Wood, Orpington BR5",
      picture: null,
      images: null,
      url: "properties/prop1.html",
      floorPlan: null,
      added: {
        month: "October",
        day: 12,
        year: 2022,
      },
    },
    {
      id: "prop2",
      type: "Flat",
      title: "Modern Two-Bedroom Garden Flat with Private Courtyard",
      bedrooms: 2,
      price: 399995,
      tenure: "Freehold",
      description:
        "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
      location: "Crofton Road Orpington BR6",
      picture: null,
      images: null,
      url: "properties/prop2.html",
      floorPlan: null,
      added: {
        month: "September",
        day: 14,
        year: 2022,
      },
    },
  ],
}));

test("Filters properties by property type", () => {
  render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );

  // Select property type = House
  fireEvent.change(screen.getByLabelText(/property type/i), {
    target: { value: "House" },
  });

  // Click search
  fireEvent.click(screen.getByRole("button", { name: /search/i }));

  // House should appear
  expect(screen.getByText(/Semi-Detached Family Home/i)).toBeInTheDocument();

  // Flat should NOT appear
  expect(
    screen.queryByText(/Modern Two-Bedroom Garden Flat with Private Courtyard/i)
  ).not.toBeInTheDocument();
});
