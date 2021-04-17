import { Link } from "react-router-dom";
import { Button, Badge } from "react-bootstrap";
import { FiEdit, FiFileText } from "react-icons/fi";
import UserAvatar from "react-user-avatar";
import Moment from "react-moment";

import { isPaidStatusBadge, setPaymentStatusBadge, setApplicationStatusBadge } from "./../../../reusables/badges.constants";

// APPLICATION RECORDS
export const application_records_table_header = [
	{
		name: "Record ID",
		selector: "uuid",
		sortable: false,
	},
	{
		name: "Applicant Name",
		selector: "owner",
		sortable: false,
		cell: (row) => (
			<>
				<UserAvatar size="32" color="#1E1E2D" name={`${row.applicant_user.first_name} ${row.applicant_user.last_name}`} />
				<div className="pl-2">{`${row.applicant_user.first_name} ${row.applicant_user.last_name}`}</div>
			</>
		),
	},
	{
		name: "Project Name",
		selector: "project_data.name",
		sortable: false,
	},
	{
		name: "Status",
		selector: "status",
		sortable: false,
		cell: (row) => setApplicationStatusBadge(row.status),
	},
	{
		name: "Payment Status",
		selector: "payment",
		sortable: false,
		cell: (row) => setPaymentStatusBadge(row.payment_status),
	},
	{
		name: "Date Submitted",
		selector: "payment",
		sortable: false,
		cell: (row) => (
			<div>
				<Moment date={row.created_at} format="MMMM D, Y" />
			</div>
		),
	},
	{
		name: "Actions",
		selector: "id",
		sortable: false,
		cell: (row) => (
			<div className="datatable_actionButtons">
				<Link to={`/applications/${row.uuid}/show`}>
					<Button size="sm" variant="light">
						<FiEdit className="mr-1" /> Manage
					</Button>
				</Link>
			</div>
		),
	},
];

// INVOICES RECORDS
export const invoices_records_table_header = [
	{
		name: "Record ID",
		selector: "uuid",
		sortable: true,
	},
	{
		name: "Application ID",
		selector: "application_record.uuid",
		sortable: true,
	},
	{
		name: "Payment Status",
		selector: "is_paid",
		sortable: true,
		cell: (row) => isPaidStatusBadge(row.is_paid),
	},
	{
		name: "Payment Type",
		selector: "payment_for",
		sortable: true,
		cell: (row) => setPaymentStatusBadge(row.payment_for),
	},
	{
		name: "Stripe Receipt URL",
		selector: "stripe_receipt_url",
		sortable: true,
		cell: (row) =>
			row.stripe_receipt_url ? (
				<a href={row.stripe_receipt_url} target="_blank" rel="noreferrer">
					<small>{row.stripe_receipt_url}</small>
				</a>
			) : (
				<Badge variant="danger">Not Available</Badge>
			),
	},
	{
		name: "Actions",
		selector: "id",
		sortable: false,
		cell: (row) => (
			<div className="datatable_actionButtons">
				<Link to={`/invoices/${row.uuid}/show`}>
					<Button size="sm" variant="light">
						<FiFileText className="mr-1" /> View Invoice
					</Button>
				</Link>
			</div>
		),
	},
];
