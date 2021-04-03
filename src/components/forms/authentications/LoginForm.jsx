import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import AuthenticationService from "./../../../services/authentication.service";

const LoginForm = () => {
	const { register, errors, handleSubmit } = useForm();

	const onSubmit = async (credentials) => {
		if (Object.entries(errors).length === 0) {
			console.log(credentials);

			await AuthenticationService.login({
				email: credentials.email,
				password: credentials.password,
			});
		}

		return;
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Group>
				<Form.Label>Email</Form.Label>
				<input
					type="text"
					name="email"
					className="form-control"
					placeholder="yourname@domain.com"
					ref={register({ required: true })}
				/>
				{errors.email && (
					<small className="text-danger">This field is required</small>
				)}
			</Form.Group>

			<Form.Group>
				<Form.Label>Password</Form.Label>
				<input
					type="password"
					name="password"
					className="form-control"
					placeholder="********"
					ref={register({ required: true })}
				/>
				{errors.password && (
					<small className="text-danger">This field is required</small>
				)}
			</Form.Group>

			<div className="col-md-4 col-lg-6 mx-auto my-4">
				<Button type="submit" variant="primary" className="px-3 py-2" block>
					<span className="font-weight-bold">Sign In</span>
				</Button>
			</div>

			<div className="d-flex">
				<div className="text-left">
					<a href="/">
						<small>Forgot password?</small>
					</a>
				</div>

				<div className="text-right ml-auto">
					<a href="/">
						<small>Request for an account</small>
					</a>
				</div>
			</div>
		</Form>
	);
};

export default LoginForm;
