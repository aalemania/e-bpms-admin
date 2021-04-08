import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ForgotPasswordForm = () => {
	const { register, errors, handleSubmit } = useForm();

	const onSubmit = (data) => {
		if (Object.entries(errors).length === 0) {
			console.log(data);
		}

		return;
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Label>Forgot your password?</Form.Label>
			<Form.Group>
				<input
					type="text"
					name="email"
					className="form-control"
					placeholder="Email"
					ref={register({ required: true })}
				/>
				{errors.email && (
					<small className="text-danger">This field is required</small>
				)}
			</Form.Group>

			<small className="text-muted">
				Please provide your e-mail address in the field above, once once
				completed, you will receive an e-email containing a one-time-password
				shortly. This OTP will be used for the final step in resetting your
				account password.
			</small>

			<div className="my-4">
				<Button variant="primary" className="px-3 py-2" block>
					<span className="font-weight-bold">Submit</span>
				</Button>
			</div>
		</Form>
	);
};

export default ForgotPasswordForm;
