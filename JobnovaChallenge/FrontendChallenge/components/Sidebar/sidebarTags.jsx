import {
  Briefcase,
  Bot,
  FileText,
  User,
  Settings,
  CreditCard,
  PlusCircle,
  LogOut,
} from "lucide-react";

export const sidebarTags = [
  {
    title: "Jobs",
    link: "/",
    icon: <Briefcase className="h-5 w-5 stroke-[1.75]" />,
  },
  {
    title: "AI Mock Interview",
    link: "/mock",
    icon: <Bot className="h-5 w-5 stroke-[1.75]" />,
  },
  {
    title: "Resume",
    link: "/resume",
    icon: <FileText className="h-5 w-5 stroke-[1.75]" />,
  },
  {
    title: "Profile",
    link: "/profile",
    icon: <User className="h-5 w-5 stroke-[1.75]" />,
  },
  {
    title: "Setting",
    link: "/settings",
    icon: <Settings className="h-5 w-5 stroke-[1.75]" />,
  },
  {
    title: "Subscription",
    link: "/subscription",
    icon: <CreditCard className="h-5 w-5 stroke-[1.75]" />,
  },
  {
    title: "Extra Credits",
    link: "/credits",
    icon: <PlusCircle className="h-5 w-5 stroke-[1.75]" />,
  },
  // optional bottom item like your screenshot (Logout)
  {
    title: "Logout",
    link: "/logout",
    icon: <LogOut className="h-5 w-5 stroke-[1.75]" />,
  },
];