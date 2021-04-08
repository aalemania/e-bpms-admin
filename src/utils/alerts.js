import Swal from "sweetalert2";

export const alertDialog = ({ title = "Info", icon = "info", text = "" }) =>
	Swal.fire({
		title: title,
		icon: icon,
		text: text,
		confirmButtonText: "Okay",
	});
