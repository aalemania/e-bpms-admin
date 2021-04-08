import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import AuthService from "./../../../services/authentication.service";

const VerifyOtpForm = ({ verification_type = "account_verify" }) => {
	const { register, errors, handleSubmit } = useForm();
	const [loading, setLoading] = useState(false);

	const onSubmit = async (data) => {
		if (Object.entries(errors).length === 0) {
			if (verification_type === "account_verify") {
				await AuthService.verifyUserOtp(data.otp, setLoading);

				return;
			}

			await AuthService.verifyUserLoginOtp(data.otp, setLoading);
		}

		return;
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Label>
				{verification_type === "account_verify"
					? "Account Verify"
					: "Login Verify"}{" "}
				One-Time-Passcode
			</Form.Label>
			<Form.Group>
				<input
					type="text"
					name="otp"
					className="form-control"
					placeholder="ex. 645189"
					ref={register({ required: true })}
				/>
				{errors.otp && (
					<small className="text-danger">This field is required</small>
				)}
			</Form.Group>

			<small className="text-muted">
				Please provide your e-mail address in the field above, once completed,
				you will receive an e-email containing a one-time-password shortly. This
				OTP will be used for the final step in resetting your account password.
			</small>

			<div className="my-4">
				<Button
					type="submit"
					variant="primary"
					className="px-3 py-2"
					block
					disabled={loading}
				>
					<span className="font-weight-bold">Submit</span>
				</Button>
			</div>
		</Form>
	);
};

export default VerifyOtpForm;
