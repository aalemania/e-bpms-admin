export const setPaymentStatusStr = (paymentStatus) => {
	switch (paymentStatus) {
		case "services-dp-50%":
			return "Service Fees Downpayment (50%)";

		case "services-dp-completion":
			return "Service Fees Downpayment (Full)";

		case "building-permit-fees":
			return "Building Permit Fees (Paid)";

		default:
			return "No Payments (Pending)";
	}
};
