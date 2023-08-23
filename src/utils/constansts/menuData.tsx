import { ReactNode } from "react";
import FeedIcon from "/public/svgs/feed.svg";
import BookmarkIcon from "/public/svgs/bookmark.svg";
import BlogsIcon from "/public/svgs/blogs.svg";
import DraftIcon from "/public/svgs/draft.svg";
import AnalyticsIcon from "/public/svgs/analyticicon.svg";

type LinkProps = {
  name: string;
  link: string;
  icon?: ReactNode;
};

export const Navlinks: LinkProps[] = [
  {
    name: "Feed",
    link: "/feed",
    icon: <FeedIcon />,
  },
  {
    name: "Bookmarks",
    link: "/bookmarks",
    icon: <BookmarkIcon />,
  },
  {
    name: "Blogs",
    link: "/blogs",
    icon: <BlogsIcon />,
  },
  {
    name: "Drafts",
    link: "/drafts",
    icon: <DraftIcon />,
  },
  {
    name: "Analytics",
    link: "/analytics",
    icon: <AnalyticsIcon />,
  },
];

export const blogsTags = [
  "Programming",
  "Data science",
  "Technology",
  "Web development",
  "Machine learning",
  "Politics",
  "Music",
  "Fashion",
  "Football",
];
