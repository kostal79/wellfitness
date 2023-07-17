import React from "react"
import ContentLoader from "react-content-loader"

const GroupCardSceleton = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={160}
    viewBox="0 0 300 160"
    backgroundColor="#DBDDE5"
    foregroundColor="#E9EAEF"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="240" height="35" /> 
    <rect x="0" y="46" rx="0" ry="0" width="240" height="30" /> 
    <rect x="0" y="84" rx="0" ry="0" width="240" height="30" /> 
    <rect x="0" y="122" rx="0" ry="0" width="240" height="30" />
  </ContentLoader>
)

export default GroupCardSceleton