import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon, Star } from "lucide-react";

interface IInfoCard {
    title: string;
    icon: LucideIcon;
    bodyText: string;
    id: number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Rank Ups",
        bodyText: "All clients have gained a minimum of 600 RR throughout just a few months of coaching.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "100% Free",
        bodyText: " Clients are coached for free. We have never asked any of clients for payment unlike other coaching sites.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "5 Star Rating",
        bodyText: " 5 Stars across all coaching sessions. All our clients rated us 5 stars following the end of coaching.",
        icon: Star,
        id: 3
    },
]

export default infoCards;
