import { useNavigation } from "@remix-run/react";
// import { cx } from "~/utils";
// import { reject, isBoolean, isNil, flatten } from "lodash";
// import compose from 'lodash/fp/compose'
// import join from 'lodash/fp/join'
// import reject from 'lodash/fp/reject'
// import isBoolean from 'lodash/fp/isBoolean'
// import isNil from 'lodash/fp/isNil'
// import flatten from 'lodash/fp/flatten'
// import React, { useEffect, useRef, useState } from "react";

export const ProgressBar = () => {
  const navigation = useNavigation();
  const active = navigation.state !== "idle";

  return (<>
    { active && <div
      role="progressbar"
      aria-hidden={!active}
      aria-valuetext={active ? "Loading" : undefined}
      className="fixed inset-x-0 top-0 left-0 z-50 h-1 animate-pulse"
    >
      <div className="progress-bar bg-yellow h-1.5"></div>
    </div>
   }</>);
}