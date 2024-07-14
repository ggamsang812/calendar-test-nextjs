"use client";

import {
  CombinationCalendar,
  GitHubCalendar,
  LeetCodeCalendar,
} from "github-leetcode-component";

export default function Calendar() {
  return (
    <div>
      <CombinationCalendar
        github_username="ggamsang812"
        leetcode_username="ggamsang812"
      />
      <GitHubCalendar username="ggamsang812" size="medium" />
      <LeetCodeCalendar username="ggamsang812" size="small" />
    </div>
  );
}
