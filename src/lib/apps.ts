import {
  type LucideIcon,
} from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { ReelSaverIcon } from "@/components/icons";

export interface App {
  id: string;
  name: string;
  description: string;
  icon: string | LucideIcon | ((props: React.SVGProps<SVGSVGElement>) => JSX.Element);
  href: string;
  imageHint: string;
  isPopular?: boolean;
}

export const apps: App[] = [
  {
    id: "status-saver",
    name: "Status Saver",
    description: "Save and share WhatsApp statuses effortlessly.",
    icon: FaWhatsapp,
    href: "/apps/status-saver",
    imageHint: "mobile app checkmark",
    isPopular: true,
  },
  {
    id: "reel-story-saver",
    name: "Reel/Story Saver",
    description: "Download Instagram Reels and Stories in high quality.",
    icon: ReelSaverIcon,
    href: "/apps/reel-story-saver",
    imageHint: "mobile app download",
    isPopular: true,
  },
];
