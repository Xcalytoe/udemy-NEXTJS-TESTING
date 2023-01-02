import { screen, render } from "@testing-library/react";
import { UserReservations } from "@/components/user/UserReservations";

test("purchase button returns 'Purchase more tickets' text", async () => {
  render(<UserReservations userId={1} />);
  const buttonText = await screen.findByText(/Purchase more tickets/i);
  expect(buttonText).toBeInTheDocument();
});

it("user reservation page does not have button with 'Purchase more tickets'", () => {
  render(<UserReservations userId={0} />);
  const buttonText = screen.queryByRole("button", {
    name: /Purchase more tickets/i,
  });
  expect(buttonText).not.toBeInTheDocument();
});
