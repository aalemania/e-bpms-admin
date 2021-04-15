import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import UserAvatar from "react-user-avatar";
import Moment from "react-moment";

import { setPaymentStatusBadge, setApplicationStatusBadge } from "./../../../reusables/badges.constants";

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
