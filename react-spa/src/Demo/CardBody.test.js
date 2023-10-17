import { screen, render } from '@testing-library/react';
import CardBody from './CardBody';

test("renders the CardBody Component", () => {

    render(<CardBody msg="Hello World" />)

    const paragraphEL = screen.queryByText(/Hello World/i, { exact: false });

    expect(paragraphEL).toBeInTheDocument();

})


test("SHould true to be truthy", () => {
    expect(true).toBeTruthy();
})