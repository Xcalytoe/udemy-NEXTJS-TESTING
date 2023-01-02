import { screen, render } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

it("reservation page shows the currect number of available seats", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);
  const seatCountText = await screen.findByText(/10 seats left/i);

  expect(seatCountText).toBeInTheDocument();
});

test("reservations page shows sold out message and no purchase more button when there are no seats available", async () => {
  render(<Reservation submitPurchase={jest.fn()} showId={1} />);
  const soldOutHeading = await screen.findByText(/Show is sold out!/i);
  expect(soldOutHeading).toBeInTheDocument();

  const buttonText = screen.queryByRole("button", { name: /purchase/i });
  expect(buttonText).not.toBeInTheDocument();
});
