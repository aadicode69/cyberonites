import React from "react";
import BugBountyImage from "../../img/events/Bug-Bounty.png";

export default function Security() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 pt-20 p-5">
      <img src={BugBountyImage} alt="bug-bounty" className="w-full" />
    </div>
  );
}
