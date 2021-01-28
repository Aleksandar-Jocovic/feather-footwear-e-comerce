import { createSelector } from 'reselect';

const selectHomeMenu = state => state.homeMenu;

export const selectHomeMenuSections = createSelector(
	[selectHomeMenu],
	homeMenu => homeMenu.sections
);
