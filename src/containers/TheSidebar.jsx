import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	CCreateElement,
	CSidebar,
	CSidebarBrand,
	CSidebarNav,
	CSidebarNavDivider,
	CSidebarNavTitle,
	CSidebarMinimizer,
	CSidebarNavDropdown,
	CSidebarNavItem,
} from "@coreui/react";

// sidebar nav config
import navigation from "./_nav";

const TheSidebar = () => {
	const dispatch = useDispatch();
	const show = useSelector((state) => state.sidebarShow);

	return (
		<CSidebar
			show={show}
			onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
		>
			<CSidebarBrand className="d-md-down-none" to="/">
				<img
					src="/images/icons/brand-icon.ico"
					alt="E-BPMS brand icon"
					className="img-fluid"
				/>
			</CSidebarBrand>

			<CSidebarNav>
				<CCreateElement
					items={navigation}
					components={{
						CSidebarNavDivider,
						CSidebarNavDropdown,
						CSidebarNavItem,
						CSidebarNavTitle,
					}}
				/>
			</CSidebarNav>

			<CSidebarMinimizer className="c-d-md-down-none" />
		</CSidebar>
	);
};

export default React.memo(TheSidebar);
