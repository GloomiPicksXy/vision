/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card id="delete-account" sx={{ height: "100%" }}>
      <VuiBox mb="28px" display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="h6" fontWeight="medium" color="white">
          Invoices
        </VuiTypography>
        <VuiButton variant="contained" color="info" size="small">
          VIEW ALL
        </VuiButton>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="February, 01, 2025" id="#MS-415646" price="27,000" />
          <Invoice date="December, 23, 2024" id="#RV-126749" price="50,000" />
          <Invoice date="September, 05, 2024" id="#QW-103578" price="170,000" />
          <Invoice date="June, 8, 2024" id="#MS-415646" price="90,000" />
          <Invoice date="May, 27, 2024" id="#AR-803481" price="200,000" noGutter />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Invoices;
