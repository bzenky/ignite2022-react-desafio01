import ReactGA from 'react-ga'

export const GA_TRACKING_ID = 'G-WPBZSLGCYH'

export function SetGA() {
    ReactGA.initialize(GA_TRACKING_ID)
    ReactGA.pageview('Site view')
}
