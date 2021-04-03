import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const VerifyOtpForm = () => {
	const { register, errors, handleSubmit } = useForm();

	const onSubmit = (data) => {
		if (Object.entries(errors).length === 0) {
			console.log(data);
		}

		return;
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Group>
				<Form.Label>One-Time-Passcode</Form.Label>
				<input
					type="text"
					name="otp_code"
					className="form-control"
					placeholder="yourname@domain.com"
					ref={register({ required: true })}
				/>
				{errors.otp_code && (
					<small className="text-danger">
						This field is required
					</small>
				)}
			</Form.Group>

			<div className="col-md-4 col-lg-6 mx-auto my-4">
				<Button variant="primary" className="px-3 py-2" block>
					<span className="font-weight-bold">Submit</span>
				</Button>
			</div>
		</Form>
	);
};

export default VerifyOtpForm;
