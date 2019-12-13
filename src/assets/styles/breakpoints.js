export const breakpoints = {
	phone: 576,
	tablet: 768,
	desktop: 992,
	large: 1200
};

export const maxWidthContainer = {
	phone: 540,
	tablet: 720,
	desktop: 960,
	large: 1140
};

export default {
	phone: `(min-width: ${breakpoints.phone}px)`,
	tablet: `(min-width: ${breakpoints.tablet}px)`,
	desktop: `(min-width: ${breakpoints.desktop}px)`,
	large: `(min-width: ${breakpoints.large}px)`
};
