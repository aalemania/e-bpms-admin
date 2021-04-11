import React from "react";
import { CFooter } from "@coreui/react";
import { getCurrentYear } from "./../utils/dates";

const TheFooter = () => {
	return (
		<CFooter fixed={false}>
			<div>
				<small>
					<a
						href="https://e-bpms.site/"
						target="_blank"
						rel="noopener noreferrer"
					>
						KIC E-BPMS
					</a>
				</small>
				<small className="ml-1">
					&copy; {getCurrentYear} All Rights Reserved.
				</small>
			</div>
			<div className="mfs-auto">
				<small className="mr-1">Powered by</small>
				<small>
					<a
						href="https://coreui.io/react"
						target="_blank"
						rel="noopener noreferrer"
					>
						CoreUI for React
					</a>
				</small>
			</div>
		</CFooter>
	);
};

export default React.memo(TheFooter);
