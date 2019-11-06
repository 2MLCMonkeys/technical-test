import React from "react";
import { Navbar, NavbarBrand } from "reactstrap"

class NavTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar color="light">
                    <NavbarBrand className="text-muted" href="https://2mlcmonkeys.github.io/technical-test-rang/">
                        <h4>Client Remittance History</h4>
                    </NavbarBrand>
                </Navbar>
            </div>
        )
    }

}

export default NavTop;

