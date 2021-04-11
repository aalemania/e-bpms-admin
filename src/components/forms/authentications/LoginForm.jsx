import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import AuthService from "./../../../services/authentication.service";

const LoginForm = () => {
	const { register, errors, handleSubmit } = useForm();
	const [loading, setLoading] = useState(false);

	const onSubmit = async (credentials) => {
		if (Object.entries(errors).length === 0) {
			setLoading(true);

			await AuthService.login(
				{
					email: credentials.email,
					password: credentials.password,
				},
				setLoading
			);
		}

		return;
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Group>
				<input
					type="text"
					name="email"
					className={`form-control ${errors.email && "border-danger"}`}
					placeholder="Email or username"
					ref={register({ required: true })}
				/>
				{errors.email && <small className="text-danger">This field is required</small>}
			</Form.Group>

			<Form.Group>
				<input
					type="password"
					name="password"
					className={`form-control ${errors.password && "border-danger"}`}
					placeholder="Password"
					ref={register({ required: true })}
				/>
				{errors.password && <small className="text-danger">This field is required</small>}
			</Form.Group>

			<Form.Group>
				<Form.Group controlId="remember-me-checkbox">
					<Form.Check type="checkbox" label="Remember me" />
				</Form.Group>
			</Form.Group>

			<div className="my-4">
				<Button type="submit" variant="primary" className="px-3 py-3" block disabled={loading}>
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
