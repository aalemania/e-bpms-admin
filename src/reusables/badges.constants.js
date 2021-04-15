import { Badge } from "react-bootstrap";

export const setPaymentStatusBadge = (paymentLength) => {
	switch (paymentLength) {
		case "services-dp-50%":
			return <Badge variant="primary">Service Fees Downpayment (50%)</Badge>;

		case "services-db-completion":
			return <Badge variant="info">Service Fees Downpayment (Full)</Badge>;

		case "buidling-permit-fees":
			return <Badge variant="success">Building Permit Fees (Paid)</Badge>;

		default:
			return <Badge variant="danger">No Payments (Pending)</Badge>;
	}
};

export const setApplicationStatusBadge = (applicationStatus) => {
	switch (applicationStatus) {
		case "approved":
			return <Badge variant="success">Approved</Badge>;

		case "declined":
			return <Badge variant="danger">Declined</Badge>;

		case "pending":
			return <Badge variant="warning">Pending</Badge>;

		case "on-hold":
			return <Badge variant="danger">On-hold</Badge>;

		default:
			return applicationStatus;
	}
};
