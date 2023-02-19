import ReactGA from "react-ga4"

interface AnalyticsEventTrackerProps {
  category: string
  action: string
  label: string
}

export const useAnalyticsEventTracker = ({ category, action, label }: AnalyticsEventTrackerProps) => {
  return ReactGA.event({
    category,
    action,
    label
  })
}